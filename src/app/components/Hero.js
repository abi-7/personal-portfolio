import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundColor: "#fdcce0" }} 
    >
      <div className="bg-opacity-50 p-10 rounded-lg text-white text-center">
        <h2 className="text-4xl text-black font-bold">Welcome to My Portfolio</h2>
        <p className="text-lg text-black-300 mt-2">Frontend Developer & Designer</p>
      </div>
    </section>
  );
}
