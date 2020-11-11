import { expect, server, INDEX_URL } from './setup.js';

describe('index page test', () => {
    it('gets base url', done => {
        server
            .get(`${INDEX_URL}/`)
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