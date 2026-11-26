/**
 * Site-wide configuration.
 * Only verified facts. Anything unresolved belongs in TODO.md, not here.
 */
export const site = {
  name: 'Ahsan Tariq',
  role: 'Team Lead / Software Engineer',
  company: "A'sTechware",
  companyUrl: 'https://astechware.com',
  location: 'Lahore, Pakistan',
  url: 'https://ahsantariq.dev',
  email: 'hello@ahsantariq.dev',
  github: 'https://github.com/AhsanTariqGill',
  linkedin: 'https://www.linkedin.com/in/ahsan-tariq-a1783722b',
  cv: '/ahsan-tariq-cv.pdf',
  bio: 'Software engineer and team lead focused on backend and data systems.',
  description:
    "Portfolio of Ahsan Tariq, a software engineer and team lead at A'sTechware in Lahore, Pakistan, focused on backend and data systems.",
  education: {
    degree: 'B.Sc. Computer Science',
    institution: 'University of Engineering and Technology (UET) Lahore, Narowal Campus',
    shortInstitution: 'UET Lahore (Narowal Campus)',
    years: '2020 – 2024',
    cgpa: '3.734 / 4.00',
  },
  award: {
    text: 'University of Engineering and Technology Gold Medal, 31st Convocation, for Overall Best Performance in B.Sc. Computer Science Programme (Narowal Campus)',
    date: '14 April 2025',
  },
  ielts: 'IELTS overall 6.5',
} as const;
