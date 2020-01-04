import { getOptimalCost } from '../helpers/packsHelper';
export const calculateCost = (req, res) => {
  const body = req.body; //input
  for (let packCode in body) {
    const { totalCost, packs } = getOptimalCost(packCode, body[packCode]);
  }
  const responseObject = {
    status: 'Success!',
  };
  res.status(200).json(responseObject);
};
