import { Code, Smartphone, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Web Development",
      description:
        "Tailored websites built with modern technologies for optimal performance and user experience.",
      features: ["React", "Tailwind CSS"],
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Mobile-first designs that work flawlessly across all devices and screen sizes.",
      features: [
        "Mobile Optimization",
        "Cross-Browser Testing",
        "Touch-Friendly UI",
        "Fast Loading",
      ],
    },

    {
      icon: Zap,
      title: "Projects for College Students",
      description:
        "All projects related to web development for college students, including assignments, mini-projects, and final year projects.",
      features: [
        "React Projects",
        "Mini Projects",
        "Final Year Projects",

        "College Projects",
        "Academic Projects",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-orange-400">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive web development solutions to elevate your digital
            presence and drive business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-orange-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative mb-6">
                <service.icon className="w-12 h-12 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 w-12 h-12 bg-orange-400/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
