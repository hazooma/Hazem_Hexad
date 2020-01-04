// Dynamic Programming Solution with CompleoptimalPacksity O(mV)
const POSITIVE_INF = 10000000;
export const getOptimalCost = (packs, v, prices) => {
  const Memo = []; // save answer
  const table = []; // dynamic programming array
  const packsUsed = []; // save which packs used
  table[0] = 0;
  for (let i = 1; i <= v; i++) {
    table[i] = POSITIVE_INF;
  }
  for (let i = 0; i < packs.length; i++) {
    packsUsed[packs[i]] = 0;
  }

  for (let i = 1; i <= v; i++) {
    // Go through all packs smaller than i
    for (let j = 0; j < packs.length; j++)
      if (packs[j] <= i) {
        let sub_res = table[i - packs[j]];
        if (sub_res !== POSITIVE_INF && sub_res + 1 < table[i]) {
          table[i] = sub_res + 1;
          Memo[i] = packs[j];
        }
      }
  }
  let a = v;
  while (a > 0) {
    packsUsed[Memo[a]]++;
    a -= Memo[a];
  }
  let totalCost = 0;
  const optimalPacks = [];
  for (let i = 0; i < packs.length; i++) {
    if (packsUsed[packs[i]] > 0) {
      optimalPacks.push({
        pack: packs[i],
        used: packsUsed[packs[i]],
        pricePerPack: prices[i],
      });
      totalCost += packsUsed[packs[i]] * prices[i];
    }
  }
  totalCost;

  return {
    totalNumberOfPacks: table[v],
    optimalPacks,
    totalCost: Math.round(totalCost * 100) / 100,
  };
};
