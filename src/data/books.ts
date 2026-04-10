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
    title: 'Domain-Driven Design',
    author: 'Eric Evans',
    category: 'Arch',
    bg: '#1a0c14',
    borderColor: '#902848',
    textColor: '#d45888',
  },
  {
    title: 'The Phoenix Project',
    author: 'Gene Kim',
    category: 'Culture',
    bg: '#08180e',
    borderColor: '#207040',
    textColor: '#40c880',
  },
  {
    title: 'Modern Software Engineering',
    author: 'David Farley',
    category: 'Craft',
    bg: '#0a0e1a',
    borderColor: '#3860c0',
    textColor: '#6090f0',
  },
  {
    title: 'Escaping the Build Trap',
    author: 'Melissa Perri',
    category: 'Product',
    bg: '#1a0e08',
    borderColor: '#c04830',
    textColor: '#f07050',
  },
  {
    title: 'SW Architecture: The Hard Parts',
    author: 'Ford et al.',
    category: 'Arch',
    bg: '#0e0a1a',
    borderColor: '#6030a0',
    textColor: '#a060e0',
  },
];
