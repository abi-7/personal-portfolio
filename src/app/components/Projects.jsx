'use client';
import { CardWithLink } from './CardGrid';

export default function ProjectsSection() {
  return (
    <section style={{ backgroundColor: '#a2b2fc' }}>
      <div className="bg-opacity-50 pt-10 rounded-lg text-left px-4 sm:px-10 lg:px-[150px]">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          &lt;My Projects /&gt;
        </h2>
      </div>
      <div className="mt-10 md:mt-0 flex-shrink-0 mx-4 md:mx-0 lg:ml-[150px] lg:mr-[150px] lg:pt-10">
        <CardWithLink />
      </div>
    </section>
  );
}
