import React from 'react';
import { Bell } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    date: '2024-03-15',
    title: 'Annual General Meeting Announcement',
    content: 'The annual general meeting will be held on April 15th at 18:00 in the community room. Important decisions regarding renovation plans will be discussed.',
    category: 'Meeting'
  },
  {
    id: 2,
    date: '2024-03-10',
    title: 'Spring Cleaning Day',
    content: 'Join us for our annual spring cleaning day on March 30th. We\'ll be tidying up common areas and the courtyard.',
    category: 'Event'
  },
  {
    id: 3,
    date: '2024-03-05',
    title: 'New Recycling Guidelines',
    content: 'Updated recycling guidelines are now in effect. Please check the recycling room for new sorting instructions.',
    category: 'Information'
  }
];

const News = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Bell className="h-6 w-6 text-blue-600" />
        <h1 className="text-3xl font-bold">Latest News</h1>
      </div>

      <div className="grid gap-6">
        {newsItems.map((item) => (
          <article key={item.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-500 text-sm">{new Date(item.date).toLocaleDateString()}</p>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {item.category}
              </span>
            </div>
            <p className="text-gray-600">{item.content}</p>
          </article>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4">Subscribe to Updates</h2>
        <form className="flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default News;