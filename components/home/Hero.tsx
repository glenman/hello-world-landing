export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* 背景图片 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/hero.webp')",
        }}
      />

      {/* 遮罩 */}
      <div className="absolute inset-0 bg-slate-950/70" />


      {/* 光效 */}
      <div className="absolute left-20 top-40 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />

      <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />


      {/* 内容 */}
      <div className="relative z-10 flex min-h-screen items-center">

        <div className="mx-auto w-full max-w-7xl px-6">

          <div className="max-w-3xl">


            <div className="mb-8 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur">
              ✨ Welcome To The Future
            </div>


            <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">

              欢迎来到

              <br />

              <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                这个世界
              </span>

            </h1>


            <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">

              探索无限可能，
              用现代科技连接世界，
              创造属于你的未来。

            </p>


            <div className="mt-10 flex gap-5">


              <button className="rounded-full bg-indigo-600 px-8 py-4 text-white transition hover:scale-105 hover:bg-indigo-500">

                开始探索

              </button>


              <button className="rounded-full border border-white/30 px-8 py-4 text-white transition hover:bg-white/10">

                了解更多

              </button>


            </div>


          </div>

        </div>

      </div>

    </section>
  );
}