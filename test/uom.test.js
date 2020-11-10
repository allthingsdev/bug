import { expect, server, UOM_URL } from './setup.js';

describe('UOM page test', () => {
    it('gets UOM url', done => {
        server
            .get(`${UOM_URL}/`)
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.message).to.equal(
                    'Environment variable is coming across'
                );
                done();
            });
    });
});