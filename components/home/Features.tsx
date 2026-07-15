const features = [
  {
    title: "现代化架构",
    description:
      "采用最新 Web 技术体系，构建稳定、高性能、可扩展的应用基础。",
    tags: ["Next.js", "React", "TypeScript"],
    icon: "🚀",
  },

  {
    title: "智能连接",
    description:
      "通过先进技术连接人与世界，探索人工智能带来的无限可能。",
    icon: "🌎",
  },

  {
    title: "持续进化",
    description:
      "不断优化体验，让产品随着时代变化持续成长。",
    icon: "✨",
  },
];


export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-slate-950 py-32"
    >

      {/* Background Glow */}

      <div className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />


      <div className="relative mx-auto max-w-[1440px] px-6">


        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">


          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/70 backdrop-blur-xl">

            ✨ Features

          </div>


          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">

            探索无限可能的

            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">

              技术世界

            </span>

          </h2>


          <p className="mt-8 text-lg leading-8 text-white/60">

            通过现代技术体系，
            构建更加智能、高效、开放的未来体验。

          </p>


        </div>



        {/* Feature Grid */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">


          {/* Main Card */}

          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl lg:col-span-2">


            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl transition group-hover:bg-indigo-500/30" />


            <div className="relative">


              <div className="text-5xl">

                {features[0].icon}

              </div>


              <h3 className="mt-8 text-3xl font-bold text-white">

                {features[0].title}

              </h3>


              <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">

                {features[0].description}

              </p>



              <div className="mt-8 flex flex-wrap gap-3">

                {features[0].tags?.map((tag) => (

                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
                  >

                    {tag}

                  </span>

                ))}

              </div>


            </div>


          </div>




          {/* Small Cards */}

          {features.slice(1).map((item) => (

            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2"
            >


              <div className="text-4xl">

                {item.icon}

              </div>


              <h3 className="mt-6 text-2xl font-bold text-white">

                {item.title}

              </h3>


              <p className="mt-4 leading-7 text-white/60">

                {item.description}

              </p>


            </div>

          ))}


        </div>


      </div>


    </section>
  );
}