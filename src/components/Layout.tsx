import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { replacePlaceholders } from "../utils";
import i18n from "../../i18n/sv.json";
import data from "../../test/general.json";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { path: "/news", label: i18n.layout.news },
    { path: data.faultReportHref, label: i18n.layout.reportFault },
    { path: "/contact", label: i18n.layout.contact },
    { path: "/board", label: i18n.layout.board },
    { path: "/documents", label: i18n.layout.documents },
    { path: "/common-areas", label: i18n.layout.commonAreas },
    { path: "/laundry", label: i18n.layout.laundry },
    { path: "/recycling", label: i18n.layout.recycling },
    { path: "/disturbance", label: i18n.layout.disturbance },
    { path: "/facilities", label: i18n.layout.facilities },
    { path: "/sauna", label: i18n.layout.sauna },
    { path: "/rules", label: i18n.layout.rules },
    { path: "/storage", label: i18n.layout.storage },
    { path: "/history", label: i18n.layout.history },
    { path: "/realtors", label: i18n.layout.realtors },
    { path: "/info", label: i18n.layout.info },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
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
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
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
              <h3 className="text-lg font-semibold mb-4">
                {i18n.layout.contactUs}
              </h3>
              <p>{i18n.layout.email}: {data.email}</p>
              <p>{i18n.layout.phone}: {data.phone}</p>
              <p>{i18n.layout.address}: {data.address}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {i18n.layout.quickLinks}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/news" className="hover:text-blue-300">
                    {i18n.layout.news}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-blue-300">
                    {i18n.layout.contact}
                  </Link>
                </li>
                <li>
                  <Link to="/report-fault" className="hover:text-blue-300">
                    {i18n.layout.reportFault}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {i18n.layout.emergency}
              </h3>
              <p>{i18n.layout.urgentMatters}</p>
              <p className="text-xl font-bold">{data.phone}</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>
              {replacePlaceholders(
                i18n.layout.copyright,
                String(new Date().getFullYear())
              )}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
