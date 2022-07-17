import { track, trigger} from '../effect';

export default function reactive(target: object) {
    return new Proxy(target, {
        get(target, key, reciever) {
            // 依赖收集
            track(target, key)
            return Reflect.get(target, key, reciever)
        },
        set(target, key, val) {
            const res = Reflect.set(target, key, val)
            trigger(target, key)
            return res
        }
    })
}
