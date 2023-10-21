const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // Import your Express app
const expect = chai.expect;

chai.use(chaiHttp);

describe('Testing test', () => {
  it('Returns array of members', (done) => {
    chai
      .request(app)
      .get('/api/test')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
