import { Link } from 'react-router-dom';
import { Bell, PenTool as Tool, Phone, Users, FileText, Home as HomeIcon, Timer, Recycle, Volume2, Building2, Flame, Book, Bike, History as HistoryIcon, Home as Home2, Info } from 'lucide-react';

const features = [
  { icon: Bell, title: 'News', path: '/news', description: 'Latest updates and announcements' },
  { icon: Tool, title: 'Report a Fault', path: '/report-fault', description: 'Submit maintenance requests' },
  { icon: Phone, title: 'Contact', path: '/contact', description: 'Get in touch with us' },
  { icon: Users, title: 'The Board', path: '/board', description: 'Meet our board members' },
  { icon: FileText, title: 'Documents', path: '/documents', description: 'Access important documents' },
  { icon: HomeIcon, title: 'Common Areas', path: '/common-areas', description: 'Guidelines for shared spaces' },
  { icon: Timer, title: 'Laundry', path: '/laundry', description: 'Laundry room information' },
  { icon: Recycle, title: 'Recycling', path: '/recycling', description: 'Waste management guide' },
  { icon: Volume2, title: 'Disturbance', path: '/disturbance', description: 'Handle noise complaints' },
  { icon: Building2, title: 'Facilities', path: '/facilities', description: 'Available premises' },
  { icon: Flame, title: 'Sauna', path: '/sauna', description: 'Sauna booking and rules' },
  { icon: Book, title: 'Rules & Tips', path: '/rules', description: 'Living guidelines' },
  { icon: Bike, title: 'Storage', path: '/storage', description: 'Bicycle and basement storage' },
  { icon: HistoryIcon, title: 'History', path: '/history', description: 'Our association\'s story' },
  { icon: Home2, title: 'Realtors', path: '/realtors', description: 'Information for agents' },
  { icon: Info, title: 'Info', path: '/info', description: 'General information' }
];

const Home = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-blue-600 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Housing Association</h1>
          <p className="text-xl">Your community hub for information, services, and resources.</p>
        </div>
      </div>

      {/* Quick Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Link
              key={feature.path}
              to={feature.path}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <Icon className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Link>
          );
        })}
      </div>

      {/* Emergency Contact */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-8">
        <h2 className="text-xl font-semibold text-red-700 mb-2">Emergency Contact</h2>
        <p className="text-red-600">
          For urgent matters outside office hours, please call: <span className="font-bold">+46 123 456 789</span>
        </p>
      </div>
    </div>
  );
};

export default Home;