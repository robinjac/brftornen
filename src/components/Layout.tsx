import { useState } from "react";
import { Link, Outlet, useParams } from "react-router";
import { HelpCircle } from "lucide-react";
import { replacePlaceholders } from "../utils";
import i18n from "i18n/sv.json";
import data from "@/general.json";
import routes from "@/pages.json";
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

function CarouselDemo() {
  return (
    <Carousel
      className="shadow-md bg-gray-800 mx-auto w-full max-w-6xl h-auto"
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
        {Array.from({ length: 7 }).map((_, index) => (
          <CarouselItem key={index}>
            <img
              className="w-full h-[300px] lg:h-[450px] object-contain"
              src={`carousel/tornen-${index}.jpeg`}
              alt="BRF Tornen"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="cursor-pointer" />
      <CarouselNext className="cursor-pointer" />
    </Carousel>
  );
}

const Email = ({ email }: { email: string }) => (
  <div className="prose space-x-2 text-white">
    <span>{i18n.layout.email}</span>
    <a className="text-[oklch(0.83_0.04_71.53)]" href={`mailto:${email}`}>
      {email}
    </a>
  </div>
);

const Address = ({ address }: { address: string }) => (
  <div className="prose space-x-2 text-white">
    <span>{i18n.layout.address}</span>
    <span>{address}</span>
  </div>
);

const Routes = ({ selected }: { selected?: string }) =>
  routes.map((item) => (
    <Link
      key={item.slug}
      to={item.slug}
      className={`block py-2 px-4 rounded text-sm text-gray-700  transition ${
        selected === item.slug
          ? "!text-white bg-gray-800 font-semibold rounded"
          : "hover:text-gray-900 hover:bg-gray-200"
      }`}
    >
      {item.title.rendered}
    </Link>
  ));

const Layout = () => {
  const { slug } = useParams<{ slug: string }>();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky max-w-6xl mx-auto w-full top-0 z-10 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-[url('/brftornen-logga.jpg')] bg-cover h-10 w-10"></div>
              <span className="font-semibold text-xl">BRF Tornen Järfälla</span>
            </Link>
            <nav className="lg:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger className="text-gray-500 border rounded-b-md cursor-pointer flex items-center group-hover:bg-gray-50 group-hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  <HelpCircle className="size-6" />
                  <span className="hidden lg:flex ml-1">Information</span>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Information</SheetTitle>
                  </SheetHeader>
                  <SheetDescription
                    onClickCapture={() => setOpen(false)}
                    className="px-4 overflow-auto"
                  >
                    <Routes selected={slug} />
                  </SheetDescription>
                </SheetContent>
              </Sheet>
            </nav>
          </div>
        </div>
      </header>
      <div className="min-h-screen overflow-hidden flex flex-col">
        <CarouselDemo />

        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex shadow-md bg-white">
          {/* Main content */}
          <main className="flex-grow">
            <Outlet />
          </main>
          <nav className="hidden lg:flex ml-8 p-4 flex-col space-y-2 min-w-[180px] bg-gray-100 rounded">
            <Routes selected={slug} />
          </nav>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 max-w-6xl mx-auto w-full text-white mt-auto">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h4 className="text-lg font-semibold mb-4">
              {i18n.layout.contactUs}
            </h4>
            <address>
              <Email email={data.email ?? ""} />
              <Address address={data.address ?? ""} />
            </address>
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
    </>
  );
};

export default Layout;
