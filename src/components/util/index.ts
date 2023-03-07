export const throttle = <T extends Function>(fn: T, delay: number) => {
    let timer: any = null
    return (...args: any) => {
        if (!timer) {
            timer = setTimeout(() => {
                fn(args)
                timer = null
            }, delay)
        }
    }
}