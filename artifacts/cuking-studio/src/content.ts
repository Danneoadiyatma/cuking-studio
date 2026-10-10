export const studio = {
  name: 'CUKING STUDIO',
  founder: 'Dan Neo Adiyatma',
  alias: 'nyototod',
  role: 'Founder & Game Developer',
  email: 'neoadiyatma@gmail.com',
  tagline: 'Every Pixel Has a Story.',
  bio: 'An independent game developer interested in story-driven experiences, creative worldbuilding, and bringing imaginative ideas to life through games.',
  about: [
    'CUKING STUDIO is an independent game studio built around a simple idea: games can be more than something you play. They can be worlds you remember, characters you care about, and stories that stay with you.',
    'We love experimenting with ideas, exploring different art styles, and creating experiences that make players curious about what comes next.',
    "One little idea at a time, we're building worlds of our own.",
  ],
};

export const games: Array<{
  title: string;
  artwork: string;
  description: string;
  genre: string;
  status: string;
  href?: string;
}> = [];

export const devlog: Array<{
  title: string;
  date: string;
  thumbnail: string;
  excerpt: string;
  href?: string;
}> = [];

export const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/nyuudesigns/' },
  { label: 'Behance', href: 'https://www.behance.net/' },
];
