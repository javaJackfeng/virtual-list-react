import { useCreation, useUpdate } from './index'
import { useState, useRef } from "react"

const observer = <T extends Record<string, any>>(initialState: T, callback: () => void): T => {
    const proxy = new Proxy<T>(initialState, {
        get(target, key, receiver) {
            const res = Reflect.get(target, key, receiver)
            return typeof res === "object" ? observer(res, callback) : Reflect.get(target, key)
        },
        set(target, key, val) {
            const ret = Reflect.set(target, key, val);
            callback()
            return ret
        }
    })
    return proxy
}


export const useReactive = <T extends Record<string, any>>(initialState: T): T => {
    const ref = useRef<T>(initialState)
    const update = useUpdate()
    const state = useCreation(() => {
        return observer(ref.current, () => {
            update()
        })
    }, [])
    return state
}