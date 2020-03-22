const imageRegex = new RegExp('(?<=img src=")(.*)(?=" alt)', "s");

const checkArrayAndReturnFirst = arr => {
  return Array.isArray(arr) && arr.length > 0 ? arr[0] : "";
};
const checkRegexAndReturnFirst = str => {
  return imageRegex.test(str) && imageRegex.exec(str).length > 0
    ? imageRegex.exec(str)[0]
    : "";
};

module.exports = {
  async raffleAnItemAndNormalize(items) {
    return await new Promise((resolve, reject) => {
      const number = Math.floor(Math.random() * items.length + 1);
      const item = items[number];

      //get image
      const img = checkRegexAndReturnFirst(
        checkArrayAndReturnFirst(item.description)
      );

      if (img === "") reject("something went wrong, try again...");

      const title = checkArrayAndReturnFirst(item.title);
      const link = checkArrayAndReturnFirst(item.link);
      const pubDate = checkArrayAndReturnFirst(item.pubDate);
      const copyright = "https://www.monkeyuser.com/";
      resolve({
        data: {
          img,
          title,
          link,
          pubDate,
          copyright
        },
        success: true
      });
    });
  }
};
