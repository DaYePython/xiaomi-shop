import { onMounted, onUnmounted } from "vue"

export default useAddEvent

type withEventListener = Element | Document | Window

function useAddEvent(
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