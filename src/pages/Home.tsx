import { Link } from "react-router-dom";
import {
  Bell,
  PenTool as Tool,
  Phone,
  Users,
  FileText,
  Home as HomeIcon,
  Timer,
  Recycle,
  Volume2,
  Building2,
  Flame,
  Book,
  Bike,
  History as HistoryIcon,
  Home as Home2,
  Info,
} from "lucide-react";
import i18n from "../../i18n/sv.json";
import data from "../../test/general.json";

const features = [
  {
    icon: Bell,
    title: i18n.layout.news,
    path: "/news",
    description: i18n.features.newsDescription,
  },
  {
    icon: Tool,
    title: i18n.layout.reportFault,
    path: data.faultReportHref,
    description: i18n.features.reportFaultDescription,
  },
  {
    icon: Phone,
    title: i18n.layout.contact,
    path: "/contact",
    description: i18n.features.contactDescription,
  },
  {
    icon: Users,
    title: i18n.layout.board,
    path: "/board",
    description: i18n.features.theBoardDescription,
  },
  {
    icon: FileText,
    title: i18n.layout.documents,
    path: "/documents",
    description: i18n.features.documentsDescription,
  },
  {
    icon: HomeIcon,
    title: i18n.layout.commonAreas,
    path: "/common-areas",
    description: i18n.features.commonAreasDescription,
  },
  {
    icon: Timer,
    title: i18n.layout.laundry,
    path: "/laundry",
    description: i18n.features.laundryDescription,
  },
  {
    icon: Recycle,
    title: i18n.layout.recycling,
    path: "/recycling",
    description: i18n.features.recyclingDescription,
  },
  {
    icon: Volume2,
    title: i18n.layout.disturbance,
    path: "/disturbance",
    description: i18n.features.disturbanceDescription,
  },
  {
    icon: Building2,
    title: i18n.layout.facilities,
    path: "/facilities",
    description: i18n.features.facilitiesDescription,
  },
  {
    icon: Flame,
    title: i18n.layout.sauna,
    path: "/sauna",
    description: i18n.features.saunaDescription,
  },
  {
    icon: Book,
    title: i18n.layout.rules,
    path: "/rules",
    description: i18n.features.rulesTipsDescription,
  },
  {
    icon: Bike,
    title: i18n.layout.storage,
    path: "/storage",
    description: i18n.features.storageDescription,
  },
  {
    icon: HistoryIcon,
    title: i18n.layout.history,
    path: "/history",
    description: i18n.features.historyDescription,
  },
  {
    icon: Home2,
    title: i18n.layout.realtors,
    path: "/realtors",
    description: i18n.features.realtorsDescription,
  },
  {
    icon: Info,
    title: i18n.layout.info,
    path: "/info",
    description: i18n.features.infoDescription,
  },
];

const Home = () => {
  return (
    <div className="space-y-8">
      {/* Quick Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Link
              key={feature.path}
              to={feature.path}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <Icon className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
