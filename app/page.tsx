"use client"

import Navigation from "@/components/navigation"
import FloatingActionButtons from "@/components/floating-action-buttons"
import Link from "next/link"

export default function HomePage() {
  const handleDownloadResume = () => {
    // In a real app, this would trigger a file download
    alert("Resume download would start here. This is a demo portfolio.")
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Floating Action Buttons */}
      <FloatingActionButtons />

      {/* Particle Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="particles-container">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
          <div className="particle particle-6"></div>
          <div className="particle particle-7"></div>
          <div className="particle particle-8"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="gradient-bg min-h-screen flex items-center relative overflow-hidden z-10 pt-32 md:pt-40">
        <div className="absolute inset-0 opacity-10">
          <div className="floating absolute top-20 left-10 text-6xl">💻</div>
          <div className="floating absolute top-40 right-20 text-4xl" style={{ animationDelay: "-2s" }}>
            ⚡
          </div>
          <div className="floating absolute bottom-40 left-20 text-5xl" style={{ animationDelay: "-4s" }}>
            🚀
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hi, I&apos;m <span className="text-yellow-300">Tushar</span>
              </h1>
              <div className="text-2xl md:text-3xl mb-6 typewriter">Senior .NET Developer</div>
              <p className="text-xl mb-8 opacity-90">
                Crafting robust, scalable applications with 3+ years of expertise in .NET Core, C#, and modern web
                technologies. Ready to bring your ideas to life!
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={handleDownloadResume}
                  className="contact-btn text-white px-8 py-4 rounded-full font-semibold text-lg"
                >
                  <i className="fas fa-download mr-2"></i>Download Resume
                </button>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-500 transition-all inline-flex items-center"
                >
                  <i className="fas fa-envelope mr-2"></i>Get In Touch
                </Link>
              </div>
            </div>

            {/* <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-pulse"></div>
                <div
                  className="absolute inset-4 bg-white rounded-full opacity-40 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center">
                  <i className="fas fa-code text-6xl text-orange-500"></i>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}
