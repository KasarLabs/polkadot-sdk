// This file is part of Substrate.

// Copyright (C) Parity Technologies (UK) Ltd.
// SPDX-License-Identifier: Apache-2.0

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// 	http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//! Tests for pallet-example-kitchensink.

use crate::*;
use frame_support::{
	assert_ok, derive_impl,
	dynamic_params::{dynamic_pallet_params, dynamic_params},
	parameter_types,
	traits::ConstU64,
};
use frame_system::EnsureRoot;
use sp_runtime::BuildStorage;
// Reexport crate as its pallet name for construct_runtime.
use crate as pallet_example_kitchensink;

type Block = frame_system::mocking::MockBlock<Test>;

// For testing the pallet, we construct a mock runtime.
frame_support::construct_runtime!(
	pub enum Test
	{
		System: frame_system::{Pallet, Call, Config<T>, Storage, Event<T>},
		Balances: pallet_balances::{Pallet, Call, Storage, Config<T>, Event<T>},
		Kitchensink: pallet_example_kitchensink::{Pallet, Call, Storage, Config<T>, Event<T>},
		Parameters: pallet_parameters::{Pallet, Call, Storage, Event<T>},
	}
);

/// Using a default config for [`frame_system`] in tests. See `default-config` example for more
/// details.
#[derive_impl(frame_system::config_preludes::TestDefaultConfig as frame_system::DefaultConfig)]
impl frame_system::Config for Test {
	type Block = Block;
	type AccountData = pallet_balances::AccountData<u64>;
}

impl pallet_balances::Config for Test {
	type MaxLocks = ();
	type MaxReserves = ();
	type ReserveIdentifier = [u8; 8];
	type Balance = u64;
	type DustRemoval = ();
	type RuntimeEvent = RuntimeEvent;
	type ExistentialDeposit = ConstU64<1>;
	type AccountStore = System;
	type WeightInfo = ();
	type FreezeIdentifier = ();
	type MaxFreezes = ();
	type RuntimeHoldReason = ();
	type RuntimeFreezeReason = ();
	type MaxHolds = ();
}

parameter_types! {
	pub const InMetadata: u32 = 30;
}

impl Config for Test {
	type RuntimeEvent = RuntimeEvent;
	type WeightInfo = ();

	type Currency = Balances;
	type InMetadata = InMetadata;

	const FOO: u32 = 100;

	fn some_function() -> u32 {
		5u32
	}
	// Here we are using the new dynamic parameter:
	type DynamicParam = dynamic_params::kitchensink::MagicNumber;
}

impl pallet_parameters::Config for Test {
	type AggregratedKeyValue = RuntimeParameters;
	type RuntimeEvent = RuntimeEvent;
	type AdminOrigin = EnsureRoot<Self::AccountId>;
	type WeightInfo = ();
}

// Here we define some dynamic parameters that can be changed at runtime.
#[dynamic_params(RuntimeParameters)]
pub mod dynamic_params {
	use super::*;

	#[dynamic_pallet_params(pallet_parameters::Parameters::<Test>, Basic)]
	pub mod kitchensink {
		#[codec(index = 0)]
		pub static MagicNumber: u64 = 42;
	}
}

// This function basically just builds a genesis storage key/value store according to
// our desired mockup.
pub fn new_test_ext() -> sp_io::TestExternalities {
	let t = RuntimeGenesisConfig {
		// We use default for brevity, but you can configure as desired if needed.
		system: Default::default(),
		balances: Default::default(),
		kitchensink: pallet_example_kitchensink::GenesisConfig { bar: 32, foo: 24 },
	}
	.build_storage()
	.unwrap();
	t.into()
}

#[test]
fn set_foo_works() {
	new_test_ext().execute_with(|| {
		assert_eq!(Foo::<Test>::get(), Some(24)); // From genesis config.

		let val1 = 42;
		assert_ok!(Kitchensink::set_foo(RuntimeOrigin::root(), val1, 2));
		assert_eq!(Foo::<Test>::get(), Some(val1));
	});
}
