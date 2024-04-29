async function getData(url) {
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      console.warn(error);
    }
  }



function getRandomGame(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

module.exports = {getData, getRandomGame}