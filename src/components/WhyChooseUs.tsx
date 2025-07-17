import { Award, Clock, Code2, Headphones, Layers } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: "On-Time Delivery",
      description:
        "We respect deadlines and deliver projects on schedule, every time.",
      highlight: "100% on-time delivery rate",
    },
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Well-structured, documented code that's maintainable and scalable.",
      highlight: "Industry best practices",
    },
    {
      icon: Layers,
      title: "Scalable Design",
      description: "Future-proof solutions that grow with your business needs.",
      highlight: "Built for growth",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Round-the-clock technical support and maintenance services.",
      highlight: "Always here for you",
    },
    {
      icon: Award,
      title: "1+ Years Experience",
      description: "Proven track record with hundreds of successful projects.",
      highlight: "Experienced team",
    },
  ];

  const stats = [
    { number: "30+", label: "Projects Delivered" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "1+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-orange-400">Phoenix</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We combine technical expertise with a client-first approach to
            deliver exceptional results that exceed expectations.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-orange-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-orange-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative mb-6">
                <reason.icon className="w-12 h-12 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 w-12 h-12 bg-orange-400/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {reason.description}
              </p>

              <div className="inline-flex items-center bg-orange-400/10 text-orange-400 px-3 py-2 rounded-lg text-sm font-semibold">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                {reason.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-3xl p-8 md:p-12 border border-orange-400/20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join our satisfied clients and experience the Phoenix difference.
              Let's build something extraordinary together.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105">
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
