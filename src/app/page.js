import Image from "next/image";
import HeroSection from "./components/Hero.js";
import Navbar from "./components/Navbar.js";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
    </main>
  );
}
