import { DefaultTimeline } from './Timeline';

export default function ExperienceSection() {
  return (
    <section style={{ backgroundColor: '#fdcce0' }}>
      <div className="bg-opacity-50 pt-10 rounded-lg text-left px-4 sm:px-10 lg:px-[150px]">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          &lt;Experience /&gt;
        </h2>
      </div>
      <div className="pt-10 pb-10 text-left px-4 sm:px-10 lg:px-[150px]">
        <DefaultTimeline />
      </div>
    </section>
  );
}
