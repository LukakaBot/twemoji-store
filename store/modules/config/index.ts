import { create } from 'zustand'

interface ConfigState {
  skinTone: string
}

interface ConfigAction {
  setSkinTone: (skinTone: string) => void
}

type ConfigStore = ConfigState & ConfigAction

const useConfigStore = create<ConfigStore>(set => ({
  skinTone: '',
  setSkinTone: skinTone => set({ skinTone }),
}))

export default useConfigStore
