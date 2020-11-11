import { expect, server, MODES_URL } from './setup.js';

describe('payment modes page test', () => {
    it('gets payment modes url', done => {
        server
            .get(`${MODES_URL}/`)
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