(function() {var implementors = {
"cumulus_client_consensus_common":[["impl&lt;Block, BI, BE&gt; <a class=\"trait\" href=\"sc_consensus/block_import/trait.BlockImport.html\" title=\"trait sc_consensus::block_import::BlockImport\">BlockImport</a>&lt;Block&gt; for <a class=\"struct\" href=\"cumulus_client_consensus_common/struct.ParachainBlockImport.html\" title=\"struct cumulus_client_consensus_common::ParachainBlockImport\">ParachainBlockImport</a>&lt;Block, BI, BE&gt;<span class=\"where fmt-newline\">where\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>,\n    BI: <a class=\"trait\" href=\"sc_consensus/block_import/trait.BlockImport.html\" title=\"trait sc_consensus::block_import::BlockImport\">BlockImport</a>&lt;Block&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    BE: <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt;,</span>"]],
"polkadot_service":[],
"sc_consensus":[],
"sc_consensus_babe":[["impl&lt;Block, Client, Inner&gt; <a class=\"trait\" href=\"sc_consensus/block_import/trait.BlockImport.html\" title=\"trait sc_consensus::block_import::BlockImport\">BlockImport</a>&lt;Block&gt; for <a class=\"struct\" href=\"sc_consensus_babe/struct.BabeBlockImport.html\" title=\"struct sc_consensus_babe::BabeBlockImport\">BabeBlockImport</a>&lt;Block, Client, Inner&gt;<span class=\"where fmt-newline\">where\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>,\n    Inner: <a class=\"trait\" href=\"sc_consensus/block_import/trait.BlockImport.html\" title=\"trait sc_consensus::block_import::BlockImport\">BlockImport</a>&lt;Block&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    Inner::<a class=\"associatedtype\" href=\"sc_consensus/block_import/trait.BlockImport.html#associatedtype.Error\" title=\"type sc_consensus::block_import::BlockImport::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;Error&gt;,\n    Client: <a class=\"trait\" href=\"sp_blockchain/backend/trait.HeaderBackend.html\" title=\"trait sp_blockchain::backend::HeaderBackend\">HeaderBackend</a>&lt;Block&gt; + <a class=\"trait\" href=\"sp_blockchain/header_metadata/trait.HeaderMetadata.html\" title=\"trait sp_blockchain::header_metadata::HeaderMetadata\">HeaderMetadata</a>&lt;Block, Error = <a class=\"enum\" href=\"sp_blockchain/error/enum.Error.html\" title=\"enum sp_blockchain::error::Error\">Error</a>&gt; + <a class=\"trait\" href=\"sc_client_api/backend/trait.AuxStore.html\" title=\"trait sc_client_api::backend::AuxStore\">AuxStore</a> + ProvideRuntimeApi&lt;Block&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    Client::Api: <a class=\"trait\" href=\"sc_consensus_babe/trait.BabeApi.html\" title=\"trait sc_consensus_babe::BabeApi\">BabeApi</a>&lt;Block&gt; + ApiExt&lt;Block&gt;,</span>"]],
"sc_consensus_beefy":[["impl&lt;Block, BE, Runtime, I&gt; <a class=\"trait\" href=\"sc_consensus/block_import/trait.BlockImport.html\" title=\"trait sc_consensus::block_import::BlockImport\">BlockImport</a>&lt;Block&gt; for <a class=\"struct\" href=\"sc_consensus_beefy/import/struct.BeefyBlockImport.html\" title=\"struct sc_consensus_beefy::import::BeefyBlockImport\">BeefyBlockImport</a>&lt;Block, BE, Runtime, I&gt;<span class=\"where fmt-newline\">where\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>,\n    BE: <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt;,\n    I: <a class=\"trait\" href=\"sc_consensus/block_import/trait.BlockImport.html\" title=\"trait sc_consensus::block_import::BlockImport\">BlockImport</a>&lt;Block, Error = <a class=\"enum\" href=\"sp_consensus/error/enum.Error.html\" title=\"enum sp_consensus::error::Error\">Error</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    Runtime: ProvideRuntimeApi&lt;Block&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    Runtime::Api: <a class=\"trait\" href=\"sp_consensus_beefy/trait.BeefyApi.html\" title=\"trait sp_consensus_beefy::BeefyApi\">BeefyApi</a>&lt;Block, <a class=\"type\" href=\"sp_consensus_beefy/ecdsa_crypto/type.AuthorityId.html\" title=\"type sp_consensus_beefy::ecdsa_crypto::AuthorityId\">AuthorityId</a>&gt;,</span>"]],
"sc_consensus_grandpa":[["impl&lt;BE, Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>, Client, SC&gt; <a class=\"trait\" href=\"sc_consensus/block_import/trait.BlockImport.html\" title=\"trait sc_consensus::block_import::BlockImport\">BlockImport</a>&lt;Block&gt; for <a class=\"struct\" href=\"sc_consensus_grandpa/struct.GrandpaBlockImport.html\" title=\"struct sc_consensus_grandpa::GrandpaBlockImport\">GrandpaBlockImport</a>&lt;BE, Block, Client, SC&gt;<span class=\"where fmt-newline\">where\n    <a class=\"type\" href=\"sp_runtime/traits/type.NumberFor.html\" title=\"type sp_runtime::traits::NumberFor\">NumberFor</a>&lt;Block&gt;: <a class=\"trait\" href=\"sc_consensus_grandpa/trait.BlockNumberOps.html\" title=\"trait sc_consensus_grandpa::BlockNumberOps\">BlockNumberOps</a>,\n    BE: <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt;,\n    Client: <a class=\"trait\" href=\"sc_consensus_grandpa/trait.ClientForGrandpa.html\" title=\"trait sc_consensus_grandpa::ClientForGrandpa\">ClientForGrandpa</a>&lt;Block, BE&gt;,\n    Client::Api: <a class=\"trait\" href=\"sc_consensus_grandpa/trait.GrandpaApi.html\" title=\"trait sc_consensus_grandpa::GrandpaApi\">GrandpaApi</a>&lt;Block&gt;,\n    for&lt;'a&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.reference.html\">&amp;'a Client</a>: <a class=\"trait\" href=\"sc_consensus/block_import/trait.BlockImport.html\" title=\"trait sc_consensus::block_import::BlockImport\">BlockImport</a>&lt;Block, Error = <a class=\"enum\" href=\"sp_consensus/error/enum.Error.html\" title=\"enum sp_consensus::error::Error\">Error</a>&gt;,\n    SC: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>"]],
"sc_consensus_pow":[["impl&lt;B, I, C, S, Algorithm, CIDP&gt; <a class=\"trait\" href=\"sc_consensus/block_import/trait.BlockImport.html\" title=\"trait sc_consensus::block_import::BlockImport\">BlockImport</a>&lt;B&gt; for <a class=\"struct\" href=\"sc_consensus_pow/struct.PowBlockImport.html\" title=\"struct sc_consensus_pow::PowBlockImport\">PowBlockImport</a>&lt;B, I, C, S, Algorithm, CIDP&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>,\n    I: <a class=\"trait\" href=\"sc_consensus/block_import/trait.BlockImport.html\" title=\"trait sc_consensus::block_import::BlockImport\">BlockImport</a>&lt;B&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    I::<a class=\"associatedtype\" href=\"sc_consensus/block_import/trait.BlockImport.html#associatedtype.Error\" title=\"type sc_consensus::block_import::BlockImport::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;Error&gt;,\n    S: SelectChain&lt;B&gt;,\n    C: ProvideRuntimeApi&lt;B&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"sp_blockchain/backend/trait.HeaderBackend.html\" title=\"trait sp_blockchain::backend::HeaderBackend\">HeaderBackend</a>&lt;B&gt; + <a class=\"trait\" href=\"sc_client_api/backend/trait.AuxStore.html\" title=\"trait sc_client_api::backend::AuxStore\">AuxStore</a> + <a class=\"trait\" href=\"sc_client_api/client/trait.BlockOf.html\" title=\"trait sc_client_api::client::BlockOf\">BlockOf</a>,\n    C::Api: BlockBuilderApi&lt;B&gt;,\n    Algorithm: <a class=\"trait\" href=\"sc_consensus_pow/trait.PowAlgorithm.html\" title=\"trait sc_consensus_pow::PowAlgorithm\">PowAlgorithm</a>&lt;B&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    Algorithm::<a class=\"associatedtype\" href=\"sc_consensus_pow/trait.PowAlgorithm.html#associatedtype.Difficulty\" title=\"type sc_consensus_pow::PowAlgorithm::Difficulty\">Difficulty</a>: 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    CIDP: CreateInherentDataProviders&lt;B, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>"]],
"sc_network_test":[["impl <a class=\"trait\" href=\"sc_consensus/block_import/trait.BlockImport.html\" title=\"trait sc_consensus::block_import::BlockImport\">BlockImport</a>&lt;<a class=\"struct\" href=\"sp_runtime/generic/block/struct.Block.html\" title=\"struct sp_runtime::generic::block::Block\">Block</a>&lt;<a class=\"struct\" href=\"sp_runtime/generic/header/struct.Header.html\" title=\"struct sp_runtime::generic::header::Header\">Header</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u64.html\">u64</a>, <a class=\"struct\" href=\"sp_runtime/traits/struct.BlakeTwo256.html\" title=\"struct sp_runtime::traits::BlakeTwo256\">BlakeTwo256</a>&gt;, <a class=\"struct\" href=\"sp_runtime/generic/unchecked_extrinsic/struct.UncheckedExtrinsic.html\" title=\"struct sp_runtime::generic::unchecked_extrinsic::UncheckedExtrinsic\">UncheckedExtrinsic</a>&lt;<a class=\"struct\" href=\"sp_core/sr25519/struct.Public.html\" title=\"struct sp_core::sr25519::Public\">Public</a>, <a class=\"enum\" href=\"substrate_test_runtime/enum.RuntimeCall.html\" title=\"enum substrate_test_runtime::RuntimeCall\">RuntimeCall</a>, <a class=\"struct\" href=\"sp_core/sr25519/struct.Signature.html\" title=\"struct sp_core::sr25519::Signature\">Signature</a>, (<a class=\"struct\" href=\"frame_system/extensions/check_nonce/struct.CheckNonce.html\" title=\"struct frame_system::extensions::check_nonce::CheckNonce\">CheckNonce</a>&lt;<a class=\"struct\" href=\"substrate_test_runtime/struct.Runtime.html\" title=\"struct substrate_test_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"frame_system/extensions/check_weight/struct.CheckWeight.html\" title=\"struct frame_system::extensions::check_weight::CheckWeight\">CheckWeight</a>&lt;<a class=\"struct\" href=\"substrate_test_runtime/struct.Runtime.html\" title=\"struct substrate_test_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"substrate_test_runtime/struct.CheckSubstrateCall.html\" title=\"struct substrate_test_runtime::CheckSubstrateCall\">CheckSubstrateCall</a>)&gt;&gt;&gt; for <a class=\"struct\" href=\"sc_network_test/struct.PeersClient.html\" title=\"struct sc_network_test::PeersClient\">PeersClient</a>"],["impl&lt;I&gt; <a class=\"trait\" href=\"sc_consensus/block_import/trait.BlockImport.html\" title=\"trait sc_consensus::block_import::BlockImport\">BlockImport</a>&lt;<a class=\"struct\" href=\"sp_runtime/generic/block/struct.Block.html\" title=\"struct sp_runtime::generic::block::Block\">Block</a>&lt;<a class=\"struct\" href=\"sp_runtime/generic/header/struct.Header.html\" title=\"struct sp_runtime::generic::header::Header\">Header</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u64.html\">u64</a>, <a class=\"struct\" href=\"sp_runtime/traits/struct.BlakeTwo256.html\" title=\"struct sp_runtime::traits::BlakeTwo256\">BlakeTwo256</a>&gt;, <a class=\"struct\" href=\"sp_runtime/generic/unchecked_extrinsic/struct.UncheckedExtrinsic.html\" title=\"struct sp_runtime::generic::unchecked_extrinsic::UncheckedExtrinsic\">UncheckedExtrinsic</a>&lt;<a class=\"struct\" href=\"sp_core/sr25519/struct.Public.html\" title=\"struct sp_core::sr25519::Public\">Public</a>, <a class=\"enum\" href=\"substrate_test_runtime/enum.RuntimeCall.html\" title=\"enum substrate_test_runtime::RuntimeCall\">RuntimeCall</a>, <a class=\"struct\" href=\"sp_core/sr25519/struct.Signature.html\" title=\"struct sp_core::sr25519::Signature\">Signature</a>, (<a class=\"struct\" href=\"frame_system/extensions/check_nonce/struct.CheckNonce.html\" title=\"struct frame_system::extensions::check_nonce::CheckNonce\">CheckNonce</a>&lt;<a class=\"struct\" href=\"substrate_test_runtime/struct.Runtime.html\" title=\"struct substrate_test_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"frame_system/extensions/check_weight/struct.CheckWeight.html\" title=\"struct frame_system::extensions::check_weight::CheckWeight\">CheckWeight</a>&lt;<a class=\"struct\" href=\"substrate_test_runtime/struct.Runtime.html\" title=\"struct substrate_test_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"substrate_test_runtime/struct.CheckSubstrateCall.html\" title=\"struct substrate_test_runtime::CheckSubstrateCall\">CheckSubstrateCall</a>)&gt;&gt;&gt; for <a class=\"struct\" href=\"sc_network_test/struct.BlockImportAdapter.html\" title=\"struct sc_network_test::BlockImportAdapter\">BlockImportAdapter</a>&lt;I&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"sc_consensus/block_import/trait.BlockImport.html\" title=\"trait sc_consensus::block_import::BlockImport\">BlockImport</a>&lt;<a class=\"type\" href=\"sc_network_test/type.Block.html\" title=\"type sc_network_test::Block\">Block</a>, Error = <a class=\"enum\" href=\"sp_consensus/error/enum.Error.html\" title=\"enum sp_consensus::error::Error\">Error</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>"]],
"sc_service":[["impl&lt;B, E, Block, RA&gt; <a class=\"trait\" href=\"sc_consensus/block_import/trait.BlockImport.html\" title=\"trait sc_consensus::block_import::BlockImport\">BlockImport</a>&lt;Block&gt; for &amp;<a class=\"struct\" href=\"sc_service/client/struct.Client.html\" title=\"struct sc_service::client::Client\">Client</a>&lt;B, E, Block, RA&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt;,\n    E: <a class=\"trait\" href=\"sc_client_api/call_executor/trait.CallExecutor.html\" title=\"trait sc_client_api::call_executor::CallExecutor\">CallExecutor</a>&lt;Block&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>,\n    <a class=\"struct\" href=\"sc_service/client/struct.Client.html\" title=\"struct sc_service::client::Client\">Client</a>&lt;B, E, Block, RA&gt;: <a class=\"trait\" href=\"sp_api/trait.ProvideRuntimeApi.html\" title=\"trait sp_api::ProvideRuntimeApi\">ProvideRuntimeApi</a>&lt;Block&gt;,\n    &lt;<a class=\"struct\" href=\"sc_service/client/struct.Client.html\" title=\"struct sc_service::client::Client\">Client</a>&lt;B, E, Block, RA&gt; as <a class=\"trait\" href=\"sp_api/trait.ProvideRuntimeApi.html\" title=\"trait sp_api::ProvideRuntimeApi\">ProvideRuntimeApi</a>&lt;Block&gt;&gt;::<a class=\"associatedtype\" href=\"sp_api/trait.ProvideRuntimeApi.html#associatedtype.Api\" title=\"type sp_api::ProvideRuntimeApi::Api\">Api</a>: <a class=\"trait\" href=\"sp_api/trait.Core.html\" title=\"trait sp_api::Core\">CoreApi</a>&lt;Block&gt; + <a class=\"trait\" href=\"sp_api/trait.ApiExt.html\" title=\"trait sp_api::ApiExt\">ApiExt</a>&lt;Block&gt;,\n    RA: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>"],["impl&lt;B, E, Block, RA&gt; <a class=\"trait\" href=\"sc_consensus/block_import/trait.BlockImport.html\" title=\"trait sc_consensus::block_import::BlockImport\">BlockImport</a>&lt;Block&gt; for <a class=\"struct\" href=\"sc_service/client/struct.Client.html\" title=\"struct sc_service::client::Client\">Client</a>&lt;B, E, Block, RA&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt;,\n    E: <a class=\"trait\" href=\"sc_client_api/call_executor/trait.CallExecutor.html\" title=\"trait sc_client_api::call_executor::CallExecutor\">CallExecutor</a>&lt;Block&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>,\n    Self: <a class=\"trait\" href=\"sp_api/trait.ProvideRuntimeApi.html\" title=\"trait sp_api::ProvideRuntimeApi\">ProvideRuntimeApi</a>&lt;Block&gt;,\n    &lt;Self as <a class=\"trait\" href=\"sp_api/trait.ProvideRuntimeApi.html\" title=\"trait sp_api::ProvideRuntimeApi\">ProvideRuntimeApi</a>&lt;Block&gt;&gt;::<a class=\"associatedtype\" href=\"sp_api/trait.ProvideRuntimeApi.html#associatedtype.Api\" title=\"type sp_api::ProvideRuntimeApi::Api\">Api</a>: <a class=\"trait\" href=\"sp_api/trait.Core.html\" title=\"trait sp_api::Core\">CoreApi</a>&lt;Block&gt; + <a class=\"trait\" href=\"sp_api/trait.ApiExt.html\" title=\"trait sp_api::ApiExt\">ApiExt</a>&lt;Block&gt;,\n    RA: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()