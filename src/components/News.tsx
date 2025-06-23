import { Bell } from "lucide-react";
import Posts from "@/components/Posts";

const News = () => (
  <>
    <div className="flex items-center space-x-2 mb-6">
      <Bell className="h-6 w-6 text-blue-600" />
      <h1 className="text-3xl !m-0 font-bold">NYHETER</h1>
    </div>
    <Posts />
  </>
);

export default News;
