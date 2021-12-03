const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {


    test('randomly reorders elements of the array.', async () => {

      let arr = [1, 2, 3];
      shuffleArray(arr); 
      
});

const oddArray = [1, 3, 5, 7, 9, 11, 13];
test('should start correctly', () => {
  expect(oddArray).toEqual(expect.arrayContaining([1, 3, 5, 7, 9]));
});

test('unshuffled', () => {
  let unshuffled = ['hello', 'a', 't', 'q', 1, 2, 3, {cats: true}]

let shuffled = unshuffled
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
});

})