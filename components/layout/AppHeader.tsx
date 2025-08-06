import AppIcon from '@/components/base/AppIcon'

export default function AppHeader() {
  return (
    <header className="border-b-border sticky top-0 z-30 border-b border-dashed">
      <div className="container-wrapper flex justify-between items-center gap-2 text-base font-semibold">
        <div className="flex-1 flex gap-2 items-center">
          <AppIcon name="svg-partying-face" />
          {/* <div>🥳</div> */}
          <p>Twemoji Store</p>
        </div>
        <div>
          <p>
            Emojis by Twitter's
            {' '}
            <a
              className="text-[#ffcc4d] hover:border-solid hover:border-b-2 border-[#ffcc4d]"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/twitter/twemoji"
            >
              Twemoji
            </a>
          </p>
        </div>
      </div>
    </header>
  )
}
