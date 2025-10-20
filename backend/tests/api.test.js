const request = require('supertest');
const app = require('../index');

describe('API /api/todos', () => {
  let server;
  beforeAll(() => { server = app.listen(0); });
  afterAll(() => server.close());

  test('GET returns list', async () => {
    const res = await request(server).get('/api/todos');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST creates new todo', async () => {
    const res = await request(server).post('/api/todos').send({ title: 'New' });
    expect(res.status).toBe(201);
    expect(res.body.title).toBe('New');
  });
});