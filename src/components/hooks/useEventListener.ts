import { useEffect } from "react"


export const useEventListener = (event: string, handler: (...e: any) => void, target: (HTMLElement | typeof window) = window) => {
    useEffect(() => {
        const elementTarget = target || window
        const handleEvent = (event: Event) => {
            handler(event)
        } 
        elementTarget.addEventListener(event, handleEvent)
        return () => {
            elementTarget.removeEventListener(event, handleEvent)
        }
    }, [event, target])
}