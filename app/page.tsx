import Navbar from "@/components/layout/Navbar";
import { Hero, Features, Stats } from "@/components/home";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
      </main>
    </>
  );
}