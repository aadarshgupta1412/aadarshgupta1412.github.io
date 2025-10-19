export type Publication = {
  type: 'patent' | 'conference' | 'journal';
  title: string;
  authors: string[];
  venue: string;
  year: number;
  links?: {
    paper?: string;
    pdf?: string;
    code?: string;
    slides?: string;
  };
};

export const publicationsData: Publication[] = [
  {
    type: 'patent',
    title: 'Surgical Robotic System with Laparoscopic System',
    authors: ['K V S Manoj Kumar Vadali', 'Sai Gautham Ravipati', 'Aadarsh Gupta'],
    venue: 'US Patent Application | Medtronic Inc.',
    year: 2023,
  },
  {
    type: 'conference',
    title: 'Text based diagnosis of COVID-19 using Data mining techniques: A comparative study',
    authors: ['Aadarsh Gupta*', 'Aastha Valecha*', 'Sapna Mishra', 'Tapan Gandhi'],
    venue: 'IEEE 19th India Council International Conference (INDICON)',
    year: 2022,
    links: {
      paper: 'https://ieeexplore.ieee.org/document/10040129/',
    },
  },
];
