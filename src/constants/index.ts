import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  recipe,
  githubProject,
  nextResume,
  threejs,
  github,
  blog,
  notion
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
];

const services = [
  {
    title: 'Web Developer',
    icon: web
  },
  {
    title: 'React Developer',
    icon: mobile
  },
  {
    title: 'React Native Developer',
    icon: backend
  },
  {
    title: 'Backend Developer',
    icon: creator
  }
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Redux Toolkit',
    icon: redux
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'Three JS',
    icon: threejs
  },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'figma',
    icon: figma
  },
  {
    name: 'docker',
    icon: docker
  }
];

const experiences = [
  {
    title: 'Aduck',
    company_name: 'Marketer',
    iconBg: '#383E56',
    date: '2019. 04 - 2021. 05',
    points: [
      '마케팅에 대해 잘 몰랐었기에 매일 2시간씩 일찍 출근하고 늦게 퇴근하면서 공부하였고, 마케팅 자격증도 따는 등의 노력을 기울여 빠른 기간 내에 팀장을 맡을 수 있었고, 인사담당 보조 및 후배분들의 교육 가이드 역할을 했습니다.',
      '버스, 전광판, 마트 등의 광고 개첨을 위한 광고 디자인 및 디자인 시안 검사를 했습니다. ',
      '대부분 의료광고를 하기 때문에 심의를 진행하며, 이를 위해서 각 병원의 마케팅 팀장 혹은 원장들과의 커뮤니케이션을 했습니다.'
    ]
  },
  {
    title: 'Moriented',
    company_name: 'Frontend Developer',
    iconBg: '#0F182B',
    date: '2021. 06  - 2021. 12',
    points: [
      'React.js, Javascript, styled-components, Redux-toolkit',
      '기획서 만들기, 로직 플로우 짜기 등에 참여하고 기획서를 토대로 react-apexcharts, chart.js, react-chartjs-2를 활용하여 테이블, 차트 등을 그린 대시보드를 만들어서 AE 마케터분들이 수집한 데이터를 시각화 하는 역할을 하고 있습니다.',
      'Javascript를 이용한 GTM Tagging을 하고 있습니다.',
      '클라이언트 회사의 요청에 따른 홈페이지 작업'
    ]
  },
  {
    title: 'Powertask',
    company_name: 'Frontend Developer',
    iconBg: '#383E56',
    date: '2021. 11  - Current',
    points: [
      'React.js, TypeScript, Redux-toolkit Query, MUI',
      '자동화 웹앱 Powertask의 Quick Action 작업',
      '팀원과의 회의를 통한 재사용성에 대한 고민, 아토믹 디자인 패턴 적용, 성능 개선 등의 대한 작업',
      'Confluence에 올라온 bug hot-fix 작업'
    ]
  }
];

const testimonials = [
  {
    name: 'Blog',
    image: blog,
    url: 'https://patrick-f.tistory.com/'
  },
  {
    name: 'Github',
    image: github,
    url: 'https://github.com/crayonzgrim'
  },
  {
    name: 'Notion',
    image: notion,
    url: 'https://lush-viscount-141.notion.site/6162e1ad99964e448c86f03085e3b5c0'
  }
];

const projects = [
  {
    name: 'Food Recipe Project',
    description:
      '비건인 미국인 여자친구를 위해 영문으로 된 음식을 포함한 다양한 음식에 대한 조리법을 담은 웹 제작',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient'
      },
      {
        name: 'tailwindcss',
        color: 'green-text-gradient'
      },
      {
        name: 'typescript',
        color: 'pink-text-gradient'
      }
    ],
    image: recipe,
    website_link: 'https://recipe-instruction-ingredient.vercel.app/',
    source_code_link:
      'https://github.com/crayonzgrim/recipe-instruction-ingredient'
  },
  {
    name: 'Github API Project',
    description:
      '깃헙 API, Local storage를 활용하여 Public 유저들의 이슈를 볼 수 있는 웹 제작',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient'
      },
      {
        name: 'Material UI',
        color: 'green-text-gradient'
      },
      {
        name: 'typescript',
        color: 'pink-text-gradient'
      }
    ],
    image: githubProject,
    website_link: 'https://github-search-issues.vercel.app/',
    source_code_link: 'https://github.com/crayonzgrim/github-issue-project'
  },
  {
    name: 'Nextjs Resume Project',
    description: '지인을 위해 Next.js와 tailwindcss를 활용한 웹 이력서 제작',
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient'
      },
      {
        name: 'tailwindcss',
        color: 'green-text-gradient'
      },
      {
        name: 'typescript',
        color: 'pink-text-gradient'
      }
    ],
    image: nextResume,
    website_link: '',
    source_code_link: 'https://github.com/crayonzgrim/anime-resume'
  }
];

export { services, technologies, experiences, testimonials, projects };
