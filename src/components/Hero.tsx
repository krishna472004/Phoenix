import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-orange-300 rounded-full animate-bounce"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Logo/Brand */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            <img
              src="Preview.png"
              alt="Logo"
              className="w-20 h-20 rounded-full object-cover border-2 border-orange-500 shadow-lg"
            />
            <div className="absolute inset-0 w-16 h-16 bg-orange-400/20 rounded-full blur-xl"></div>
          </div>
          <h1 className="ml-4 text-4xl font-bold text-white">Phoenix</h1>
        </div>

        {/* Main headline */}
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Rise Beyond{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-600 animate-pulse">
            Ordinary
          </span>
          <br />
          Build with Phoenix.
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          We craft high-performance websites that help your brand soar to new
          heights with cutting-edge technology and innovative design.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 flex items-center">
            View Our Projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/25 hover:scale-105">
            Get a Free Quote
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">1+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">5+</div>
            <div className="text-gray-400">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">99%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
