/**
 * Coursework, grouped by area. Course names only — no grades, marks,
 * credit hours or percentages anywhere in this file.
 *
 * `application` is only set where there is a concrete project to point at.
 */

export type CourseGroup = {
  area: string;
  courses: string[];
  application?: string;
};

export const courseGroups: CourseGroup[] = [
  {
    area: 'Databases',
    courses: ['Database Systems'],
    application:
      'Query optimisation on Golfpay; backend work and data modelling on Serva and Restaurant Resource.',
  },
  {
    area: 'Algorithms',
    courses: ['Data Structures and Algorithms', 'Design and Analysis of Algorithms'],
  },
  {
    area: 'Statistics',
    courses: ['Applied Probability and Statistics'],
  },
  {
    area: 'Mathematics',
    courses: [
      'Linear Algebra',
      'Calculus',
      'Multivariate Calculus',
      'Discrete Mathematics',
      'Differential Equations',
    ],
  },
  {
    area: 'Graph Theory',
    courses: ['Graph Theory'],
  },
  {
    area: 'AI and machine learning',
    courses: ['Machine Learning', 'Artificial Intelligence', 'Computer Vision and Image Processing'],
    application:
      'The final-year project used LLMs and transformer models for its main detection task.',
  },
  {
    area: 'Systems',
    courses: ['Parallel and Distributed Computing'],
  },
  {
    area: 'Final-year project',
    courses: ['Final Year Project I', 'Final Year Project II'],
    application:
      'Team lead of four students; the project wrapped the models in a working system.',
  },
];

export const developmentAreas: string[] = [
  'Machine learning practice: model training and evaluation beyond coursework and the final-year project.',
  'Data warehousing and large-scale analytical modelling.',
  'Statistics and probability at the depth research work requires.',
];
