import { Bell } from "lucide-react";
import Posts from "@/components/Posts";

const News = () => (
  <>
    <div className="flex prose items-center mb-6">
      <h1 className="!m-0">NYHETER</h1>
      <Bell className="ml-2 size-8 -rotate-12 text-blue-800" />
    </div>
    <Posts />
  </>
);

export default News;
