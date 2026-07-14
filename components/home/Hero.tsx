import { BASE_PATH } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* 背景图片 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${BASE_PATH}/images/hero.webp')`,
        }}
      />

      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950" />

      {/* 光效 */}
      <div className="absolute -left-24 top-16 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="absolute right-0 top-32 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/15 blur-3xl" />

      {/* 内容 */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md">
              ✨ Welcome To The Future
            </div>

            {/* 标题 */}
            <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
              欢迎来到
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                这个世界
              </span>
            </h1>

            {/* 描述 */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              探索无限可能，
              <br />
              用现代科技连接世界，
              <br />
              创造属于你的未来。
            </p>

            {/* 按钮 */}
            <div className="mt-12 flex flex-wrap gap-5">
              <button className="group rounded-full bg-indigo-600 px-8 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-500/40">
                <span className="flex items-center gap-2">
                  开始探索
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>

              <button className="rounded-full border border-white/30 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur transition-all duration-300 hover:bg-white/10">
                了解更多
              </button>
            </div>

            {/* 信任信息 */}
            <div className="mt-16">
              <p className="mb-5 text-sm uppercase tracking-[0.35em] text-white/50">
                TRUSTED BY CREATORS
              </p>

              <div className="flex flex-wrap items-center gap-8 text-lg font-semibold text-white/70">
                <span>OpenAI</span>
                <span>Next.js</span>
                <span>React</span>
                <span>TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white/60">
        <div className="animate-bounce text-2xl">⌄</div>
        <p className="mt-2 text-xs uppercase tracking-[0.3em]">
          Scroll
        </p>
      </div>
    </section>
  );
}