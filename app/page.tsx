import Image from 'next/image';
import emojis from 'emojibase-data/zh/data.json'

function getEmoji(name: string) {
  const lowerName = name.toLowerCase()
  return `https://cdn.bootcdn.net/ajax/libs/twemoji/16.0.1/svg/${lowerName}.svg`
}

export default function Home() {
  return (
    <div className="min-h-screen container-wrapper">
      <main className="">
        <div className="grid grid-cols-20 gap-2">
          {emojis.map((emoji) => (
            <div
              key={emoji.emoji}
              className="flex justify-center items-center p-4 rounded-2xl bg-[#F4F5F5] text-center cursor-pointer text-3xl hover:scale-110 box-border outline-2 outline-solid outline-transparent hover:outline-[#ffcc4d]"
            >
              <Image src={getEmoji(emoji.hexcode)} width={24} height={24} alt={emoji.emoji} loading="lazy" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
