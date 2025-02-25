import CardDefault from "./Card";

export default function AboutSection() {
  return (
    <section style={{ backgroundColor: "#fdcce0" }}>
      <div className="bg-opacity-50 pt-10 rounded-lg text-left ml-[150px]">
        <h2 className="text-5xl font-bold text-gray-800">
        &lt;About Me /&gt;
        </h2>
      </div>
      <CardDefault />
    </section>
  );
}
