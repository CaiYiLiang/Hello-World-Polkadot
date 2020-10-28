# Read An Account's Pending Payouts

### Hackathon: Hello World! by Polkadot

##### [[ADVANCED CHALLENGE] REST APIs - Read An Account's Pending Payouts](https://gitcoin.co/issue/Polkadot-Network/hello-world-by-polkadot/5/100023931)

##### Steps
- Run a local Kusama node 
  `./target/release/polkadot --chain=kusama` [Check details here](https://github.com/paritytech/polkadot)

1. `yarn` install all dependencies
2.  Run a local instance of [Sidecar](https://github.com/paritytech/substrate-api-sidecar) :
  Option 1: 
  `yarn sidecar:local` connect a local Kusama node

  ![Screen-sidecar:local!](/Read-An-Accounts-Pending-Payouts/imgs/sidecar-kusama-local.jpg)
  
  Option 2: 
  `yarn sidecar:wss` connect Kusama node via wss 

  ![Screen-sidecar:wss!](/Read-An-Accounts-Pending-Payouts/imgs/sidecar-kusama-wss.jpg)

3. `yarn payouts:pending <address> <depth?>`
   
  ![Screen-payouts!](/Read-An-Accounts-Pending-Payouts/imgs/pending-payouts-kusama.jpg)


---

:star2: start it if you like this!!
:raising_hand: By [CherryLiang](https://github.com/CaiYiLiang)