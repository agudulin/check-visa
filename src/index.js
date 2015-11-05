import path from 'path';
import fileContains from './lib/file-contains';
import { getPdfLink, getPdfFile } from './lib/get-pdf';

export default function checkVisa(barcode) {
  let pdfLink = null;
  return getPdfLink()
    .then((link) => {
      pdfLink = link;
      return getPdfFile(link);
    })
    .then((pathToPdf) =>
      fileContains(path.join('.', pathToPdf), barcode)
    )
    .then((result) => ({
      pdfLink: pdfLink,
      result: result
    }))
}

