import path from 'path';
import fileContains from './lib/file-contains';
import { getPdfLink, getPdfFile } from './lib/get-pdf';

function checkVisa(barcode) {
  return getPdfLink()
    .then(getPdfFile)
    .then((result) => fileContains(path.join('.', result), barcode));
}

export default checkVisa;
