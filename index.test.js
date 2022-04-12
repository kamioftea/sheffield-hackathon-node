import {getAdjacentCells} from './index.js'

// Both describe and test take a string label, so that you can identify what is passing/failing, and a function to run
// the group or test respectively.
describe("getAdjacentCells", () => {
   const EXAMPLE_PICTURE = [
      'a', 'b', 'c',
      'a', 'a', 'c',
      'a', 'a', 'a',
   ]

   test("Can find adjacent cells", () => {
      const result = getAdjacentCells(1, 1, EXAMPLE_PICTURE);
      
      expect(result.length).toBe(4)
      expect(result.toContain([0, 1]))
      expect(result.toContain([1, 0]))
      expect(result.toContain([2, 1]))
      expect(result.toContain([1, 2]))
   })
   
   test("Can find adjacent cells on the edge of the picture", () => {
      const result = getAdjacentCells(0, 0, EXAMPLE_PICTURE);
      
      // TODO: add more expect calls here to verify the result
   })
})