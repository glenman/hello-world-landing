const stats = [
  {
    value: "10K+",
    label: "Active Users",
    description: "Developers and creators using our platform worldwide.",
  },
  {
    value: "99.99%",
    label: "System Uptime",
    description: "Reliable cloud infrastructure with enterprise-grade stability.",
  },
  {
    value: "50+",
    label: "Open Projects",
    description: "Continuously evolving products and community contributions.",
  },
  {
    value: "24/7",
    label: "Global Support",
    description: "Always available to help developers build amazing experiences.",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">

      {/* Background Glow */}
      <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/70 backdrop-blur-xl">
            📊 Statistics
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            数据驱动
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              卓越体验
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/60">
            我们相信，每一个数字的背后，都代表着持续创新、
            用户信任以及稳定可靠的产品体验。
          </p>

        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.label}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400/30 hover:bg-white/10"
            >

              <div className="text-5xl font-black tracking-tight text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300 bg-clip-text">

                {item.value}

              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">

                {item.label}

              </h3>

              <p className="mt-4 leading-7 text-white/60">

                {item.description}

              </p>

            </div>
          ))}

        </div>

        {/* Bottom Divider */}
        <div className="mt-24 flex justify-center">

          <div className="h-px w-48 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        </div>

      </div>

    </section>
  );
}