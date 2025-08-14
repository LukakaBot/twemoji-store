'use client'

import { useTheme } from 'next-themes'
import AppIcon from '@/components/base/AppIcon'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function AppHeader() {
  const { setTheme } = useTheme()

  return (
    <header className="border-b-border sticky top-0 z-30 border-b border-dashed bg-[var(--layout)]">
      <div className="container-wrapper flex justify-between items-center gap-2 text-base font-semibold">
        <div className="flex-1 flex gap-4 items-center">
          <AppIcon name="svg-partying-face" size={40} />
          {/* <div className="rotate-y-180 text-4xl">🥳</div> */}
          <p>Twemoji Store</p>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <span>Emojis by Twitter's </span>
            <a
              className="text-mustard-500 hover:border-solid hover:border-b-2 border-mustard-500"
              rel="noopener noreferrer"
              target="_blank"
              href="https://twemoji.twitter.com/"
            >
              Twemoji
            </a>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="cursor-pointer" variant="outline" size="icon">
                <AppIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" name="lucide:sun" />
                <AppIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" name="lucide:moon" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
