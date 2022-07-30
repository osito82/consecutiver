const osolog = require("osolog");
const { consecutiver } = require("./consecutiver");
const log = new osolog();

var masterString =
  "abcd";

for (i = 0; i < 8; i++) {
  const str = consecutiver(i, masterString);
  log.R(str);
}
