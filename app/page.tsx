export default function Home() {
  return (
    <div className="min-h-screen container-wrapper">
      <main className="">
        <div className="grid grid-cols-20 gap-2">
          {Array.from({ length: 20 }).map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-4 rounded-2xl bg-[#f6f4ee] text-center cursor-pointer text-2xl hover:scale-105 transition-all duration-300  outline-2 outline-transparent hover:outline-[#ffcc4d]"
            >
              🥳
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
