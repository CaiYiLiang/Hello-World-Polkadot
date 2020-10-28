const got = require('got');

console.log('Hello Word! Polkadot!');
console.log('------- create by @CherryLiang/Hello-World-Polkadot');
console.log('=============================== ');

console.log(`Your input ${process.argv.slice(2)}`);

const accountId = process.argv[2];
const depth = process.argv[3] || 3;

const baseUrl = 'http://127.0.0.1:8080';
const networkUrl = '/node/version';
const pendingPayoutsUrl = `/accounts/${accountId}/staking-payouts?depth=${depth}&unclaimedOnly=true`;

const requestInfo = async (url) => {
  try {
    const response = await got(url);
    console.log('===============================');
    // console.log(response.body);
    // console.log('===============================');
    return JSON.parse(response.body);
  } catch (error) {
    console.error(error.response.body);
  }
};

const getNetwork = async () => {
  const response = await requestInfo(baseUrl + networkUrl);
  if (response) {
    console.log('Network:', response && response.chain);
  }
};

const getPendingPayouts = async () => {
  if (!accountId) {
    console.log('No accountId...');
    return;
  }
  console.log(`.... Calculating the pending payouts, this might take a while ...`);
  const response = await requestInfo(baseUrl + pendingPayoutsUrl);
  if (response) {
    const sumPendingPayouts = response.erasPayouts.reduce((sumAllPending, eraPayout) => {
      const eraPendingPayouts = eraPayout.payouts.reduce((accEraPending, payout) => {
        return payout
          ? accEraPending + parseInt(payout.nominatorStakingPayout)
          : accEraPending
      },
        0
      );
      console.log(`=== Era: ${eraPayout.era} ===`);
      console.log(`Pending payouts: ${eraPendingPayouts}`);
      return sumAllPending + eraPendingPayouts;
    },
      0
    );

    console.log(`=== Total pending payouts ====`);
    const convertedTotalPending = sumPendingPayouts / Math.pow(10, 12);
    console.log(`${convertedTotalPending} KSM`);
  }
};

getNetwork();
getPendingPayouts();
