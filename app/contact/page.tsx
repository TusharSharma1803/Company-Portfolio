"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import FloatingActionButtons from "@/components/floating-action-buttons"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "tushar.sharma@email.com",
      href: "mailto:tushar.sharma@email.com",
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      value: "linkedin.com/in/tusharsharma",
      href: "https://linkedin.com/in/tusharsharma",
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      value: "github.com/tusharsharma",
      href: "https://github.com/tusharsharma",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation />

      {/* Floating Action Buttons */}
      <FloatingActionButtons />

      {/* Contact Section */}
      <section className="py-20 gradient-bg pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Let&apos;s Work Together</h1>
            <div className="w-24 h-1 bg-yellow-300 mx-auto mb-6"></div>
            <p className="text-xl text-white opacity-90">
              Ready to bring your next project to life? Let&apos;s discuss how I can help!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact Information */}
            <div className="text-white">
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <i className={`${info.icon} text-xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{info.title}</h3>
                      <a
                        href={info.href}
                        className="opacity-90 hover:opacity-100 hover:text-yellow-300 transition-all"
                        target={info.href.startsWith("http") ? "_blank" : "_self"}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : ""}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Contact Information */}
              <div className="mt-12 p-6 bg-white bg-opacity-10 rounded-lg backdrop-filter backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Why Work With Me?</h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-center">
                    <i className="fas fa-check text-yellow-300 mr-3"></i>
                    3+ years of professional experience
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-yellow-300 mr-3"></i>
                    Proven track record of successful projects
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-yellow-300 mr-3"></i>
                    Clean, maintainable code practices
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-yellow-300 mr-3"></i>
                    Excellent communication and collaboration
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-yellow-300 mr-3"></i>
                    On-time delivery and quality assurance
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-effect rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 border border-white border-opacity-30 focus:outline-none focus:border-yellow-300 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 border border-white border-opacity-30 focus:outline-none focus:border-yellow-300 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 border border-white border-opacity-30 focus:outline-none focus:border-yellow-300 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Your Message"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 border border-white border-opacity-30 focus:outline-none focus:border-yellow-300 resize-none transition-colors"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-orange-500 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 hover:text-orange-600 transition-all"
                >
                  <i className="fas fa-paper-plane mr-2"></i>Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-filter backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
              <p className="text-gray-200 mb-6">
                I&apos;m always excited to work on new challenges and help bring innovative ideas to life. Let's discuss your
                project requirements and see how we can work together.
              </p>
              <div className="flex flex-wrap justify-center space-x-6 mt-4">
                <a
                  href="mailto:tushar.sharma@email.com"
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center"
                >
                  <i className="fas fa-envelope mr-2"></i>Email Me
                </a>
                <a
                  href="https://linkedin.com/in/tusharsharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  <i className="fab fa-linkedin mr-2"></i>Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
