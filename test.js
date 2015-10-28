import fileContains from './src/lib/file-contains';
import path from 'path';
import assert from 'assert';

const pathToPdf = path.join(__dirname, 'sample.pdf');

describe('fileContains', function() {
  this.timeout(20 * 1000);

  it('should contain str', () => {
    return fileContains(pathToPdf, '3244063').then((result) => {
      assert.equal(result, true);
    });
  });

  it('should not contain str', () => {
    return fileContains(pathToPdf, '2244063').then((result) => {
      assert.equal(result, false);
    });
  });
});
