interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'dclutr (under development)',
    description: `A personalized knowledge curation system that gathers information from various sources—news,
     blogs, articles, and more—and delivers objective, tailored summaries. The goal is to present only the essential
      facts, avoiding biased narratives and allowing users to form their own informed opinions.`,
    imgSrc: '/static/images/dclutr.png',
    href: 'https://ay-bh.github.io/blog/dclutr',
  },
  {
    title: 'Thoughts',
    description: `A platform for alumni to share wisdom, featuring over 1000 users. Built with Next.js, MongoDB, TailwindCSS, and NextAuth, it includes profile management, secure authentication, and a clean design.`,
    imgSrc: '/static/images/thoughts.png',
    href: 'https://psenti.vercel.app/',
  },
  {
    title: 'Infrastructure Drift in Federated Learning',
    description: `A research study analyzing infrastructure drift in Federated Learning (FL) systems, focusing on factors like node failures, compute heterogeneity, and network variability. Experimental results highlight strategies for mitigating drift and improving model robustness. This work has been accepted to HiPC 2024 Student Research Symposium (SRS).`,
    imgSrc: '/static/images/fl-setup.png',
    href: 'https://drive.google.com/file/d/1c9GoUD_Dn1SAfy3ws3WNotVN7s_YQww0/view?usp=sharing',
  },
  {
    title: 'FileShare',
    description: `An app for easy file sharing using Cloudinary for storage and multer for uploads. Built with Next.js, Typescript, Mantine UI, Express, and MongoDB.`,
    imgSrc: '/static/images/fileshare.png',
    href: 'https://file-share-frontend-liart.vercel.app/',
  },
  {
    title: 'Recommendation System',
    description: `A content-based recommendation system that uses Tf-idf Vectorizer to transform movie descriptions into feature vectors. Results are ranked based on Cosine similarity.`,
    imgSrc: '/static/images/recommendation-system.png',
    href: 'https://github.com/ay-bh/recommendation-system',
  },
  {
    title: 'Text Sentiment Analysis',
    description: `Tools using RoBERTa and VADER models to analyze sentiments in reviews, comments, and messages. Uses NLP techniques to preprocess and analyze data for sentiment insights.`,
    imgSrc: '/static/images/sentiment-analysis.png',
    href: 'https://colab.research.google.com/drive/1oTbQLdcLddUQnFQnnLts-kHkIjxHxidB?usp=sharing',
  },
  {
    title: 'NewsApp',
    description: `An app to fetch current news via API. It uses React-Router to organize data by category and includes infinite scrolling for a better user experience.`,
    imgSrc: '/static/images/news-app.jpg',
    href: 'https://github.com/ay-bh/breakingtimes',
  },
  {
    title: 'Dumb LoadBalancer',
    description: `A load balancer built in Golang to distribute traffic across backend servers. It uses a round-robin algorithm for efficient request handling and optimal performance.`,
    imgSrc: '/static/images/load-balancer.png',
    href: 'https://github.com/ay-bh/go-dumbLB',
  },
];

export default projectsData
