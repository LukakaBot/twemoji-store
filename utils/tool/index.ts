import type { ImageLoaderProps } from 'next/image'

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