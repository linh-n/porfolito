import request from "supertest";
import app from ".";

describe("API server", () => {
  it("works", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
  });

  it("adds albums", async () => {
    const res = await request(app)
      .post("/albums/add")
      .send({});
    expect(res.status).toBe(200);
  });
});
