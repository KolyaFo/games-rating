const config = require("./config")
const makeRatingFile = require("./rating-file")
const WEIGHT = require("./config")
const {createRating,updateRating}= require("./calculations")
const PATH_TO_RATING_FILE = require("./config")

module.exports = {
    createRating,
    updateRating,
    WEIGHT,
    config,
    makeRatingFile,
    PATH_TO_RATING_FILE
}