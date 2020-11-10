import { expect, server, USERS_URL } from './setup.js';

describe('users page test', () => {
    it('gets users url', done => {
        server
            .get(`${USERS_URL}/`)
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