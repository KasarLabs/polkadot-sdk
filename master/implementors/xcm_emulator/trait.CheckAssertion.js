(function() {var implementors = {
"integration_tests_common":[["impl&lt;Origin, Destination, Hops, Args&gt; <a class=\"trait\" href=\"xcm_emulator/trait.CheckAssertion.html\" title=\"trait xcm_emulator::CheckAssertion\">CheckAssertion</a>&lt;Origin, Destination, Hops, Args&gt; for <a class=\"struct\" href=\"integration_tests_common/struct.BridgeHubWococo.html\" title=\"struct integration_tests_common::BridgeHubWococo\">BridgeHubWococo</a><span class=\"where fmt-newline\">where\n    Origin: <a class=\"trait\" href=\"integration_tests_common/trait.Chain.html\" title=\"trait integration_tests_common::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Destination: <a class=\"trait\" href=\"integration_tests_common/trait.Chain.html\" title=\"trait integration_tests_common::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Origin::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type integration_tests_common::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"type\" href=\"xcm_emulator/type.AccountIdOf.html\" title=\"type xcm_emulator::AccountIdOf\">AccountIdOf</a>&lt;Origin::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.Runtime\" title=\"type integration_tests_common::Chain::Runtime\">Runtime</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Destination::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type integration_tests_common::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"type\" href=\"xcm_emulator/type.AccountIdOf.html\" title=\"type xcm_emulator::AccountIdOf\">AccountIdOf</a>&lt;Destination::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.Runtime\" title=\"type integration_tests_common::Chain::Runtime\">Runtime</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Hops: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Args: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;Origin, Destination, Hops, Args&gt; <a class=\"trait\" href=\"xcm_emulator/trait.CheckAssertion.html\" title=\"trait xcm_emulator::CheckAssertion\">CheckAssertion</a>&lt;Origin, Destination, Hops, Args&gt; for <a class=\"struct\" href=\"integration_tests_common/struct.AssetHubWococo.html\" title=\"struct integration_tests_common::AssetHubWococo\">AssetHubWococo</a><span class=\"where fmt-newline\">where\n    Origin: <a class=\"trait\" href=\"integration_tests_common/trait.Chain.html\" title=\"trait integration_tests_common::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Destination: <a class=\"trait\" href=\"integration_tests_common/trait.Chain.html\" title=\"trait integration_tests_common::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Origin::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type integration_tests_common::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"type\" href=\"xcm_emulator/type.AccountIdOf.html\" title=\"type xcm_emulator::AccountIdOf\">AccountIdOf</a>&lt;Origin::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.Runtime\" title=\"type integration_tests_common::Chain::Runtime\">Runtime</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Destination::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type integration_tests_common::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"type\" href=\"xcm_emulator/type.AccountIdOf.html\" title=\"type xcm_emulator::AccountIdOf\">AccountIdOf</a>&lt;Destination::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.Runtime\" title=\"type integration_tests_common::Chain::Runtime\">Runtime</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Hops: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Args: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;Origin, Destination, Hops, Args&gt; <a class=\"trait\" href=\"xcm_emulator/trait.CheckAssertion.html\" title=\"trait xcm_emulator::CheckAssertion\">CheckAssertion</a>&lt;Origin, Destination, Hops, Args&gt; for <a class=\"struct\" href=\"integration_tests_common/struct.Rococo.html\" title=\"struct integration_tests_common::Rococo\">Rococo</a><span class=\"where fmt-newline\">where\n    Origin: <a class=\"trait\" href=\"integration_tests_common/trait.Chain.html\" title=\"trait integration_tests_common::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Destination: <a class=\"trait\" href=\"integration_tests_common/trait.Chain.html\" title=\"trait integration_tests_common::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Origin::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type integration_tests_common::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"type\" href=\"xcm_emulator/type.AccountIdOf.html\" title=\"type xcm_emulator::AccountIdOf\">AccountIdOf</a>&lt;Origin::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.Runtime\" title=\"type integration_tests_common::Chain::Runtime\">Runtime</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Destination::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type integration_tests_common::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"type\" href=\"xcm_emulator/type.AccountIdOf.html\" title=\"type xcm_emulator::AccountIdOf\">AccountIdOf</a>&lt;Destination::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.Runtime\" title=\"type integration_tests_common::Chain::Runtime\">Runtime</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Hops: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Args: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;Origin, Destination, Hops, Args&gt; <a class=\"trait\" href=\"xcm_emulator/trait.CheckAssertion.html\" title=\"trait xcm_emulator::CheckAssertion\">CheckAssertion</a>&lt;Origin, Destination, Hops, Args&gt; for <a class=\"struct\" href=\"integration_tests_common/struct.PenpalRococoB.html\" title=\"struct integration_tests_common::PenpalRococoB\">PenpalRococoB</a><span class=\"where fmt-newline\">where\n    Origin: <a class=\"trait\" href=\"integration_tests_common/trait.Chain.html\" title=\"trait integration_tests_common::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Destination: <a class=\"trait\" href=\"integration_tests_common/trait.Chain.html\" title=\"trait integration_tests_common::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Origin::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type integration_tests_common::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"type\" href=\"xcm_emulator/type.AccountIdOf.html\" title=\"type xcm_emulator::AccountIdOf\">AccountIdOf</a>&lt;Origin::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.Runtime\" title=\"type integration_tests_common::Chain::Runtime\">Runtime</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Destination::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type integration_tests_common::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"type\" href=\"xcm_emulator/type.AccountIdOf.html\" title=\"type xcm_emulator::AccountIdOf\">AccountIdOf</a>&lt;Destination::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.Runtime\" title=\"type integration_tests_common::Chain::Runtime\">Runtime</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Hops: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Args: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;Origin, Destination, Hops, Args&gt; <a class=\"trait\" href=\"xcm_emulator/trait.CheckAssertion.html\" title=\"trait xcm_emulator::CheckAssertion\">CheckAssertion</a>&lt;Origin, Destination, Hops, Args&gt; for <a class=\"struct\" href=\"integration_tests_common/struct.PenpalWestendA.html\" title=\"struct integration_tests_common::PenpalWestendA\">PenpalWestendA</a><span class=\"where fmt-newline\">where\n    Origin: <a class=\"trait\" href=\"integration_tests_common/trait.Chain.html\" title=\"trait integration_tests_common::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Destination: <a class=\"trait\" href=\"integration_tests_common/trait.Chain.html\" title=\"trait integration_tests_common::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Origin::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type integration_tests_common::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"type\" href=\"xcm_emulator/type.AccountIdOf.html\" title=\"type xcm_emulator::AccountIdOf\">AccountIdOf</a>&lt;Origin::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.Runtime\" title=\"type integration_tests_common::Chain::Runtime\">Runtime</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Destination::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type integration_tests_common::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"type\" href=\"xcm_emulator/type.AccountIdOf.html\" title=\"type xcm_emulator::AccountIdOf\">AccountIdOf</a>&lt;Destination::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.Runtime\" title=\"type integration_tests_common::Chain::Runtime\">Runtime</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Hops: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Args: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;Origin, Destination, Hops, Args&gt; <a class=\"trait\" href=\"xcm_emulator/trait.CheckAssertion.html\" title=\"trait xcm_emulator::CheckAssertion\">CheckAssertion</a>&lt;Origin, Destination, Hops, Args&gt; for <a class=\"struct\" href=\"integration_tests_common/struct.Wococo.html\" title=\"struct integration_tests_common::Wococo\">Wococo</a><span class=\"where fmt-newline\">where\n    Origin: <a class=\"trait\" href=\"integration_tests_common/trait.Chain.html\" title=\"trait integration_tests_common::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Destination: <a class=\"trait\" href=\"integration_tests_common/trait.Chain.html\" title=\"trait integration_tests_common::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Origin::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type integration_tests_common::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"type\" href=\"xcm_emulator/type.AccountIdOf.html\" title=\"type xcm_emulator::AccountIdOf\">AccountIdOf</a>&lt;Origin::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.Runtime\" title=\"type integration_tests_common::Chain::Runtime\">Runtime</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Destination::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type integration_tests_common::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"type\" href=\"xcm_emulator/type.AccountIdOf.html\" title=\"type xcm_emulator::AccountIdOf\">AccountIdOf</a>&lt;Destination::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.Runtime\" title=\"type integration_tests_common::Chain::Runtime\">Runtime</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Hops: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Args: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;Origin, Destination, Hops, Args&gt; <a class=\"trait\" href=\"xcm_emulator/trait.CheckAssertion.html\" title=\"trait xcm_emulator::CheckAssertion\">CheckAssertion</a>&lt;Origin, Destination, Hops, Args&gt; for <a class=\"struct\" href=\"integration_tests_common/struct.AssetHubRococo.html\" title=\"struct integration_tests_common::AssetHubRococo\">AssetHubRococo</a><span class=\"where fmt-newline\">where\n    Origin: <a class=\"trait\" href=\"integration_tests_common/trait.Chain.html\" title=\"trait integration_tests_common::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Destination: <a class=\"trait\" href=\"integration_tests_common/trait.Chain.html\" title=\"trait integration_tests_common::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Origin::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type integration_tests_common::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"type\" href=\"xcm_emulator/type.AccountIdOf.html\" title=\"type xcm_emulator::AccountIdOf\">AccountIdOf</a>&lt;Origin::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.Runtime\" title=\"type integration_tests_common::Chain::Runtime\">Runtime</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Destination::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type integration_tests_common::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"type\" href=\"xcm_emulator/type.AccountIdOf.html\" title=\"type xcm_emulator::AccountIdOf\">AccountIdOf</a>&lt;Destination::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.Runtime\" title=\"type integration_tests_common::Chain::Runtime\">Runtime</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Hops: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Args: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;Origin, Destination, Hops, Args&gt; <a class=\"trait\" href=\"xcm_emulator/trait.CheckAssertion.html\" title=\"trait xcm_emulator::CheckAssertion\">CheckAssertion</a>&lt;Origin, Destination, Hops, Args&gt; for <a class=\"struct\" href=\"integration_tests_common/struct.BridgeHubWestend.html\" title=\"struct integration_tests_common::BridgeHubWestend\">BridgeHubWestend</a><span class=\"where fmt-newline\">where\n    Origin: <a class=\"trait\" href=\"integration_tests_common/trait.Chain.html\" title=\"trait integration_tests_common::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Destination: <a class=\"trait\" href=\"integration_tests_common/trait.Chain.html\" title=\"trait integration_tests_common::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Origin::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type integration_tests_common::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"type\" href=\"xcm_emulator/type.AccountIdOf.html\" title=\"type xcm_emulator::AccountIdOf\">AccountIdOf</a>&lt;Origin::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.Runtime\" title=\"type integration_tests_common::Chain::Runtime\">Runtime</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Destination::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type integration_tests_common::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"type\" href=\"xcm_emulator/type.AccountIdOf.html\" title=\"type xcm_emulator::AccountIdOf\">AccountIdOf</a>&lt;Destination::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.Runtime\" title=\"type integration_tests_common::Chain::Runtime\">Runtime</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Hops: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Args: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;Origin, Destination, Hops, Args&gt; <a class=\"trait\" href=\"xcm_emulator/trait.CheckAssertion.html\" title=\"trait xcm_emulator::CheckAssertion\">CheckAssertion</a>&lt;Origin, Destination, Hops, Args&gt; for <a class=\"struct\" href=\"integration_tests_common/struct.Westend.html\" title=\"struct integration_tests_common::Westend\">Westend</a><span class=\"where fmt-newline\">where\n    Origin: <a class=\"trait\" href=\"integration_tests_common/trait.Chain.html\" title=\"trait integration_tests_common::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Destination: <a class=\"trait\" href=\"integration_tests_common/trait.Chain.html\" title=\"trait integration_tests_common::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Origin::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type integration_tests_common::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"type\" href=\"xcm_emulator/type.AccountIdOf.html\" title=\"type xcm_emulator::AccountIdOf\">AccountIdOf</a>&lt;Origin::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.Runtime\" title=\"type integration_tests_common::Chain::Runtime\">Runtime</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Destination::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type integration_tests_common::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"type\" href=\"xcm_emulator/type.AccountIdOf.html\" title=\"type xcm_emulator::AccountIdOf\">AccountIdOf</a>&lt;Destination::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.Runtime\" title=\"type integration_tests_common::Chain::Runtime\">Runtime</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Hops: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Args: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;Origin, Destination, Hops, Args&gt; <a class=\"trait\" href=\"xcm_emulator/trait.CheckAssertion.html\" title=\"trait xcm_emulator::CheckAssertion\">CheckAssertion</a>&lt;Origin, Destination, Hops, Args&gt; for <a class=\"struct\" href=\"integration_tests_common/struct.BridgeHubRococo.html\" title=\"struct integration_tests_common::BridgeHubRococo\">BridgeHubRococo</a><span class=\"where fmt-newline\">where\n    Origin: <a class=\"trait\" href=\"integration_tests_common/trait.Chain.html\" title=\"trait integration_tests_common::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Destination: <a class=\"trait\" href=\"integration_tests_common/trait.Chain.html\" title=\"trait integration_tests_common::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Origin::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type integration_tests_common::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"type\" href=\"xcm_emulator/type.AccountIdOf.html\" title=\"type xcm_emulator::AccountIdOf\">AccountIdOf</a>&lt;Origin::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.Runtime\" title=\"type integration_tests_common::Chain::Runtime\">Runtime</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Destination::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type integration_tests_common::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"type\" href=\"xcm_emulator/type.AccountIdOf.html\" title=\"type xcm_emulator::AccountIdOf\">AccountIdOf</a>&lt;Destination::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.Runtime\" title=\"type integration_tests_common::Chain::Runtime\">Runtime</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Hops: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Args: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;Origin, Destination, Hops, Args&gt; <a class=\"trait\" href=\"xcm_emulator/trait.CheckAssertion.html\" title=\"trait xcm_emulator::CheckAssertion\">CheckAssertion</a>&lt;Origin, Destination, Hops, Args&gt; for <a class=\"struct\" href=\"integration_tests_common/struct.PenpalRococoA.html\" title=\"struct integration_tests_common::PenpalRococoA\">PenpalRococoA</a><span class=\"where fmt-newline\">where\n    Origin: <a class=\"trait\" href=\"integration_tests_common/trait.Chain.html\" title=\"trait integration_tests_common::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Destination: <a class=\"trait\" href=\"integration_tests_common/trait.Chain.html\" title=\"trait integration_tests_common::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Origin::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type integration_tests_common::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"type\" href=\"xcm_emulator/type.AccountIdOf.html\" title=\"type xcm_emulator::AccountIdOf\">AccountIdOf</a>&lt;Origin::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.Runtime\" title=\"type integration_tests_common::Chain::Runtime\">Runtime</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Destination::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type integration_tests_common::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"type\" href=\"xcm_emulator/type.AccountIdOf.html\" title=\"type xcm_emulator::AccountIdOf\">AccountIdOf</a>&lt;Destination::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.Runtime\" title=\"type integration_tests_common::Chain::Runtime\">Runtime</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Hops: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Args: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;Origin, Destination, Hops, Args&gt; <a class=\"trait\" href=\"xcm_emulator/trait.CheckAssertion.html\" title=\"trait xcm_emulator::CheckAssertion\">CheckAssertion</a>&lt;Origin, Destination, Hops, Args&gt; for <a class=\"struct\" href=\"integration_tests_common/struct.AssetHubWestend.html\" title=\"struct integration_tests_common::AssetHubWestend\">AssetHubWestend</a><span class=\"where fmt-newline\">where\n    Origin: <a class=\"trait\" href=\"integration_tests_common/trait.Chain.html\" title=\"trait integration_tests_common::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Destination: <a class=\"trait\" href=\"integration_tests_common/trait.Chain.html\" title=\"trait integration_tests_common::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Origin::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type integration_tests_common::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"type\" href=\"xcm_emulator/type.AccountIdOf.html\" title=\"type xcm_emulator::AccountIdOf\">AccountIdOf</a>&lt;Origin::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.Runtime\" title=\"type integration_tests_common::Chain::Runtime\">Runtime</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Destination::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type integration_tests_common::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"type\" href=\"xcm_emulator/type.AccountIdOf.html\" title=\"type xcm_emulator::AccountIdOf\">AccountIdOf</a>&lt;Destination::<a class=\"associatedtype\" href=\"integration_tests_common/trait.Chain.html#associatedtype.Runtime\" title=\"type integration_tests_common::Chain::Runtime\">Runtime</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Hops: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Args: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"]],
"xcm_emulator":[]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()