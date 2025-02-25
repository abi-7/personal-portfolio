import CardDefault from './Card';

export default function AboutSection() {
  return (
    <section style={{ backgroundColor: '#fdcce0' }}>
      <div className="bg-opacity-50 pt-10 rounded-lg text-left ml-[150px]">
        <h2 className="text-5xl font-bold text-gray-800">&lt;About Me /&gt;</h2>
      </div>
      <div className="flex flex-row">
        <p className="mt-[40px] text-2xl text-gray-600 text-left ml-[150px]">
          I’m a recent graduate from Red River College Polytech with a diploma
          in Business Information Technology, specializing in front-end web
          development. My expertise lies in building user-friendly, accessible,
          and high-performance web applications using React.js, Next.js, and
          modern UI/UX principles.
        </p>
        <CardDefault />
      </div>
    </section>
  );
}
