import CardDefault from './Card';

export default function AboutSection() {
  return (
    <section style={{ backgroundColor: '#fdcce0' }}>
      <div className="bg-opacity-50 pt-10 rounded-lg text-left ml-4 md:ml-[150px]">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          &lt;About Me /&gt;
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-start">
        <div className="mt-10 md:mt-[40px] text-lg md:text-2xl text-gray-600 text-left ml-4 md:ml-[150px] pr-4 md:pr-20 flex-grow">
          <p>
            I’m a recent graduate from Red River College Polytechnic with a
            diploma in <b>Business Information Technology</b>, specializing in{' '}
            <b>front-end web development</b>. <br />
            My expertise lies in building user-friendly, accessible, and
            innovative web applications using modern UI/UX principles.
          </p>
          <br />
          <p>Technologies I&apos;ve worked with:</p>
          <ul className="list-[circle] ml-6 md:ml-10">
            <li>React.js</li>
            <li>Javascript</li>
            <li>Next.js</li>
            <li>Typescript</li>
            <li>Figma</li>
          </ul>
          <br />
          <p>
            Outside of work I enjoy expressing my creativity through many
            outlets such as pottery, writing, painting, and baking!
          </p>
        </div>
        <div className="mt-10 md:mt-0 flex-shrink-0 mx-4 md:mx-0">
          <CardDefault />
        </div>
      </div>
    </section>
  );
}
