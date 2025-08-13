export default function AppFooter() {
  return (
    <footer className="border-t-border border-t border-dashed bg-[var(--layout)]">
      <div className="container-wrapper">
        <div className="text-sm text-[#888b92] dark:text-[#75777a] opacity-75">
          <span>built by </span>
          <a
            className="text-mustard-500 hover:border-solid hover:border-b-2 border-mustard-500"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/"
          >
            lucas
          </a>
          <span>, powered by </span>
          <a
            className="text-mustard-500 hover:border-solid hover:border-b-2 border-mustard-500"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/twitter/twemoji"
          >
            Twemoji
          </a>
        </div>
      </div>
    </footer>
  )
}
