const supertest = require("supertest")
const { app } = require("../app")

describe('GET /call-backend', () => {
  const agent = supertest.agent(app)

  it('should respond with a message from the backend', (done) => {
    agent
      .get("/call-backend")
      .expect(200, { message: "Go says: 'Hello from backend!'" })
      .end((err) => {
        if (err) return done(err)
        done()
      })
  })
})

