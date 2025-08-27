import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid, Legend } from 'recharts';

export default function Dashboard() {
  // Sample data for the charts
  const barData = [
    { name: 'Jan', value: 65 },
    { name: 'Feb', value: 59 },
    { name: 'Mar', value: 80 },
    { name: 'Apr', value: 81 },
    { name: 'May', value: 56 },
    { name: 'Jun', value: 55 },
  ];

  const lineData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 5000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
    { name: 'Jun', value: 2390 },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h2>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Total Users', value: '2,420', change: '+11.01%', trend: 'up' },
            { title: 'Active Sessions', value: '1,210', change: '-0.18%', trend: 'down' },
            { title: 'Total Revenue', value: '$12,628', change: '+18.1%', trend: 'up' },
            { title: 'Bounce Rate', value: '48.5%', change: '+7.8%', trend: 'up' },
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  stat.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {stat.change}
                </div>
              </div>
              <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${
                    stat.trend === 'up' ? 'bg-green-500' : 'bg-red-500'
                  }`} 
                  style={{ width: `${Math.min(100, Math.abs(parseFloat(stat.change)) * 5)}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Main Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium">Performance</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-md">Week</button>
              <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-md">Month</button>
              <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-md">Year</button>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium mb-6">Revenue</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { id: 1, user: 'John Doe', action: 'completed', task: 'Project Alpha', time: '2 min ago' },
                { id: 2, user: 'Jane Smith', action: 'added', task: 'new files', time: '1 hour ago' },
                { id: 3, user: 'Mike Johnson', action: 'commented', task: 'on Task #123', time: '3 hours ago' },
                { id: 4, user: 'Sarah Wilson', action: 'updated', task: 'profile settings', time: '5 hours ago' },
                { id: 5, user: 'David Brown', action: 'created', task: 'new project', time: '1 day ago' },
              ].map((activity) => (
                <div key={activity.id} className="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-3 flex-shrink-0">
                    {activity.user.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 truncate">
                      <span className="font-medium">{activity.user}</span> {activity.action} <span className="text-blue-600">{activity.task}</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
