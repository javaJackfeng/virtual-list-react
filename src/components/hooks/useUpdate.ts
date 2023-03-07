import { useState, useCallback } from "react";

export const useUpdate = () => {
    const [_, setState] = useState({})
    return useCallback(() => {
        setState({})
    }, [])
}