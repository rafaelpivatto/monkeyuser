const axios = require("axios");
const xml2js = require("xml2js");
const parser = new xml2js.Parser();

module.exports = {
  async getCollection() {
    return await new Promise((resolve, reject) => {
      axios
        .get("https://www.monkeyuser.com/feed.xml")
        .then(response => {
          parser
            .parseStringPromise(response.data)
            .then(function(result) {
              console.log("Done");
              resolve(result.rss.channel[0].item);
            })
            .catch(function(err) {
              reject(err);
            });
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  }
};
