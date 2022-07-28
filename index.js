const osolog = require("osolog");
const { consecutiver } = require("./consecutiver");
const log = new osolog();

var masterString =
  "abcd1234";

for (i = 0; i < 1000; i++) {
  const str = consecutiver(i, masterString);
  log.R(str);
}
