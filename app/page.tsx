'use client'

import Image from 'next/image';
import emojis from 'emojibase-data/zh/data.json'
import { getEmojiUrl } from '@/utils/tool'

export default function Home() {
  return (
    <div className="min-h-screen container-wrapper">
      <main>
        <div className="grid grid-cols-20 gap-2">
          {emojis.map((emoji) => (
            <div
              className="flex justify-center items-center p-4 rounded-[30%] bg-[var(--layout)] text-center cursor-pointer text-3xl hover:scale-110 box-border transition-all duration-300 ease-in-out outline-2 outline-solid outline-transparent hover:outline-[#ffcc4d]"
              key={emoji.emoji}
            >
              <Image src={getEmojiUrl(emoji)} width={32} height={32} alt={emoji.emoji} loading="lazy" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
