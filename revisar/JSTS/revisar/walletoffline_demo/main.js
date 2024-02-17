let pass = process.argv[2] ?? generatePassword();
const { createRequire } = require('node:module');
require = createRequire(__filename); 

const { ethers } = require('ethers');

let wallet = ethers.HDNodeWallet.createRandom();

wallet.encrypt(pass)
.then((data)=>{
    console.log(
        {
            pass: pass,    
            addr: wallet.address,
            pubK: wallet.publicKey,
            prvK: wallet.privateKey,
            phrase: wallet.mnemonic.phrase,
            json: JSON.parse(JSON.stringify(data))
        }
    )
});

function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}