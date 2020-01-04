import request from 'supertest';
import app from '../app';
describe('Testing The App with trying some possible requests for CTR API', () => {
  test('Success request with predicted results #1', async () => {
    const res = await request(app)
      .post('/calculateCost')
      .send({
        VS5: 10,
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.ctr).toEqual(0.0016306374881059269);
  });
  test('Success request with predicted results #2', async () => {
    const res = await request(app)
      .post('/calculateCost')
      .send({
        VS5: 10,
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.ctr).toEqual(0.0012566694744961901);
  });
});
