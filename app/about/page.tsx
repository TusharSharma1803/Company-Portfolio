import Navigation from "@/components/navigation"
import FloatingActionButtons from "@/components/floating-action-buttons"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation />

      {/* Floating Action Buttons */}
      <FloatingActionButtons />

      {/* About Section */}
      <section className="py-20 dark-section pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Passionate .NET Developer</h2>
              <p className="text-lg text-gray-300 mb-6">
                With over 3 years of hands-on experience in .NET and .NET Core development, I specialize in building
                enterprise-level applications that are both performant and maintainable. My journey in software
                development has been driven by a passion for clean code and innovative solutions.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                I thrive in collaborative environments and have successfully delivered multiple projects from conception
                to deployment, working closely with cross-functional teams to exceed client expectations.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 stat-card rounded-lg">
                  <div className="text-3xl font-bold text-orange-500 mb-2">3+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div className="text-center p-6 stat-card rounded-lg">
                  <div className="text-3xl font-bold text-orange-500 mb-2">15+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="info-card p-6 rounded-lg hover-lift">
                <div className="flex items-center mb-4">
                  <i className="fas fa-graduation-cap text-2xl text-orange-500 mr-4"></i>
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                </div>
                <p className="text-gray-300">Bachelor&apos;s in Computer Science</p>
                <p className="text-sm text-gray-400">University of Technology (2018-2022)</p>
              </div>

              <div className="info-card p-6 rounded-lg hover-lift">
                <div className="flex items-center mb-4">
                  <i className="fas fa-briefcase text-2xl text-orange-500 mr-4"></i>
                  <h3 className="text-xl font-semibold text-white">Current Role</h3>
                </div>
                <p className="text-gray-300">Senior .NET Developer</p>
                <p className="text-sm text-gray-400">TechCorp Solutions (2022-Present)</p>
              </div>

              <div className="info-card p-6 rounded-lg hover-lift">
                <div className="flex items-center mb-4">
                  <i className="fas fa-certificate text-2xl text-orange-500 mr-4"></i>
                  <h3 className="text-xl font-semibold text-white">Certifications</h3>
                </div>
                <p className="text-gray-300">Microsoft Certified: Azure Developer Associate</p>
                <p className="text-sm text-gray-400">Valid through 2025</p>
              </div>
            </div>
          </div>

          {/* Additional About Content */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">My Development Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="info-card p-6 rounded-lg hover-lift">
                <i className="fas fa-lightbulb text-3xl text-orange-500 mb-4"></i>
                <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">
                  Always exploring new technologies and methodologies to deliver cutting-edge solutions that push
                  boundaries.
                </p>
              </div>

              <div className="info-card p-6 rounded-lg hover-lift">
                <i className="fas fa-users text-3xl text-orange-500 mb-4"></i>
                <h3 className="text-xl font-semibold text-white mb-3">Collaboration</h3>
                <p className="text-gray-300">
                  Believing in the power of teamwork and open communication to achieve exceptional results together.
                </p>
              </div>

              <div className="info-card p-6 rounded-lg hover-lift">
                <i className="fas fa-rocket text-3xl text-orange-500 mb-4"></i>
                <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
                <p className="text-gray-300">
                  Committed to writing clean, maintainable code and delivering high-quality software that exceeds
                  expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
