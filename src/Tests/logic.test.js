const { toggle } = require('../Logic/logic');

describe('Tests Toggle Show button', () => {
 test('if given false, returns true', () =>{
     expect(toggle(false)).toBe(true);
 })
});