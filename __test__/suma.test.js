const suma=require('../src/suma')

describe("Prueba de la suma de dos numeros",()=>{
    test('2+2 es igual a 4',()=>{
        expect(suma(2,2)).toBe(4)
    })
})