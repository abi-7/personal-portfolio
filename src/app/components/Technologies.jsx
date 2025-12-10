'use client';

export default function TechnologiesSection() {
  const technologies = [
    { name: 'React.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'Electron.js', category: 'Framework' },
    { name: 'Dynatrace', category: 'Observability Tool' },
    { name: 'Git & GitHub', category: 'Version Control' },
    { name: 'Figma', category: 'Design' },
    { name: 'Canva', category: 'Design' },
  ];
  return (
    <section style={{ backgroundColor: '#a2b2fc' }}>
      <div className="bg-opacity-50 pt-10 rounded-lg text-left px-4 sm:px-10 lg:px-[150px]">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          &lt;Technologies /&gt;
        </h2>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-10">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-90 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                {tech.name}
              </h3>
              <p className="text-sm text-gray-600">{tech.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
