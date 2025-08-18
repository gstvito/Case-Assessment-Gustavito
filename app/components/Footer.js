export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-2xl font-bold text-blue-400 mb-4">Belajar LinkedIn</div>
        <p className="text-gray-400 mb-4">Empowering careers through LinkedIn mastery</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors focus-ring">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors focus-ring">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors focus-ring">
            Contact Us
          </a>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-800 text-gray-500 text-sm">
          © 2025 Belajar LinkedIn. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
