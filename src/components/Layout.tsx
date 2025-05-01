import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { replacePlaceholders } from "../utils";
import i18n from "../../i18n/sv.json";
import data from "../../test/general.json";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pages, setPages] = useState<WordpressPage[]>([]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    fetch(`https://www.brftornen.se/wp-json/wp/v2/pages?per_page=100`)
      .then((res) => res.json())
      .then(setPages);
  }, []);

  const menuItems = [{ path: "/", label: i18n.layout.news }];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-md">
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
              <div className="relative group">
                <Sheet>
                  <SheetTrigger>
                    <button className="text-gray-500 cursor-pointer flex items-center space-x-1 group-hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                      <Menu className="h-6 w-6" />
                      <span>Information</span>
                    </button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Information</SheetTitle>
                    </SheetHeader>
                    {pages.map((item) => (
                      <Link
                        key={item.slug}
                        to={item.slug}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <p
                          dangerouslySetInnerHTML={{
                            __html: item.title.rendered,
                          }}
                        />
                      </Link>
                    ))}
                  </SheetContent>
                </Sheet>
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

      {/* Hero Section */}
      <img
        src="/brftornen.jpg"
        alt="BRF Tornen"
        className="shadow-md mx-auto w-full max-w-7xl h-auto"
      />

      {/* Main content */}
      <main className="max-w-7xl flex flex-col w-full bg-white mx-auto px-4 sm:px-6 lg:px-8 py-8 shadow-md">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {i18n.layout.contactUs}
            </h3>
            <p>
              {i18n.layout.email}: {data.email}
            </p>
            <p>
              {i18n.layout.address}: {data.address}
            </p>
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
