const { getCollection } = require("./service/fetchCollection");
const { raffleAnItemAndNormalize } = require("./service/util");

module.exports = {
  async getRandomComic() {
    return await new Promise((resolve, reject) => {
      getCollection()
        .then(response => {
          raffleAnItemAndNormalize(response)
            .then(item => {
              resolve(item);
            })
            .catch(err => {
              reject(err);
            });
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
