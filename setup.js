import express from "express";

let server = undefined;

const app = express();

app.all("/test", async (req, res) => {
  console.log("[setup.js HTTP request handler] Received request to", req.method, req.path);
  res
    .status(202)
    .set({ "Content-Type": "application/json" })
    .send(JSON.stringify({ message: "TESTING" }));
});

export async function setup() {
  console.log("[setup.js] Setting up");
  server = app.listen(3007);
}

export async function teardown() {
  console.log("[setup.js] Tearing down");
  server?.close();
}
