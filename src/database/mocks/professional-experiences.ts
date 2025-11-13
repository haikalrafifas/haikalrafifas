interface ProfessionalExperience {
  id: number;
  slug: string;
  title: string;
  company: string;
  type: string;
  location: string;
  image: string;
  start_date?: string;
  end_date?: string;
}

const mockProfessionalExperiences: ProfessionalExperience[] = [
  {
    id: 1,
    slug: 'upa-tik-upnvj-backend-developer-intern',
    title: 'Backend Developer Intern',
    company: 'UPA TIK UPNVJ',
    type: 'Internship',
    location: 'Hybrid',
    image: '/images/placeholder.png',
    start_date: '2025-01-01',
  },
  {
    id: 2,
    slug: 'cnplus-full-stack-developer',
    title: 'Full Stack Developer',
    company: 'CNPLUS',
    type: 'Part-time',
    location: 'Hybrid',
    image: '/images/placeholder.png',
    start_date: '2023-02-01',
    end_date: '2023-11-30',
  },
  {
    id: 3,
    slug: 'timcorp-academy-cloud-data-analytics-intern',
    title: 'Cloud Data Analytics Intern',
    company: 'TIMCorp Academy',
    type: 'Internship',
    location: 'Remote',
    image: '/images/placeholder.png',
    start_date: '2023-03-01',
    end_date: '2023-12-31',
  }
];

export default mockProfessionalExperiences;
