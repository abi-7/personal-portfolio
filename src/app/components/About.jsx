import CardDefault from './Card';

export default function AboutSection() {
  return (
    <section style={{ backgroundColor: '#a2b2fc' }}>
      <div className="bg-opacity-50 pt-10 rounded-lg text-left ml-4 md:ml-[150px]">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          &lt;About Me /&gt;
        </h2>
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start mt-10">
          {/* Text Content with cute cards */}
          <div className="space-y-6">
            {/* Developer Card */}
            <div className="bg-white  backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <span className="text-3xl">💻</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    What I Do
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    I'm a <b>software developer</b> specializing in{' '}
                    <b>web development & observability</b>. I work primarily
                    with React and TypeScript to build applications. I also work
                    with system monitoring tools to perform real-time analysis
                    for observability solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Hobbies Card */}
            <div className="bg-white  backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎨</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Outside of Tech
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    I enjoy expressing my creativity outside of work through
                    pottery, writing, painting, and baking.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Creation Card */}
            <div className="bg-white backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📱</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Sharing my Experience
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Check out my{' '}
                    <a
                      href="https://www.instagram.com/devanddesigns/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-pink-600 hover:text-pink-700 underline decoration-2 transition-colors"
                    >
                      instagram
                    </a>{' '}
                    where I create educational tech content and share what I've
                    learnt with others !
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-0 mx-auto md:mx-4">
            <CardDefault />
          </div>
        </div>
      </div>
    </section>
  );
}
