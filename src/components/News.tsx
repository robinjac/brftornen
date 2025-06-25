import { Bell } from "lucide-react";
import Posts from "@/components/Posts";

const News = () => (
  <>
    <div className="flex prose -ml-2 items-center space-x-2 mb-6">
      <Bell className="h-8 w-8 text-blue-600" />
      <h1 className="!m-0">NYHETER</h1>
    </div>
    <Posts />
  </>
);

export default News;
