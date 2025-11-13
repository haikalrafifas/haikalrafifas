interface Client {
  id: number;
  slug: string;
  name: string;
  image: string;
}

const mockClients: Client[] = [
  {
    id: 1,
    slug: 'upnvj',
    name: 'UPNVJ',
    image: '/images/clients/upnvj.png',
  },
  {
    id: 2,
    slug: 'innosphere',
    name: 'InnoSphere',
    image: '/images/clients/innosphere.png',
  },
  {
    id: 3,
    slug: 'cnplus',
    name: 'CNPLUS',
    image: '/images/clients/cnplus.png',
  },
  {
    id: 4,
    slug: 'mekatronika-upnvj',
    name: 'Mekatronika UPNVJ',
    image: '/images/clients/mekatronika-upnvj.png',
  },
  {
    id: 5,
    slug: 'baseengineering-indonesia',
    name: 'BaseEngineering Indonesia',
    image: '/images/clients/baseengineering-indonesia.png',
  },
  {
    id: 6,
    slug: 'yasporbi',
    name: 'Yasporbi',
    image: '/images/clients/yasporbi.png',
  },
  {
    id: 7,
    slug: 'ufoveteran',
    name: 'UFO Veteran',
    image: '/images/clients/ufoveteran.png',
  },
  {
    id: 8,
    slug: 'cybersecurity-upnvj',
    name: 'Cybersecurity UPNVJ',
    image: '/images/clients/cybersecurity-upnvj.png',
  },
  {
    id: 9,
    slug: 'kemdikbud',
    name: 'Kemdikbud',
    image: '/images/clients/kemdikbud.png',
  },
  {
    id: 10,
    slug: 'candidate-college',
    name: 'Candidate College',
    image: '/images/clients/candidate-college.png',
  },
];

export default mockClients;
