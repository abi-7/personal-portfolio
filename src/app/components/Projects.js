'use client'
import { CardWithLink } from "./CardGrid";

export default function ProjectsSection() {
    return (
      <section style={{ backgroundColor: "#fdcce0" }}>
          <div className="bg-opacity-50 pt-10 rounded-lg text-left ml-[150px]">
            <h2 className="text-5xl font-bold text-gray-800">
              &lt;My Projects /&gt;
            </h2>
          </div>
          <div className="pt-10 text-left ml-[150px] mr-[150px]">
           <CardWithLink />
          </div>
      </section>
    );
  }
  