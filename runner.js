const fs = require('fs');
const path = require('path');
const assert = require('assert');

const [ file ] = process.argv.slice(-1);
const problem = file.split('-')[0];
const solution = require(path.resolve(file));

console.info('Running Test for', problem);

const solutions = {
  '01' () {
    try {
      const test = solution(83, [25, 10, 5, 1]);
      const isEqual = assert.deepEqual(test, [3, 0, 1, 3]);

      return '✓ Success!';
    } catch (e) {
      return '✗ Nope! Try again.';
    }
  }
}

console.info(solutions[problem]())
