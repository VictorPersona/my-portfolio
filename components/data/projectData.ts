export type Project = {
  title: string
  description: string
  stack: string[]
  github: string
  live: string
}

export const projects: Project[] = [
  {
    title: 'E-Commerce Website',
    description:
      'Built a full-stack e-commerce platform with product catalog, cart, order placement, and admin management using the MERN stack. Integrated Stripe and Razorpay payment gateways implemented JWT-based authentication and secure REST APIs for userand order management.',
    stack: ['React', ' Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/VictorPersona/E-Commerce',
    live: 'https://your-portfolio.vercel.app',
  },
  {
    title: 'Personal Journal App',
    description:
      'Developed a simple journal application with CRUD features and MongoDB-based storage for personal notes.  Implemented user authentication, session persistence, and a clean React frontend with form handling',
    stack: ['React', ' Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/VictorPersona/personal-journal-app',
    live: 'https://your-portfolio.vercel.app',
  },
  {
    title: 'Weather App ',
    description:
      ' Created a responsive weather dashboard that fetches real-time weather data using the OpenWeatherMap API. Built with React hooks and functional components, featuring temperature, humidity, and city-based search',
    stack: ['React', 'OpenWeatherMap API'],
    github: 'https://github.com/VictorPersona/weather-app',
    live: 'https://your-portfolio.vercel.app',
  },
]
