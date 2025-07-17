import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechCorp Solutions",
      company: "TechCorp",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Phoenix transformed our online presence completely. Their attention to detail and technical expertise is unmatched. Our website conversion rate increased by 150% after the redesign."
    },
    {
      name: "Michael Chen",
      position: "Founder, EcoShop",
      company: "EcoShop",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Working with Phoenix was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and exceeded all our expectations. The site is fast, beautiful, and user-friendly."
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, HealthCare Plus",
      company: "HealthCare Plus",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The team at Phoenix understood our vision perfectly and brought it to life. Their communication throughout the project was excellent, and the final product speaks for itself."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-orange-400">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with Phoenix.
          </p>
        </div>
        
        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Client Photo and Info */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-6">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-orange-400"
                  />
                  <div className="absolute -top-2 -right-2 bg-orange-400 rounded-full p-2">
                    <Quote className="w-4 h-4 text-gray-900" />
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-orange-400 font-semibold mb-1">
                  {testimonials[currentIndex].position}
                </p>
                <p className="text-gray-400 mb-4">
                  {testimonials[currentIndex].company}
                </p>
                
                {/* Star Rating */}
                <div className="flex justify-center lg:justify-start gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              {/* Testimonial Text */}
              <div>
                <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-orange-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;