import { expect, server, CAT_URL } from './setup.js';

describe('categories page test', () => {
    it('gets categories url', done => {
        server
            .get(`${CAT_URL}/`)
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