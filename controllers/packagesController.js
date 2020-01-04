import { getOptimalCost } from '../helpers/packsHelper';
import prodcuts from '../data/items';
export const calculateCost = (req, res) => {
  const body = req.body; //input
  const orders = [];
  for (let packCode in body) {
    const packsLimits = prodcuts[packCode].Packs.map(pack => pack.limit);
    const packsPrices = prodcuts[packCode].Packs.map(pack => pack.price);

    const targetValue = body[packCode];
    const { totalNumberOfPacks, optimalPacks, totalCost } = getOptimalCost(
      packsLimits,
      targetValue,
      packsPrices
    );

    //console.log(totalNumberOfPacks);
    console.log(optimalPacks);
    console.log(totalCost);

    // const { totalCost, packs, error } = getOptimalCost(
    //   packCode,
    //   body[packCode]
    // );
    // orders.push({ status, totalCost, packs, error });
  }
  const responseObject = {
    Orders: orders,
  };
  res.status(200).json(responseObject);
};
