const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#12141C] pt-16 pb-8">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          
          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              ELYRION
            </h2>
            <p className="text-gray-400 mb-6 max-w-xs">
              Engineering systems beyond limits.  
              We build scalable, secure, and high-performance digital products.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-white font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="text-gray-400 hover:text-purple-400">Web Development</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-purple-400">Cyber Security</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-purple-400">Mobile Development</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-purple-400">System Architecture</a></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="text-gray-400 hover:text-purple-400">About</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-purple-400">Projects</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-purple-400">Contact</a></li>
            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <h3 className="text-white font-medium mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400">GitHub</a></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Elyrion. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-3 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;