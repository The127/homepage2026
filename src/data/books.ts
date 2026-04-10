export interface Book {
  title: string;
  author: string;
  category: string;
  bg: string;
  borderColor: string;
  textColor: string;
}

export const books: Book[] = [
  {
    title: 'A Philosophy of Software Design',
    author: 'Ousterhout',
    category: 'Design',
    bg: '#0e1420',
    borderColor: '#4a90d9',
    textColor: '#7ab8f0',
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    category: 'Craft',
    bg: '#0e1e10',
    borderColor: '#3a8c50',
    textColor: '#64c87a',
  },
  {
    title: 'The Unicorn Project',
    author: 'Gene Kim',
    category: 'Culture',
    bg: '#201008',
    borderColor: '#c06020',
    textColor: '#ff9a4a',
  },
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Kleppmann',
    category: 'Systems',
    bg: '#08101e',
    borderColor: '#2060b0',
    textColor: '#60a8ff',
  },
  {
    title: 'Domain-Driven Design',
    author: 'Eric Evans',
    category: 'Arch',
    bg: '#1a0c14',
    borderColor: '#902848',
    textColor: '#d45888',
  },
  {
    title: 'Staff Engineer',
    author: 'Will Larson',
    category: 'Leadership',
    bg: '#181420',
    borderColor: '#7040b8',
    textColor: '#b080f0',
  },
  {
    title: 'An Elegant Puzzle',
    author: 'Will Larson',
    category: 'Management',
    bg: '#1e1408',
    borderColor: '#b07820',
    textColor: '#d4a840',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Hunt & Thomas',
    category: 'Craft',
    bg: '#141414',
    borderColor: '#484848',
    textColor: '#b8b8b8',
  },
  {
    title: 'The Phoenix Project',
    author: 'Gene Kim',
    category: 'Culture',
    bg: '#08180e',
    borderColor: '#207040',
    textColor: '#40c880',
  },
];
