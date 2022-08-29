import { modificationsData } from "../src/Data.js";
import mv from "mv";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

modificationsData.CC7150CE00.trim.forEach((schema) => {
  const code = schema.img;
  const currentPath = path.join(
    __dirname,
    "images/selectedPhotos",
    `${code}.jpg`
  );
  const destinationPath = path.join(
    __dirname,
    "images/selectedPhotos/schemas",
    `${code}.jpg`
  );
  mv(currentPath, destinationPath, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully moved the file:" + code);
    }
  });
});
