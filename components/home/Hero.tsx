export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-20 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      {/* 背景光效 */}
      <div className="absolute inset-0">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      {/* 内容 */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            👋 Welcome
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
            欢迎来到
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
              这个世界
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            一个现代化、简洁且充满未来感的 Web
            项目。让我们一起探索、学习、创造，并构建属于自己的精彩世界。
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-indigo-600 px-8 py-4 font-semibold text-white transition hover:bg-indigo-500">
              开始探索
            </button>

            <button className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
              了解更多
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}