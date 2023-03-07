import { useRef, useMemo } from 'react'
import type { DependencyList  } from 'react' 

const depsAreSame = (oldDeps: DependencyList, deps: DependencyList): boolean => {
    if (oldDeps === deps) {
        return true
    }
    const maxLength = deps.length > oldDeps.length ? deps.length : oldDeps.length
    for (let i=0; i<maxLength;i++) {
        if (!Object.is(deps[i], oldDeps[i])) {
            return false
        }
    }

    return true
}

export const useCreation = <T>(fn: () => T, deps: DependencyList) => {
    const { current } = useRef({
        deps,
        obj: undefined as (undefined | T),
        initialized: false
    })
    if(current.initialized === false || !depsAreSame(current.deps, deps)) {
        current.deps = deps;
        current.obj = fn();
        current.initialized = true;
    }

    return current.obj as T
}