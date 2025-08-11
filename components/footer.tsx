export default function Footer() {
  const socialItems = [
    {
      href: "https://www.linkedin.com/in/tushar-18-sharma/",
      icon: "fab fa-linkedin-in",
      tooltip: "LinkedIn",
      className: "linkedin",
    },
    {
      href: "https://github.com",
      icon: "fab fa-github",
      tooltip: "GitHub",
      className: "github",
    },
    {
      href: "https://twitter.com",
      icon: "fab fa-twitter",
      tooltip: "Twitter",
      className: "twitter",
    },
    {
      href: "mailto:work.tushar1803@gmail.com",
      icon: "fas fa-at",
      tooltip: "Email",
      className: "email",
    },
  ]

  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            {socialItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.href.startsWith("mailto:") ? "_self" : "_blank"}
                rel={item.href.startsWith("mailto:") ? "" : "noopener noreferrer"}
                className={`footer-social-link ${item.className} group relative`}
                title={item.tooltip}
              >
                <i className={`${item.icon} text-xl`}></i>
              </a>
            ))}
          </div>
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Tushar Sharma. All rights reserved.</p>
            <p className="text-sm mt-2">Software Engineer L1 | Building scalable solutions</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
