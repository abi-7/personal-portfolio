import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="shadow-md p-4 flex justify-between">
      <h1 className="text-xl font-bold">Abigail Ferreira</h1>
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/experience">Experience</Link></li>
      </ul>
    </nav>
  );
}
