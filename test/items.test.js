import { expect, server, ITEMS_URL } from './setup.js';

describe('items page test', () => {
    it('gets items url', done => {
        server
            .get(`${ITEMS_URL}/`)
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.message).to.not.equal(
                    'Environment variable is coming across'
                );
                done();
            });
    });
});