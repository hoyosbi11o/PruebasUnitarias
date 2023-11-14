const resta=require('../src/resta')

describe("Prueba de la  resta de dos numero",()=>{
    test('5 - 5 is 0',()=>{
        expect(resta(5,5)).toBe(0)
    })
})