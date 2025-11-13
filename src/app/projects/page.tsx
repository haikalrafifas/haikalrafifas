'use client';

import { useState } from 'react';
import ContentCard from '@/components/atoms/CardContent';
import projectsData from '@/database/mocks/projects';

export default function ProjectsPage() {
  const [projects] = useState(projectsData);
 
  return (
  <main className="py-16 bg-gray-100 min-h-screen">
    <div className="max-w-7xl mx-auto px-4">
      {projects.length > 0 && projects.map((project, index) => (
        <div key={index}>
          <h1 className="text-3xl font-semibold text-green-600 mt-8">{project.title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {projects.length > 0 ? projects.map((project) => (
              project.id === project.id && (
                <ContentCard key={project.id} content={project} />
              )
            )) : (
              <span className="text-gray-600">No projects found</span>
            )}
          </div>
        </div>
      ))}
    </div>
  </main>
  );
}
