'use client'

import type { Emoji } from 'emojibase'
import emojis from 'emojibase-data/zh/data.json'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { getEmojiUrl } from '@/utils/tool'

const skinTones = [
  { ariaLabel: 'Toggle Default Skin Tone', value: 'default', bg: 'bg-[#ffcc22]' },
  { ariaLabel: 'Toggle Light Skin Tone', value: '1f3fb', bg: 'bg-[#fae0c0]' },
  { ariaLabel: 'Toggle Medium-Light Skin Tone', value: '1f3fc', bg: 'bg-[#e2c19d]' },
  { ariaLabel: 'Toggle Medium Skin Tone', value: '1f3fd', bg: 'bg-[#c5946c]' },
  { ariaLabel: 'Toggle Medium-Dark Skin Tone', value: '1f3fe', bg: 'bg-[#9f693f]' },
  { ariaLabel: 'Toggle Dark Skin Tone', value: '1f3ff', bg: 'bg-[#5c473d]' },
]

export default function Home() {
  const [open, setOpen] = useState(false)
  const [selectEmoji, setSelectEmoji] = useState<Emoji>()

  const handleSelectEmoji = (emoji: Emoji) => {
    setSelectEmoji(emoji)
    setOpen(true)
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
        {selectEmoji && (
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerContent>
              <DrawerHeader>
                <Image className="mb-4" src={getEmojiUrl(selectEmoji)} width={90} height={90} alt={selectEmoji?.emoji} loading="lazy" />
                <DrawerTitle className="text-left">{selectEmoji.label}</DrawerTitle>
                <DrawerDescription className="text-left">
                  [
                  {selectEmoji?.tags && selectEmoji.tags?.map(tag => `#${tag}`).join(' ')}
                  ]
                </DrawerDescription>
              </DrawerHeader>
              <div className="px-4">
                <div className="mt-4">
                  <p className="my-1 text-sm">Skin tone</p>
                  <div className="flex gap-2">
                    <ToggleGroup variant="outline" type="single">
                      {
                        skinTones.map(skinTone => (
                          <ToggleGroupItem value={skinTone.value} aria-label={skinTone.ariaLabel} key={skinTone.ariaLabel}>
                            <div className={`w-3 h-3 rounded-full ${skinTone.bg}`} />
                          </ToggleGroupItem>
                        ))
                      }
                    </ToggleGroup>
                  </div>
                </div>
                <DrawerFooter>
                  <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        )}
      </main>
    </div>
  )
}
