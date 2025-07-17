import { Eye, Flame, Heart, Target } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-orange-400">Phoenix</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Born from the ashes of ordinary development, Phoenix represents
            rebirth, innovation, and reliability in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story */}
          <div>
            <div className="flex items-center mb-6">
              <Flame className="w-8 h-8 text-orange-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">Our Story</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Like the mythical phoenix that rises from ashes, our company was
              founded on the principle of transformation and renewal. We believe
              every business deserves a digital presence that doesn't just
              exist, but truly soars.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With over 1 year of experience in web development, we've helped
              countless businesses transform their digital presence from
              ordinary to extraordinary. Our team combines technical expertise
              with creative vision to deliver solutions that drive real results.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-orange-400/50 transition-colors duration-300">
              <Target className="w-10 h-10 text-orange-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-3">Mission</h4>
              <p className="text-gray-400">
                To empower businesses with cutting-edge web solutions that drive
                growth and create lasting digital impact.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-orange-400/50 transition-colors duration-300">
              <Eye className="w-10 h-10 text-orange-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-3">Vision</h4>
              <p className="text-gray-400">
                To be the leading web development partner that transforms
                ordinary ideas into extraordinary digital experiences.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-orange-400/50 transition-colors duration-300">
              <Heart className="w-10 h-10 text-orange-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-3">Values</h4>
              <p className="text-gray-400">
                Innovation, reliability, transparency, and client success drive
                everything we do. Your success is our success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
