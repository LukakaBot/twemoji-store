import type { Emoji } from 'emojibase'
import type { ImageLoaderProps } from 'next/image'

export function getEmojiUrl(emoji: Emoji, type: 'svg' | 'png' = 'svg', skinTone?: string) {
  const CDN_BASE_URL = 'https://cdn.bootcdn.net/ajax/libs/twemoji/16.0.1'
  let folder = 'svg'
  let code = emoji.hexcode.toLowerCase()

  if (skinTone && emoji?.skins) {
    const reg = new RegExp(skinTone, 'i')
    code = emoji.skins.filter(skin => skin.hexcode.search(reg) !== -1)[0].hexcode.toLowerCase()
  }

  if (type === 'png') {
    folder = '72x72'
  }

  if (code.startsWith('00')) {
    code = code.slice(2).replace(/-fe0f/g, '')
  }

  if (code === '1f441-fe0f-200d-1f5e8-fe0f') {
    code = code.replace(/-fe0f/g, '')
  }

  return `${CDN_BASE_URL}/${folder}/${code}.${type}`
}

export function imageLoader({ src }: ImageLoaderProps) {
  const CDN_BASE_URL = 'https://cdn.bootcdn.net/ajax/libs/twemoji/16.0.1/svg'
  let code = src.toLowerCase()

  if (code.startsWith('00')) {
    code = code.slice(2).replace(/-fe0f/g, '')
  }

  if (code === '1f441-fe0f-200d-1f5e8-fe0f') {
    code = code.replace(/-fe0f/g, '')
  }

  return `${CDN_BASE_URL}/${code}.svg`
}
