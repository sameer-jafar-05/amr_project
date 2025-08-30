"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Star,
  Users,
  BookOpen,
  Award,
  Mail,
  Phone,
  Zap,
  Target,
  Rocket,
} from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    year: "",
    branch: "",
    course: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Floating animation for hero elements
  const [floatingElements, setFloatingElements] = useState<
    {
      id: number;
      x: number;
      y: number;
      size: number;
      delay: number;
      duration: number;
    }[]
  >([]);

  useEffect(() => {
    const elements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
    }));
    setFloatingElements(elements);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        college: "",
        year: "",
        branch: "",
        course: "",
      });
    }, 3000);
  };

  const testimonials = [
    {
      name: "Arjun Sharma",
      college: "IIT Delhi",
      branch: "Computer Science",
      text: "Engineering SEM Prep literally saved my semester! Their shortcuts and techniques helped me score 9.2 CGPA.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      college: "NIT Warangal",
      branch: "Electronics",
      text: "The study materials are exactly what you need for last-minute prep. Highly recommend!",
      rating: 5,
    },
    {
      name: "Rohit Kumar",
      college: "BITS Pilani",
      branch: "Mechanical",
      text: "Best investment I made in my college life. The strategies actually work!",
      rating: 5,
    },
  ];

  const courses = [
    "Mathematics-I",
    "Mathematics-II",
    "Physics",
    "Chemistry",
    "Engineering Mechanics",
    "Thermodynamics",
    "Data Structures",
    "Digital Electronics",
    "Control Systems",
    "Machine Design",
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
              animation: `float ${element.duration}s ease-in-out infinite ${element.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
      `}</style>

      {/* ... keep your navigation, hero, about, testimonials, CTA ... */}

      {/* Form Modal */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto transform animate-slide-up relative">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border p-3 rounded-lg"
                    required
                  />
                  <input
                    type="text"
                    name="college"
                    placeholder="Your College"
                    value={formData.college}
                    onChange={handleInputChange}
                    className="w-full border p-3 rounded-lg"
                    required
                  />
                  <input
                    type="text"
                    name="year"
                    placeholder="Year of Study"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full border p-3 rounded-lg"
                    required
                  />
                  <input
                    type="text"
                    name="branch"
                    placeholder="Branch"
                    value={formData.branch}
                    onChange={handleInputChange}
                    className="w-full border p-3 rounded-lg"
                    required
                  />
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full border p-3 rounded-lg"
                    required
                  >
                    <option value="">Select a Course</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
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
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  You're In! 🎉
                </h3>
                <p className="text-gray-600">
                  We'll contact you soon with personalized study materials!
                </p>
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
    </div>
  );
}