/**
 * Experience, education and activities. Verified facts only.
 */

export type Role = {
  title: string;
  dates: string;
  org: string;
  body: string;
};

export const experience: Role[] = [
  {
    title: 'Team Lead',
    dates: 'June 2026 – present',
    org: "A'sTechware · Lahore, Pakistan · full-time, on-site",
    body: 'Held alongside the Software Engineer role. Leads the work on Serva and Restaurant Resource.',
  },
  {
    title: 'Software Engineer',
    dates: 'September 2025 – present',
    org: "A'sTechware · Lahore, Pakistan · full-time, on-site",
    body: 'Main backend lead on Serva and Restaurant Resource, including code reviews and optimisation.',
  },
  {
    title: 'Associate Software Engineer',
    dates: 'July 2024 – September 2025',
    org: "A'sTechware · Lahore, Pakistan · full-time, on-site",
    body: 'Worked on Golfpay: bug fixing and query optimisation.',
  },
];

export type Activity = {
  name: string;
  role: string;
  body?: string;
};

export const activities: Activity[] = [
  {
    name: 'Codator (UET society)',
    role: 'Content Writer and Finance Manager',
    body: 'Hosted events and technical webinars and seminars.',
  },
  {
    name: 'UET Narowal Newsline',
    role: 'Assistant Coordinator',
  },
  {
    name: 'IET On Campus UET Lahore',
    role: 'Chair, Computer Science Chapter',
  },
];

export const finalYearProject =
  'Team lead of four students. The project used LLMs and transformer models for the main detection task, then built a system around them to make it a working product.';
