import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Info } from "lucide-react";
import { replacePlaceholders } from "../utils";
import i18n from "../../i18n/sv.json";
import data from "../../test/general.json";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import routes from "../../routes.json";

function CarouselDemo() {
  return (
    <Carousel
      className="shadow-md bg-gray-800 mx-auto w-full max-w-7xl h-auto"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 10000,
        }),
      ]}
    >
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem key={index}>
            <img
              className="w-full h-[450px] object-contain"
              src={`carousel/tornen-${index}.jpeg`}
              alt="BRF Tornen"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

const Layout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.82_0.05_69.8)]">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-[url('/brftornen-logga.jpg')] bg-cover h-10 w-10"></div>
              <span className="font-semibold text-xl">BRF Tornen Järfälla</span>
            </Link>
            <nav>
              <div className="relative group">
                <Sheet open={open} onOpenChange={setOpen}>
                  <SheetTrigger className="text-gray-500 cursor-pointer flex items-center space-x-1 group-hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    <Info className="h-6 w-6" />
                    <span className="hidden lg:flex">Information</span>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Information</SheetTitle>
                    </SheetHeader>
                    <SheetDescription
                      onClickCapture={() => setOpen(false)}
                      className="px-4 overflow-auto"
                    >
                      {routes.map((item) => (
                        <Link
                          key={item}
                          to={item}
                          className="block py-2 text-sm text-gray-700 hover:text-gray-900"
                        >
                          {item}
                        </Link>
                      ))}
                    </SheetDescription>
                  </SheetContent>
                </Sheet>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <CarouselDemo />

      {/* Main content */}
      <main className="max-w-7xl flex flex-col grow w-full bg-white mx-auto px-4 sm:px-6 lg:px-8 py-8 shadow-md">
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
