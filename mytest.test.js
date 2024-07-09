import { describe, expect, test } from "vitest";

describe("foo", () => {
  test("returns 200", async () => {
    console.log("[IN TEST] making request to /test");
    const response = await fetch(`http://localhost:3007/test`);
    expect(response.status).toBe(202);
  });
});
