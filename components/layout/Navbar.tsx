export default function Navbar() {
  const menus = [
    "首页",
    "关于我们",
    "探索",
    "联系我们",
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          Hello<span className="text-indigo-400">World</span>
        </div>

        {/* 菜单 */}
        <nav className="hidden gap-10 md:flex">
          {menus.map((item) => (
            <a
              key={item}
              href="#"
              className="text-white/80 transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* 按钮 */}
        <button className="rounded-full bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500">
          开始探索
        </button>
      </div>
    </header>
  );
}