import cheerio from 'cheerio';
import fs from 'fs';
import request from 'request';

const EMBASSY = 'http://www.germania.diplo.de';
const VISA_PAGE = `${EMBASSY}/Vertretung/russland/ru/02-mosk/1-visa/3-merkblaetter/nationale-visa/0-nationale-visa.html`;

function getPdfLink() {
  return new Promise((resolve, reject) => {
    request(VISA_PAGE, (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return reject(error);
      }

      const $ = cheerio.load(body);
      const downloadPdfLink = $('a.download')
        .map((idx, link) => $(link).attr('href'))
        .filter((idx, href) => href.includes('1entschiedenevisumantraege'))
        .get(0);

      resolve(`${EMBASSY}${downloadPdfLink}`);
    });
  });
}

function getPdfFile(linkToFile) {
  return new Promise((resolve, reject) => {
    request
      .get(linkToFile)
      .on('error', (error) => reject(error))
      .pipe(fs.createWriteStream('test.pdf'))
      .on('finish', () => resolve('test.pdf'));
  });
}

export default { getPdfLink, getPdfFile }
