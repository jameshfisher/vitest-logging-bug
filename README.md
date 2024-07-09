# To reproduce:

```
npm i
npm run test  # several times
```

The output will sometimes look like this, as expected:

```
> vitest-logging-bug-repro@1.0.0 test
> vitest run -r .

The CJS build of Vite's Node API is deprecated. See https://vitejs.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.

 RUN  v1.6.0 /Users/jim/dev/granola-inc/vitest-logging-bug-repro

[setup.js] Setting up
stdout | mytest.test.js > foo > returns 200
[IN TEST] making request to /test

[setup.js HTTP request handler] Received request to GET /test
 ✓ mytest.test.js (1)
   ✓ foo (1)
     ✓ returns 200

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  10:35:40
   Duration  209ms (transform 8ms, setup 0ms, collect 3ms, tests 21ms, environment 0ms, prepare 31ms)

[setup.js] Tearing down
```

However, sometimes the output will look like this, with the "Received request" log line entirely missing from the output:

```
> vitest-logging-bug-repro@1.0.0 test
> vitest run -r .

The CJS build of Vite's Node API is deprecated. See https://vitejs.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.

 RUN  v1.6.0 /Users/jim/dev/granola-inc/vitest-logging-bug-repro

[setup.js] Setting up
stdout | mytest.test.js > foo > returns 200
[IN TEST] making request to /test

 ❯ mytest.test.js (1)
 ✓ mytest.test.js (1)
   ✓ foo (1)
     ✓ returns 200

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  10:35:41
   Duration  201ms (transform 10ms, setup 0ms, collect 4ms, tests 23ms, environment 0ms, prepare 35ms)

[setup.js] Tearing down
```
