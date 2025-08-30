import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, Users, BookOpen, Award, Mail, Phone, MapPin, Zap, Target, Rocket } from 'lucide-react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    year: '',
    branch: '',
    course: ''
  });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Floating animation for hero elements
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    // Create floating animation elements
    const elements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10
    }));
    setFloatingElements(elements);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        college: '',
        year: '',
        branch: '',
        course: ''
      });
    }, 3000);
  };

  const testimonials = [
    {
      name: "Arjun Sharma",
      college: "IIT Delhi",
      branch: "Computer Science",
      text: "Engineering SEM Prep literally saved my semester! Their shortcuts and techniques helped me score 9.2 CGPA.",
      rating: 5
    },
    {
      name: "Priya Patel",
      college: "NIT Warangal",
      branch: "Electronics",
      text: "The study materials are exactly what you need for last-minute prep. Highly recommend!",
      rating: 5
    },
    {
      name: "Rohit Kumar",
      college: "BITS Pilani",
      branch: "Mechanical",
      text: "Best investment I made in my college life. The strategies actually work!",
      rating: 5
    }
  ];

  const courses = [
    "Mathematics-I", "Mathematics-II", "Physics", "Chemistry", 
    "Engineering Mechanics", "Thermodynamics", "Data Structures",
    "Digital Electronics", "Control Systems", "Machine Design"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-x-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              animation: `float ${element.duration}s ease-in-out infinite ${element.delay}s`
            }}
          />
        ))}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up 0.8s ease-out; }
      `}</style>

      {/* Navigation */}
      <nav className="relative z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Engineering SEM Prep
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Engineering
                </span>
                <br />
                <span className="text-gray-800">SEM Prep</span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Zap className="h-6 w-6 text-yellow-500 animate-bounce" />
                <p className="text-xl lg:text-2xl text-gray-600 font-medium">
                  Your shortcut for sem end success
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
              Master your engineering subjects with our proven strategies, comprehensive notes, and last-minute prep techniques designed specifically for semester exams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => setIsFormVisible(true)}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transform transition-all duration-300 animate-pulse-glow"
              >
                Get Started Now
                <ChevronRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 animate-bounce-slow">10K+</div>
                <div className="text-gray-600">Students Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 animate-bounce-slow" style={{ animationDelay: '1s' }}>24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Right Side - Animated Visual */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 p-3 rounded-lg">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Targeted Learning</h3>
                    <p className="text-gray-600 text-sm">Focus on what matters most</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-3 rounded-lg">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Quick Results</h3>
                    <p className="text-gray-600 text-sm">See improvement in days</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Proven Methods</h3>
                    <p className="text-gray-600 text-sm">Trusted by thousands</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce-slow"></div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a team of engineering graduates who understand the stress of semester exams and have cracked the code to success.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-600 p-4 rounded-lg w-fit mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Expert Team</h3>
              <p className="text-gray-600">
                Our team consists of top engineering graduates from premier institutes who have mastered the art of efficient studying and exam preparation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
              <div className="bg-purple-600 p-4 rounded-lg w-fit mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Proven Methods</h3>
              <p className="text-gray-600">
                We've developed time-tested strategies and shortcuts that have helped thousands of students achieve excellent grades in their semester exams.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
              <div className="bg-pink-600 p-4 rounded-lg w-fit mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Success Guarantee</h3>
              <p className="text-gray-600">
                With our comprehensive approach and personalized guidance, we ensure every student sees significant improvement in their academic performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              What Students <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Say</span>
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real students who transformed their academic journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.branch}, {testimonial.college}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Grades?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of students who've already discovered the shortcut to semester success
          </p>
          <button
            onClick={() => setIsFormVisible(true)}
            className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:scale-110 transform transition-all duration-300 shadow-2xl hover:shadow-3xl"
          >
            Start Your Journey Today
          </button>
        </div>
      </section>

      {/* Form Modal */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto transform animate-slide-up">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Join Our Success Family! 🚀</h3>
              <p className="text-gray-600">Tell us about yourself and we'll help you ace your exams</p>
            </div>

 key={course} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg"
                >
                  Submit & Get Started 🎯
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <div className="text-green-600 text-4xl">✓</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">You're In! 🎉</h3>
                <p className="text-gray-600">We'll contact you soon with personalized study materials!</p>
              </div>
            )}

            <button
              onClick={() => setIsFormVisible(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">Engineering SEM Prep</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Your trusted partner in academic success. We provide the shortcuts and strategies you need to excel in your engineering semester exams.
              </p>
              <div className="flex space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                  <Phone className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

               <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">hello@engineeringsemprep.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">Hyderabad, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              Â© 2025 Engineering SEM Prep. All rights reserved. Your shortcut for sem end success.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
   