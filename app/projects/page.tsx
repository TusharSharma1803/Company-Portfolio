"use client"

import Navigation from "@/components/navigation"
import FloatingActionButtons from "@/components/floating-action-buttons"

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      icon: "fas fa-shopping-cart",
      description:
        "Full-stack e-commerce solution built with .NET Core, featuring payment integration, inventory management, and admin dashboard.",
      technologies: [".NET Core", "SQL Server", "Azure"],
      liveDemo: "#",
      codeRepo: "#",
    },
    {
      title: "Task Management API",
      icon: "fas fa-tasks",
      description:
        "RESTful API for project management with real-time notifications, user authentication, and comprehensive reporting features.",
      technologies: ["ASP.NET Core", "SignalR", "JWT"],
      liveDemo: "#",
      codeRepo: "#",
    },
    {
      title: "Microservices Architecture",
      icon: "fas fa-cubes",
      description:
        "Scalable microservices solution with Docker containerization, API Gateway, and distributed caching for high-performance applications.",
      technologies: ["Microservices", "Docker", "Redis"],
      liveDemo: "#",
      codeRepo: "#",
    },
    {
      title: "Real-time Chat Application",
      icon: "fas fa-comments",
      description:
        "Modern chat application with real-time messaging, file sharing, and group conversations using SignalR and React.",
      technologies: ["SignalR", "React", "SQL Server"],
      liveDemo: "#",
      codeRepo: "#",
    },
    {
      title: "Financial Dashboard",
      icon: "fas fa-chart-pie",
      description:
        "Comprehensive financial analytics dashboard with interactive charts, reporting, and data visualization capabilities.",
      technologies: ["Blazor", "Chart.js", "Entity Framework"],
      liveDemo: "#",
      codeRepo: "#",
    },
    {
      title: "Identity Management System",
      icon: "fas fa-user-shield",
      description:
        "Secure identity and access management system with multi-factor authentication, role-based access control, and audit logging.",
      technologies: ["Identity Server", "OAuth 2.0", "Azure AD"],
      liveDemo: "#",
      codeRepo: "#",
    },
  ]

  const handleDemoClick = (project: string) => {
    alert(`${project} demo would open here. This is a portfolio demonstration.`)
  }

  const handleCodeClick = (project: string) => {
    alert(`${project} repository would open here. This is a portfolio demonstration.`)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation />

      {/* Floating Action Buttons */}
      <FloatingActionButtons />

      {/* Projects Section */}
      <section className="py-20 dark-section pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card rounded-xl shadow-lg overflow-hidden hover-lift">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-white">{project.title}</h2>
                    <i className={`${project.icon} text-2xl text-orange-500`}></i>
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-orange-900 bg-opacity-30 text-orange-400 rounded-full text-sm border border-orange-500 border-opacity-30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleDemoClick(project.title)}
                      className="text-orange-500 hover:text-orange-400 font-medium transition-colors"
                    >
                      <i className="fas fa-external-link-alt mr-1"></i>Live Demo
                    </button>
                    <button
                      onClick={() => handleCodeClick(project.title)}
                      className="text-gray-400 hover:text-white font-medium transition-colors"
                    >
                      <i className="fab fa-github mr-1"></i>Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Categories */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Project Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="info-card p-6 rounded-lg text-center hover-lift">
                <i className="fas fa-globe text-3xl text-orange-500 mb-3"></i>
                <h3 className="text-lg font-semibold text-white mb-2">Web Applications</h3>
                <p className="text-gray-400 text-sm">Full-stack web solutions</p>
              </div>

              <div className="info-card p-6 rounded-lg text-center hover-lift">
                <i className="fas fa-server text-3xl text-orange-500 mb-3"></i>
                <h3 className="text-lg font-semibold text-white mb-2">APIs & Services</h3>
                <p className="text-gray-400 text-sm">RESTful and GraphQL APIs</p>
              </div>

              <div className="info-card p-6 rounded-lg text-center hover-lift">
                <i className="fas fa-cloud text-3xl text-orange-500 mb-3"></i>
                <h3 className="text-lg font-semibold text-white mb-2">Cloud Solutions</h3>
                <p className="text-gray-400 text-sm">Azure-based applications</p>
              </div>

              <div className="info-card p-6 rounded-lg text-center hover-lift">
                <i className="fas fa-mobile-alt text-3xl text-orange-500 mb-3"></i>
                <h3 className="text-lg font-semibold text-white mb-2">Mobile-First</h3>
                <p className="text-gray-400 text-sm">Responsive design</p>
              </div>
            </div>
          </div>

          {/* Development Process */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Development Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Planning</h3>
                <p className="text-gray-400 text-sm">Requirements analysis and system design</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Development</h3>
                <p className="text-gray-400 text-sm">Agile development with clean code practices</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Testing</h3>
                <p className="text-gray-400 text-sm">Comprehensive testing and quality assurance</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Deployment</h3>
                <p className="text-gray-400 text-sm">CI/CD pipeline and production deployment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
