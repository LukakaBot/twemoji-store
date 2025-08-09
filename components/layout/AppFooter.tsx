export default function AppFooter() {
  return (
    <footer className="border-t-border border-t border-dashed bg-[#F4F5F5]">
      <div className="container-wrapper">
        <span className="text-sm text-gray-500 opacity-75">
          built by{' '}
          <a
            className="text-[#ffcc4d] hover:border-solid hover:border-b-2 border-[#ffcc4d]"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/"
          >
            lucas
          </a>
          , powered by{' '}
          <a
            className="text-[#ffcc4d] hover:border-solid hover:border-b-2 border-[#ffcc4d]"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/twitter/twemoji"
          >
            Twemoji
          </a>
        </span>
      </div>
    </footer>
  )
}
