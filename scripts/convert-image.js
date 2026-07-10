const sharp = require("sharp");

sharp(
  "./public/images/hero.jpg"
)
  .webp({
    quality: 85,
  })
  .toFile("./public/images/hero.webp")
  .then(() => {
    console.log("转换完成: hero.webp");
  });