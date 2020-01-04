import { getOptimalCost } from '../helpers/packsHelper';
export const calculateCost = (req, res) => {
  const body = req.body; //input
  const orders = [];
  for (let packCode in body) {
    const { totalCost, packs, error } = getOptimalCost(
      packCode,
      body[packCode]
    );
    orders.push({ status, totalCost, packs, error });
  }
  const responseObject = {
    Orders: orders,
  };
  res.status(200).json(responseObject);
};
