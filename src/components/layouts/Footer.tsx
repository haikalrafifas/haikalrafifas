import Image from 'next/image';
import {
  FaInstagram, FaLinkedin,
  FaLandmark, FaLinkedinIn,
} from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.jpg"
                alt="My Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-white font-bold text-xl">Haikal Rafif</h3>
                <p className="text-sm text-gray-400">Personal Website</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Software Engineer & Full-Stack Developer.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/haikalrafif.as?utm_source=contact_section&utm_medium=referral&utm_campaign=button&utm_content=instagram&utm_id=haikalrafifas&utm_term=follow_instagram&utm_placement=website&utm_traffic=organic&utm_expid=.HaikalRafifAs-_-&utm_referrer=https%3A%2F%2Fgokal.my.id%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/haikalrafifas?utm_source=contact_button&utm_medium=referral&utm_campaign=button&utm_content=profile&utm_id=haikalrafifas&utm_term=get_in_touch&utm_placement=website&utm_traffic=organic&utm_expid=.HaikalRafifAs-_-&utm_referrer=https%3A%2F%2Fgokal.my.id%2F"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-white text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="/#/" className="hover:text-green-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="/#/about" className="hover:text-green-500 transition-colors">About Me</a>
              </li>
              <li>
                <a href="/#/clients" className="hover:text-green-500 transition-colors">Clients</a>
              </li>
              <li>
                <a href="/experiences" className="hover:text-green-500 transition-colors">Experiences</a>
              </li>
              <li>
                <a href="/projects" className="hover:text-green-500 transition-colors">Projects</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contacts</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <FaLandmark className="text-green-500" />
                <span className="text-sm">
                  Jakarta, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaInstagram className="text-green-500" />
                <span className="text-sm">haikalrafif.as</span>
              </li>
              <li className="flex items-center gap-2">
                <FaLinkedinIn className="text-green-500" />
                <span className="text-sm">haikalrafifas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {currentYear} haikalrafifas. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Made with</span>
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span>by haikalrafifas</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
