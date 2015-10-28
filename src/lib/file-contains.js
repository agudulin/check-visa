import pdfText from 'pdf-text';

export default (pathToFile, str) => {
  return new Promise((resolve, reject) => {
    pdfText(pathToFile, (err, chunks) => {
      if (err) {
        console.log(err);
        return reject(err);
      }

      const matches = chunks.filter((chunk) => chunk.includes(str));
      return resolve(matches.length > 0);
    });
  });
}
