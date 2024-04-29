const fs = require("fs").promises;
const { getRandomGame } = require("../appModules/api");
const { config } = require("../appModules/rating");

async function gameRouteController(res) {
  const ratingFile = await fs.readFile(config.PATH_TO_RATING_FILE);
  const data = JSON.parse(ratingFile);
  const game = getRandomGame(data);
  console.log(game);
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(game));
}
module.exports = gameRouteController;