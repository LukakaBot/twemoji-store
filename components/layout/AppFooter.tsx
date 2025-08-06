export default function AppFooter() {
  return (
    <footer className="border-t-border border-t border-dashed bg-[#f6f4ee]">
      <div className="container-wrapper">
        <span className="text-sm text-gray-500 opacity-75">
          {new Date().getFullYear()}
          {' '}
          © Twemoji Store
        </span>
      </div>
    </footer>
  )
}
