import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppleAppStore = defineStore('apple-app', () => {
  const scrollPosition = useScrollPosition()

  return {
    ...scrollPosition,
  }
})

export function useScrollPosition() {
  const positions = ref<Record<string, number>>({})

  function setScrollPosition(id: string, position: number) {
    positions.value[id] = position
  }

  function getScrollPosition(id: string): number {
    return positions.value[id] || 0
  }

  return { positions, setScrollPosition, getScrollPosition }
}

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppleAppStore, import.meta.hot))
