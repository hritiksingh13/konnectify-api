const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // Import your Express app
const expect = chai.expect;

chai.use(chaiHttp);

describe('Auth test', () => {
  it('Redirects to google login page', (done) => {
    chai
      .request(app)
      .get('/auth/google')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
