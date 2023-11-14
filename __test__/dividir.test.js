const div=require('../src/division')

describe("Prueba de division",()=>{
    test('6 / 0 is error',()=>{
        expect(div(6,0)).toBe(0)
    })
})