const { Block, Blockchain } = require("./blockchain");

const myBlockchain = new Blockchain();

myBlockchain.addBlock(new Block(1, Date.now(), { amount: 100 }));
myBlockchain.addBlock(new Block(2, Date.now(), { amount: 50 }));

console.log(JSON.stringify(myBlockchain, null, 2));
console.log("Blockchain válida?", myBlockchain.isChainValid());
