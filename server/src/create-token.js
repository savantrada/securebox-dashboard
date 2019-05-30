/**
 * @file Create token for secure connection and initialisation
 * @author Archit <archit5793@gmail.com>
 */

import fs from "fs";
import crypto from "crypto";
import path from "path";

/**
 * @description Generate random token and convert it to base64 string
 * @param {string} stringBase
 * @param {number} byteLength
 * @returns {Object} Promise Object
 */
function generateToken(stringBase = "base64", byteLength = 48) {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(byteLength, (err, buffer) => {
      if (err) {
        reject(err);
      } else {
        resolve(buffer.toString(stringBase));
      }
    });
  });
}

/**
 * @description Function to write userLogin and header tokens to a file
 */
async function execute() {
  const userLoginToken = await generateToken();
  const headerToken = await generateToken();
  fs.writeFile(
    path.join(__dirname, "tokens.yml"),
    `userLoginToken: ${userLoginToken}\nheaderToken: ${headerToken}`,
    (err) => {
      if (err) {
        throw err;
      }
    },
  );
}

execute();
