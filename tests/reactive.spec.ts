import reactive from '../src/reactive'
describe('reactive', () => {
    it('define reactive', () => {
        const data = {foo: 1}
        const proxyData = reactive(data)
        expect(proxyData).not.toBe(data)
        expect(proxyData.foo).toBe(data.foo)
    })
})