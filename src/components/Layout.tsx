import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { path: '/news', label: 'News' },
    { path: '/report-fault', label: 'Report a Fault' },
    { path: '/contact', label: 'Contact' },
    { path: '/board', label: 'The Board' },
    { path: '/documents', label: 'Statutes and Documents' },
    { path: '/common-areas', label: 'Well-being and Common Areas' },
    { path: '/laundry', label: 'Laundry Rooms' },
    { path: '/recycling', label: 'Recycling Room' },
    { path: '/disturbance', label: 'Disturbance' },
    { path: '/facilities', label: 'Premises / Facilities' },
    { path: '/sauna', label: 'Sauna' },
    { path: '/rules', label: 'Advice, Rules & Tips' },
    { path: '/storage', label: 'Bicycle & Basement Storage' },
    { path: '/history', label: 'History' },
    { path: '/realtors', label: 'Information for Realtors' },
    { path: '/info', label: 'Info' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-[url('/brftornen-logga.jpg')] bg-cover h-10 w-10"></div>
              {/* <Home className="h-6 w-6 text-blue-600" /> */}
              <span className="font-semibold text-xl">BRF Tornen Järfälla</span>
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Desktop menu */}
            <nav className="hidden lg:flex lg:space-x-8">
              {menuItems.slice(0, 4).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <div className="relative group">
                <button className="text-gray-500 group-hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  More
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                  <div className="py-1">
                    {menuItems.slice(4).map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>Email: info@housingassociation.com</p>
              <p>Phone: +46 123 456 789</p>
              <p>Address: Example Street 123, City</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/news" className="hover:text-blue-300">News</Link></li>
                <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
                <li><Link to="/report-fault" className="hover:text-blue-300">Report a Fault</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Emergency</h3>
              <p>For urgent matters outside office hours:</p>
              <p className="text-xl font-bold">+46 123 456 789</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} Housing Association. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;