const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'KN.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Kirill Nagaitsev',
  role: 'Ph.D. Student at ',
  description: "I'm a Ph.D. student and DOE CSGF fellow, advised by Peter Dinda at Northwestern University. My research interests mainly lie in operating system and compiler support for parallel computing. In my free time, I enjoy running and multiplayer game development.",
  resume: '#projects',
  social: {
    linkedin: 'https://www.linkedin.com/in/kirn/',
    github: 'https://github.com/knagaitsev',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Interrupt Polling',
    description:
      'Interrupts are a source of nondeterminism on modern architectures. This project aims to replace all hardware interrupts in a kernel with compiler-based interrupt polling at frequent intervals, removing all nondeterminism and reducing interrupt overhead.',
    stack: ['Operating Systems', 'Compilers', 'Parallelism'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Village',
    description:
      'This project aims to map high-level parallel code to custom hardware accelerators that can exploit the parallelism. A high-level parallel language compiles to an intermediary language that exposes the parallelism, then we map this to hardware via LLVM.',
    stack: ['Compilers', 'Parallelism', 'Heterogeneous Hardware'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  // {
  //   name: 'Project 3',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
]

const publications = [
  {
    name: 'funcX: Federated Function as a Service for Science',
    authors: ['Zhuozhao Li', 'Ryan Chard', 'Yadu Babuji', 'Ben Galewsky', 'Tyler Skluzacek', 'Kirill Nagaitsev', 'Anna Woodard', 'Ben Blaiszik', 'Josh Bryan', 'Daniel S. Katz', 'Ian Foster', 'Kyle Chard'],
    sourceCode: 'https://github.com/funcx-faas/funcX',
    livePreview: 'https://arxiv.org/abs/2209.11631',
    isPublication: true,
  }
]

const education = [
  {
    name: 'Northwestern University',
    description: 'Ph.D. in Computer Science',
    years: '2022 - Present',
    isPublication: true,
    isEducation: true,
  },
  {
    name: 'University of Chicago',
    description: 'B.A. in Computer Science (magna cum laude)',
    years: '2018 - 2022',
    isPublication: true,
    isEducation: true,
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'knagaitsev@u.northwestern.edu',
}

export { header, about, projects, skills, contact, publications, education }
