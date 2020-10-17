#!/usr/bin/env node

const { WsProvider, ApiPromise } = require('@polkadot/api');

async function getBlock() {
  console.log(process.argv);
  const params = process.argv.slice(2);

  console.log(`====== Connecting ... Polkadot network ======`);
  const provider = new WsProvider('wss://rpc.polkadot.io');
  const api = await ApiPromise.create({ provider });

  if (params[0] == 'hash' && params[1]) {
    const block = await api.rpc.chain.getBlock(params[1]);
    console.log(`Block ${params[1]}:`, JSON.stringify(block, null, 2));
  } else {
    const header = await api.rpc.chain.getHeader();
    console.log(`====== Latest block information on Polkadot network ======`);
    console.log(`Block : ${header.number} - ${header.hash}`);
    console.log(`Parent Block: ${header.parentHash}`);
    console.log(`Extrinsics Root: ${header.extrinsicsRoot}`);
  }
  process.exit();
}

getBlock().catch(console.error);
