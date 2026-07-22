import request from 'supertest';
import app from '../app.js';

describe('GET /api/health', () => {
  it('returns ok status', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});

describe('unknown routes', () => {
  it('returns 404 for a route that does not exist', async () => {
    const res = await request(app).get('/api/does-not-exist');
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty('error');
  });
});

describe('write routes require authentication', () => {
  it.each([
    ['post', '/api/camps'],
    ['post', '/api/appointments'],
    ['post', '/api/bloodrequests'],
    ['post', '/api/bloodstock/add'],
    ['post', '/api/save-user'],
  ])('%s %s rejects unauthenticated requests', async (method, path) => {
    const res = await request(app)[method](path).send({});
    expect(res.status).toBe(401);
  });
});

describe('GET /api/bloodbanks/nearby', () => {
  it('rejects requests missing lat/lng', async () => {
    const res = await request(app).get('/api/bloodbanks/nearby');
    expect(res.status).toBe(400);
  });
});
