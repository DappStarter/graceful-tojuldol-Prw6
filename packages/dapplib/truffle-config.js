require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remind mistake heavy problem boil tattoo'; 
let testAccounts = [
"0xdd5eb1f85a761658ef61ac84a89a0c587a418b029d10ce834d7017cb851a88de",
"0x4737430bf624c5386fc74fdf52dd7a124552f2e29d6a6eb8fc5cdd934bea0a36",
"0xbea6fe72091c168993019b664ab7712b27047c9703a0ed6a644fc3bfaeba76aa",
"0xce27527c6157265b4ae9222015b127e494cb007c1163aa7763bec98c5fa5463e",
"0x36c860dda6dee46e1dccdc01d37751a12b4d1c80c8f3efc3431aa2122289e847",
"0x2cba7b0166c8a68a220781d818cfdba57f0fee16f77748df3d6f4f11b4147692",
"0x6a51053bfaaecfdf1765529508163719e3a569e4134e5cb833e1d04bf7556b3c",
"0xd93f5fdf8fa0b3346ef3a8c6c8880b4bccb10596bc06704b7b745d9b9c7f02c7",
"0xcf09cc331ee34cf7476509e8143df76fae89a9086f06ecb684e353652c4b6ba5",
"0x166989db74fe8868822dc872b73250722b881e25089a9e08fa8faf7e04f0de26"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

