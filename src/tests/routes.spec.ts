import request from 'supertest';
import { expect } from 'chai';
import app from '../app';

describe('Scan Routes', () => {
  let scanServiceStub;
  beforeEach(() => {
    scanServiceStub = {
      getAllScans: () => Promise.resolve([]),
      getScanById: (id: string) => Promise.resolve(null),
    };
    // Mock the scan service in the app
    app.set('scanService', scanServiceStub);
  });
  it('should get all scan submissions', async () => {
    const response = await request(app).get('/api/scan-submissions');
    expect(response.status).to.equal(200);
    //expect(response.body).toBeDefined();
  });

  // it('should get a scan submission by ID', async () => {
  //     const response = await request(app).get('/api/scans/1');
  //     expect(response.status).toBe(200);
  //     expect(response.body).toBeDefined();
  // });
});
