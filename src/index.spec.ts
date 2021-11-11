import { sum } from '.'

describe('sum', () =>  {
    test('should sum', () => {
        const result = sum(1, 2)
        expect(result).toBe(3)
    })
})
