type Feature = {
  icon: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: "🚀",
    title: "创新技术",
    description: "采用现代 Web 技术栈，构建高性能、可扩展的应用。",
  },
  {
    icon: "🌍",
    title: "全球连接",
    description: "让创意突破地域限制，连接世界各地的用户。",
  },
  {
    icon: "⚡",
    title: "极致性能",
    description: "静态生成与现代构建工具，带来流畅的访问体验。",
  },
  {
    icon: "🔒",
    title: "安全可靠",
    description: "稳定、可靠、安全，为每一次访问保驾护航。",
  },
];

export default function Features() {
  return (
    <section className="relative bg-slate-950 py-28">
      {/* 背景光晕 */}
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            WHY CHOOSE US
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            探索无限可能
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            我们致力于打造现代化、高性能且富有设计感的 Web
            应用，为每一位用户提供卓越的体验。
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-indigo-400/50
                hover:bg-white/10
                hover:shadow-2xl
                hover:shadow-indigo-500/20
              "
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-3xl">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}