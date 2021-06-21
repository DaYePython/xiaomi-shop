export interface IUseLocalStorage<T> {
    getItem: () => T
    setItem: (value: T) => void
    clear: () => void
}

export function useLocalStorage<T>(moduleName: string): IUseLocalStorage<T> {
    function getItem(): T {
        return JSON.parse(window.localStorage.getItem(moduleName) || '{}')
    }
    function setItem(value: T): void {
        window.localStorage.setItem(moduleName, JSON.stringify(value))
    }
    function clear() {
        window.localStorage.setItem(moduleName, JSON.stringify('{}'))
    }
    return {
        getItem,
        setItem,
        clear
    }
}