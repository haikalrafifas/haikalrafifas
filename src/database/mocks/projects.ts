interface Project {
  id: number;
  slug: string;
  title: string;
  image: string | null;
  snippet: string | null;
  released_at: Date | null;
}

const mockProjects: Project[] = [
  {
    id: 1,
    slug: 'united-tractors-hackathon-2024',
    title: 'United Tractors Hackathon 2024',
    // image: '/images/projects/united-tractors-hackathon-2024.png',
    image: '/images/placeholder.png',
    snippet: 'Achieved 3rd place at United Tractors Hackathon 2024.',
    released_at: new Date('2024-12-01'),
  },
  {
    id: 2,
    slug: 'microsoft-elevait-2025',
    title: 'Microsoft ElevAIte 2025',
    // image: '/images/projects/microsoft-elevait-2025.png',
    image: '/images/placeholder.png',
    snippet: 'Achieved semifinals at Microsoft ElevAIte 2025.',
    released_at: new Date('2025-06-15'),
  },
  {
    id: 3,
    slug: 'meruyung-fish-farm',
    title: 'Meruyung Fish Farm',
    // image: '/images/projects/meruyung-fish-farm.png',
    image: '/images/placeholder.png',
    snippet: 'Created an automated fish feeding system for Meruyung Fish Farm.',
    released_at: new Date('2025-01-20'),
  },
];

export default mockProjects;
