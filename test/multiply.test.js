const multiply = require('../src/multiply')

it('should return correct multiply', () =>{
    const result = multiply(2, 5)
    expect(result).toBe(10)  
})