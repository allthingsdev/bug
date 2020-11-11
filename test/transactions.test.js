import { expect, server, TRANS_URL } from './setup.js';

describe('transactions page test', () => {
    it('gets transactions url', done => {
        server
            .get(`${TRANS_URL}/`)
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