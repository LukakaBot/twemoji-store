'use client'

import type { Emoji } from 'emojibase'
import type { AppSelectModalRef } from '@/components/base/AppSelectModal'
import emojis from 'emojibase-data/zh/data.json'
import Image from 'next/image'
import { useRef } from 'react'
import AppSelectModal from '@/components/base/AppSelectModal'
import { useConfigStore } from '@/store'

import { getEmojiUrl } from '@/utils/tool'

export default function Home() {
  const { setSelectEmoji } = useConfigStore()
  const selectModalRef = useRef<AppSelectModalRef>(null)

  const handleSelectEmoji = (emoji: Emoji) => {
    setSelectEmoji(emoji)
    selectModalRef.current?.openModal()
  }

  return (
    <div className="min-h-screen container-wrapper">
      <main>
        <div className="grid grid-cols-20 gap-3">
          {emojis.map(emoji => (
            <div
              className="flex justify-center items-center p-4 rounded-[30%] bg-[var(--layout)] text-center cursor-pointer text-3xl hover:scale-110 box-border transition-all duration-300 ease-in-out outline-2 outline-solid outline-transparent hover:outline-[#ffcc4d]"
              key={emoji.emoji}
              onClick={() => handleSelectEmoji(emoji)}
            >
              <Image src={getEmojiUrl(emoji)} width={32} height={32} alt={emoji.emoji} loading="lazy" />
            </div>
          ))}
        </div>
        <AppSelectModal ref={selectModalRef} />
      </main>
    </div>
  )
}
