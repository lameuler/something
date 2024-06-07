import { writable } from 'svelte/store'

export const MEDIA_DARK = '(prefers-color-scheme: dark)'
export const STORAGE_KEY = 'appearance'

const darkStore = writable<boolean>()

export const dark = {
    set(appearance: boolean|null|undefined) {
        this.update(() => appearance)
    },
    update(updater: (old: boolean) => boolean|null|undefined) {
        darkStore.update(old => {
            let value = old
            const raw = updater(old)
            if (typeof raw === 'boolean') {
                value = raw
            }
            
            if (typeof window !== 'undefined') {
                if (value) document.documentElement.classList.add('dark')
                else document.documentElement.classList.remove('dark')
                localStorage.setItem(STORAGE_KEY, value+':'+matchMedia(MEDIA_DARK).matches)
            }
            return value
        })
    },
    subscribe: darkStore.subscribe
}

const fullscreenStore = writable<boolean>(undefined)

export const fullscreen = {
    set(value: boolean) {
        this.update(()=>value)
    },
    update(updater: (old: boolean) => boolean) {
        fullscreenStore.update(old => {
            const value = updater(old)
            let promise = undefined
            if(value === true) {
                promise = document.documentElement.requestFullscreen()
            } else if (value === false) {
                promise = document.exitFullscreen()
            }
            promise?.finally(() => fullscreenStore.set(document.fullscreenElement !== null))
            return old
        })
    },
    subscribe: fullscreenStore.subscribe
}

export function listener() {
    dark.set(document.documentElement.classList.contains('dark'))

    const mediaHandler = (event: MediaQueryListEvent) => {
        dark.set(event.matches)
    }
    matchMedia(MEDIA_DARK).addEventListener('change',mediaHandler)

    const storageHandler = (event: StorageEvent) => {
        if(event.key === STORAGE_KEY && event.newValue !== event.oldValue) {
            const choice = event.newValue?.split(':')
            if (choice && (choice[0] === 'true' || choice[0] === 'false')) {
                dark.set(choice[0] === 'true')
            } else {
                dark.set(undefined)
            }
        }
    }
    addEventListener('storage', storageHandler)

    const fullscreenHandler = () => {
        if (document.fullscreenEnabled) fullscreenStore.set(document.fullscreenElement !== null)
    }
    fullscreenHandler()
    addEventListener('fullscreenchange', fullscreenHandler)

    return () => {
        matchMedia(MEDIA_DARK).removeEventListener('change', mediaHandler)
        removeEventListener('fullscreenchange', fullscreenHandler)
    }
}

export const initScript = `<script>
const system = matchMedia('${MEDIA_DARK}').matches
const stored = (localStorage.getItem('${STORAGE_KEY}') || '').split(':')
let dark = false
if (stored[1] === system.toString() && (stored[0] === 'true' || stored[0] === 'false')) dark = stored[0] === 'true'
else dark = system
if (dark) document.documentElement.classList.add('dark')
else document.documentElement.classList.remove('dark')
</script>`