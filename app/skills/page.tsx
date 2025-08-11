import Navigation from "@/components/navigation"
import FloatingActionButtons from "@/components/floating-action-buttons"

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: "fas fa-server",
      skills: [
        { name: "C# / .NET Core", percentage: 95 },
        { name: "ASP.NET Core", percentage: 90 },
        { name: "Entity Framework", percentage: 85 },
      ],
    },
    {
      title: "Database",
      icon: "fas fa-database",
      skills: [
        { name: "SQL Server", percentage: 90 },
        { name: "PostgreSQL", percentage: 80 },
        { name: "MongoDB", percentage: 75 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: "fas fa-cloud",
      skills: [
        { name: "Azure", percentage: 85 },
        { name: "Docker", percentage: 80 },
        { name: "CI/CD", percentage: 75 },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation />

      {/* Floating Action Buttons */}
      <FloatingActionButtons />

      {/* Skills Section */}
      <section className="py-20 darker-section pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Skills</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-card p-8 rounded-xl shadow-lg hover-lift">
                <div className="text-center mb-6">
                  <i className={`${category.icon} text-4xl text-orange-500 mb-4`}></i>
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-orange-500 font-bold">{skill.percentage}%</span>
                      </div>
                      <div className="bg-gray-700 rounded-full h-2">
                        <div className="skill-bar rounded-full" style={{ width: `${skill.percentage}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Additional Technologies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="skill-card p-6 rounded-lg text-center hover-lift">
                <i className="fab fa-js-square text-3xl text-orange-500 mb-3"></i>
                <h3 className="text-lg font-semibold text-white mb-2">JavaScript</h3>
                <p className="text-gray-400 text-sm">Frontend Development</p>
              </div>

              <div className="skill-card p-6 rounded-lg text-center hover-lift">
                <i className="fab fa-react text-3xl text-orange-500 mb-3"></i>
                <h3 className="text-lg font-semibold text-white mb-2">React</h3>
                <p className="text-gray-400 text-sm">UI Library</p>
              </div>

              <div className="skill-card p-6 rounded-lg text-center hover-lift">
                <i className="fab fa-git-alt text-3xl text-orange-500 mb-3"></i>
                <h3 className="text-lg font-semibold text-white mb-2">Git</h3>
                <p className="text-gray-400 text-sm">Version Control</p>
              </div>

              <div className="skill-card p-6 rounded-lg text-center hover-lift">
                <i className="fas fa-code text-3xl text-orange-500 mb-3"></i>
                <h3 className="text-lg font-semibold text-white mb-2">REST APIs</h3>
                <p className="text-gray-400 text-sm">Web Services</p>
              </div>

              <div className="skill-card p-6 rounded-lg text-center hover-lift">
                <i className="fas fa-mobile-alt text-3xl text-orange-500 mb-3"></i>
                <h3 className="text-lg font-semibold text-white mb-2">Responsive Design</h3>
                <p className="text-gray-400 text-sm">Mobile-First</p>
              </div>

              <div className="skill-card p-6 rounded-lg text-center hover-lift">
                <i className="fas fa-shield-alt text-3xl text-orange-500 mb-3"></i>
                <h3 className="text-lg font-semibold text-white mb-2">Security</h3>
                <p className="text-gray-400 text-sm">Authentication & Authorization</p>
              </div>

              <div className="skill-card p-6 rounded-lg text-center hover-lift">
                <i className="fas fa-chart-line text-3xl text-orange-500 mb-3"></i>
                <h3 className="text-lg font-semibold text-white mb-2">Performance</h3>
                <p className="text-gray-400 text-sm">Optimization & Monitoring</p>
              </div>

              <div className="skill-card p-6 rounded-lg text-center hover-lift">
                <i className="fas fa-cogs text-3xl text-orange-500 mb-3"></i>
                <h3 className="text-lg font-semibold text-white mb-2">Microservices</h3>
                <p className="text-gray-400 text-sm">Distributed Systems</p>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Certifications & Learning</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="info-card p-6 rounded-lg hover-lift">
                <div className="flex items-center mb-4">
                  <i className="fab fa-microsoft text-3xl text-orange-500 mr-4"></i>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Microsoft Certified</h3>
                    <p className="text-gray-400">Azure Developer Associate</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-2">
                  Certified in developing and maintaining applications on Microsoft Azure platform.
                </p>
                <p className="text-sm text-orange-400">Valid through 2025</p>
              </div>

              <div className="info-card p-6 rounded-lg hover-lift">
                <div className="flex items-center mb-4">
                  <i className="fas fa-graduation-cap text-3xl text-orange-500 mr-4"></i>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Continuous Learning</h3>
                    <p className="text-gray-400">Always Improving</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-2">
                  Actively pursuing new technologies and best practices through online courses and community
                  involvement.
                </p>
                <p className="text-sm text-orange-400">Pluralsight, Udemy, Microsoft Learn</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
