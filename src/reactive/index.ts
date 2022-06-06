export default function reactive(target: object) {
    return new Proxy(target, {
        get(target, key, reciever){
            return Reflect.get(target, key, reciever)
        },
        set(target, key, val){
            return Reflect.set(target, key, val)
        }
    })
}
