import type { Emoji } from 'emojibase'
import { create } from 'zustand'

interface ConfigState {
  selectEmoji?: Emoji | null
  skinTone: string
}

interface ConfigAction {
  setSelectEmoji: (emoji: Emoji) => void
  setSkinTone: (skinTone: string) => void
}

type ConfigStore = ConfigState & ConfigAction

const useConfigStore = create<ConfigStore>(set => ({
  selectEmoji: null,
  skinTone: '',
  setSelectEmoji: emoji => set({ selectEmoji: emoji }),
  setSkinTone: skinTone => set({ skinTone }),
}))

export default useConfigStore
