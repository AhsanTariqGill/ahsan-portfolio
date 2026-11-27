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
  'An image forgery detection and localisation tool, built by a team of four with me as team lead. It detects and localises copy-move, copy-paste and deepfake manipulations. A Flask API serves the models to a React front end that displays the results. The detection models use the Xception architecture for feature extraction. I trained and evaluated the models in Google Colab on the CASIA v1 and CASIA v2 datasets.';
