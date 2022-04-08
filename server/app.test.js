const request = require("supertest");
const response = require("supertest");

const app = require("./app");

describe("TodosAaPI", () => {
	it("GET /todos and returns an array of todos", () => {
		return request(app)
			.get("/todos")
			.expect("Content-Type", /json/)
			.expect(200)
			.then((response) => {
				expect(response.body).toEqual(
					expect.arrayContaining([
						expect.objectContaining({
							name: expect.any(String),
							completed: expect.any(Boolean),
						}),
					])
				);
			});
	});
});
