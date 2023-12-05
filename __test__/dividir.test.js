const div=require('../src/division')

describe("Prueba de division",()=>{
    test('4 / 2 is 2',()=>{
        expect(div(4,2)).toBe(2)
    })
})
