"use client";

import { useState } from "react";

const menus = [
  { title: "首页", href: "#" },
  { title: "关于我们", href: "#about" },
  { title: "探索", href: "#features" },
  { title: "联系我们", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[1440px] px-6 pt-6">

        {/* Glass Navbar */}
        <div className="flex items-center justify-between rounded-3xl border border-white/5 bg-slate-950/35 px-8 py-5 shadow-2xl shadow-black/20 backdrop-blur-2xl transition-all duration-300">

          {/* Logo */}
          <a
            href="/"
            className="group flex items-center text-2xl font-black tracking-tight"
          >
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent transition duration-300 group-hover:brightness-125">
              Hello
            </span>

            <span className="ml-2 text-white transition duration-300 group-hover:text-slate-100">
              World
            </span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-10 lg:flex">
            {menus.map((menu) => (
              <a
                key={menu.title}
                href={menu.href}
                className="group relative text-sm font-medium text-white/75 transition duration-300 hover:text-white"
              >
                {menu.title}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button className="rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/40 active:scale-95">
              开始探索
            </button>
          </div>

          {/* Mobile Button */}
          <button
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mt-4 overflow-hidden rounded-3xl border border-white/5 bg-slate-950/60 shadow-2xl backdrop-blur-2xl lg:hidden">
            <nav className="flex flex-col p-4">
              {menus.map((menu) => (
                <a
                  key={menu.title}
                  href={menu.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-4 text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  {menu.title}
                </a>
              ))}

              <button className="mt-4 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-3 font-medium text-white transition hover:brightness-110">
                开始探索
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}