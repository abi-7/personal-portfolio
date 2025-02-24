

export default function Navbar() {
  return (
    <nav className="shadow-md p-4 flex justify-between">
      <h1 className="text-xl font-bold">Abigail Ferreira</h1>
      <ul className="flex space-x-4">
      <li>
          <a href="#hero" className="text-white hover:text-blue-500">Home</a>
        </li>
        <li>
          <a href="#about" className="text-white hover:text-blue-500">About</a>
        </li>
        <li>
          <a href="#projects" className="text-white hover:text-blue-500">Projects</a>
        </li>
        <li>
          <a href="#experience" className="text-white hover:text-blue-500">Experience</a>
        </li>
      </ul>
    </nav>
  );
}
