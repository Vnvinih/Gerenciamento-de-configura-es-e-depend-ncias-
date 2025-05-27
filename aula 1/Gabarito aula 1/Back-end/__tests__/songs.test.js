import request from "supertest";
import app from "../app.js"; // lembre do .js no final

describe("Testes de Integração — API /songs", () => {
  it("Deve retornar uma lista de músicas (GET /songs)", async () => {
    const res = await request(app).get("/songs");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);

    if (res.body.length > 0) {
      expect(res.body[0]).toHaveProperty("title");
      expect(res.body[0]).toHaveProperty("artist");
    }
  });
});
