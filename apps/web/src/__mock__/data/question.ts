import { QuestionType } from '../types/question'

export const mockQuestionList: QuestionType[] = [
  {
    title: 'How to center a div using CSS?',
    content: 'I want to center a div both vertically and horizontally. What is the best approach?',
    createdDate: '2024-11-01',
    tag: 'CSS',
    isAnswered: true,
    answers: [
      {
        user: 'JohnDoe',
        profileImage: '/avif/placeholder.avif',
        answerContent:
          'You can use Flexbox with `justify-content` and `align-items` set to center.',
        answerDate: '2024-11-02'
      },
      {
        user: 'JaneSmith',
        profileImage: '/avif/placeholder.avif',
        answerContent:
          'Another way is to use `position: absolute` with `transform: translate(-50%, -50%)`.',
        answerDate: '2024-11-03'
      }
    ]
  },
  {
    title: 'What is the difference between let and var in JavaScript?',
    content: 'I am confused about when to use let instead of var. Can someone explain?',
    createdDate: '2024-11-05',
    tag: 'JavaScript',
    isAnswered: true,
    answers: [
      {
        user: 'CodeGuru',
        profileImage: '/avif/placeholder.avif',
        answerContent:
          '`let` has block scope while `var` has function scope. Use `let` in modern code.',
        answerDate: '2024-11-06'
      }
    ]
  },
  {
    title: 'How to fetch data from an API in React?',
    content: 'What is the recommended way to fetch API data in React components?',
    createdDate: '2024-11-08',
    tag: 'React',
    isAnswered: false,
    answers: []
  },
  {
    title: 'How to set up ESLint in a React project?',
    content: 'I want to add ESLint to my React project for consistent coding styles. Any tips?',
    createdDate: '2024-11-10',
    tag: 'Tooling',
    isAnswered: true,
    answers: [
      {
        user: 'DevPro',
        profileImage: '/avif/placeholder.avif',
        answerContent:
          'Install ESLint using `npm install eslint`. Then configure it with `npx eslint --init`.',
        answerDate: '2024-11-11'
      }
    ]
  },
  {
    title: 'How to deploy a Node.js app?',
    content: 'Can someone guide me on deploying a Node.js application to a cloud server?',
    createdDate: '2024-11-12',
    tag: 'Node.js',
    isAnswered: false,
    answers: []
  },
  {
    title: 'What is Redux used for?',
    content: 'I have heard about Redux in React projects. What problems does it solve?',
    createdDate: '2024-11-14',
    tag: 'Redux',
    isAnswered: true,
    answers: [
      {
        user: 'StateMaster',
        profileImage: '/avif/placeholder.avif',
        answerContent:
          'Redux is used for state management, especially in large applications where props drilling becomes complex.',
        answerDate: '2024-11-15'
      }
    ]
  },
  {
    title: 'How to handle authentication in Next.js?',
    content: 'I want to implement authentication in my Next.js app. What is the best practice?',
    createdDate: '2024-11-16',
    tag: 'Next.js',
    isAnswered: true,
    answers: [
      {
        user: 'AuthExpert',
        profileImage: '/avif/placeholder.avif',
        answerContent: 'Use NextAuth.js for easy integration with OAuth providers.',
        answerDate: '2024-11-17'
      }
    ]
  },
  {
    title: 'What is the difference between GraphQL and REST?',
    content: 'When should I use GraphQL instead of REST APIs?',
    createdDate: '2024-11-18',
    tag: 'GraphQL',
    isAnswered: true,
    answers: [
      {
        user: 'APIWizard',
        profileImage: '/avif/placeholder.avif',
        answerContent:
          'GraphQL allows more flexibility by letting clients request specific data, unlike REST, which returns fixed structures.',
        answerDate: '2024-11-19'
      }
    ]
  },
  {
    title: 'How to improve Webpack build speed?',
    content: 'My Webpack builds are taking too long. Any suggestions to speed them up?',
    createdDate: '2024-11-20',
    tag: 'Webpack',
    isAnswered: true,
    answers: [
      {
        user: 'FastBuilder',
        profileImage: '/avif/placeholder.avif',
        answerContent: 'Use caching, thread-loader, and split your chunks to optimize builds.',
        answerDate: '2024-11-21'
      }
    ]
  },
  {
    title: 'How to optimize React performance?',
    content: 'My React app is slow. What are some common performance optimization techniques?',
    createdDate: '2024-11-22',
    tag: 'React',
    isAnswered: true,
    answers: [
      {
        user: 'ReactWizard',
        profileImage: '/avif/placeholder.avif',
        answerContent: 'Use React.memo, lazy loading, and avoid unnecessary re-renders.',
        answerDate: '2024-11-23'
      }
    ]
  }
]
