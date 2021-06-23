import { onMounted, onUnmounted } from "vue"

export default useEventListener

type withEventListener = Element | Document | Window

function useEventListener(
    e: withEventListener = document,
    type: string,
    listener: EventListenerOrEventListenerObject,
    option: boolean | EventListenerOptions = false
): void {
    onMounted(() => {
        e.addEventListener(type, listener, option)

    })
    onUnmounted(() => {
        e.removeEventListener(type, listener, option)
    })
}