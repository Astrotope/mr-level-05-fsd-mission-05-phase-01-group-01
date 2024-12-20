const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../server.cjs"); // Import the app from server.js
const AuctionItem = require("../Models/auctionItem.cjs"); // Adjust path if needed

// Set a different port for testing to avoid port conflicts
process.env.PORT = 3001;

beforeAll(async () => {
  // Ensure there's no active connection before connecting to the test database
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect("mongodb://localhost/auctionDB_test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
});

afterAll(async () => {
  // Close the connection after tests are finished
  await mongoose.connection.close();
});

// Clear the database before each test
beforeEach(async () => {
  await AuctionItem.deleteMany({});
});

// Start the server manually before the tests
let server;
beforeAll((done) => {
  server = app.listen(process.env.PORT, done); // Listen on the test port
});

afterAll((done) => {
  server.close(done); // Close the server after tests are finished
});

describe("POST /search", () => {
  it("should return an empty array if no items match the search query", async () => {
    const response = await request(app)
      .post("/search")
      .send({ query: "Nonexistent" }); // No matching items
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]); // No results should be returned
  });

  it("should handle errors gracefully", async () => {
    const response = await request(app).post("/search").send({}); // Missing query parameter
    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Query is required");
  });

  it("should return results when matching items exist", async () => {
    // Create a test auction item
    const testItem = new AuctionItem({
      title: "Vintage Painting",
      description: "A beautiful vintage painting",
      price: 100,
    });
    await testItem.save();

    const response = await request(app)
      .post("/search")
      .send({ query: "Painting" }); // Matching item
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0].title).toBe("Vintage Painting");
  });
});
