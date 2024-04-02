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
    tailwind,
    mysql,
    nodejs,
    mongodb,
    git,
    c,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    gitHubProject,
    shopify,
    carrent,
    euroVista,
    jobit,
    zoomia,
    tripguide,
    threejs,
    netflixProject,
    MoviesApp,
    StripeApp,
    cartApp,
    cApp
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Integrations Developer",
      icon: mobile,
    },
    {
      title: "Website Architecture",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React.js(Next,Redux)",
      icon: reactjs,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "JavaScript Integrations Developer",
      company_name: "Zoomia",
      icon: zoomia,
      iconBg: "#383E56",
      date: "Jun 2022 - May 2023",
      points: [
        "Developed interactive custom analytics system, where analytics would be collected in real time from data collected from different modules client uses on Zoomia platform(sales pipeline, accounting panel etc).Different analytics modules built on sales, invoicing, employee efficiency, platform client activity, accounting, add campaign efficiency, data analytics module based on a time period.",
        "Participated in the development of customized invoice generator for businesses, goods management systems, client data management system, WhatsApp integration to platform, task management system, data storing, business processes automation systems.",
        "JavaScript ES6, Vue.js, Fetch api, statistics, DOM, OOP, ApexChart, JSON & JQuery"
      ],
    },
    {
      title: "Commercial Project",
      company_name: "AMITTRADE sp zoo, Warsaw",
      iconBg: "#E6DEDD",
      date: "Nov 2020 - Jan 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Front End Web Developer Intern",
      company_name: "Smart Digital",
      iconBg: "#383E56",
      date: "Jul 2019 - Oct 2019",
      points: [
        "Developing and maintaining web applications",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Visotskiy Consulting company",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Coded websites using HTML, CSS, JavaScript and jQuery languages",
        "Collaborated with marketing department to determine organizational need and design pages to meet goals",
        "Conducted testing and review of website design for responsiveness, clarity and effectiveness"
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "EuroVista Website",
      description:
        "I spearheaded the development of a comprehensive website for a company specializing in facilitating individuals' relocation to the EU while offering extensive support in securing employment opportunities. The platform serves as a pivotal resource, guiding users through the intricacies of international relocation and job placement processes.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
      ],
      image: euroVista,
      source_code_link: "https://github.com/altynbeq/cocktails-app-react",
    },
    {
      name: "Cocktails App",
      description:
        "🍹 Cocktail Showcase: Vividly presented cocktails with recipes. 🔗 Dynamic Navigation: Effortless exploration using React Router. 🔄 Global State Management: Consistent user interface with useContext. 🌐 Asynchronous Data Fetching: Up-to-date content with Fetch API and useEffect. 🚀 Enhanced User Experience: Smooth interactions powered by useRef.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Rest API",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/altynbeq/cocktails-app-react",
    },
    {
      name: "Blog",
      description:
        "Web app for blogging, post viewing, and news discovery. Responsive design ensures a smooth experience on any device. Effortlessly craft and manage blog posts, explore content intuitively, and stay informed with real-time updates. Welcome to a seamless platform where creativity and user experience converge",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/altynbeq/code-work/tree/master/BlogProject",
    },
    {
      name: "AMITTRADE",
      description:
        "Industry Hub: Navigate effortlessly through our site dedicated to the food and machinery sector. 🍽️🔧 Discover cutting-edge factory machinery and top-tier food solutions. 🔗 Experience a responsive design for seamless browsing. 💼 Welcome to a platform where technology and culinary excellence converge!",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/altynbeq/code-work/tree/master/AMITTRADE",
    },
    {
      name: "GitHub",
      description:
        "GitHub Explorer: Uncover the world of coding talent with our GitHub user search project. 🔍 Instant User Insights: Swiftly retrieve detailed information about GitHub users. 🚀 Seamless Search: Effortlessly find and explore profiles with our user-friendly interface. 🌐 Dive into a platform where discovering the GitHub community is just a click away!",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Rest API",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: gitHubProject,
      source_code_link: "https://github.com/altynbeq/code-work/tree/master/littleProjects/GitHub%20App",
    },
    {
      name: "Netflix",
      description:
        "Netflix Hub: Experience my revamped Netflix-inspired website with a fresh, distinctive design. 🍿 Trendsetting Interface: Navigate seamlessly through a sleek and unique layout. 🎬 Curated Entertainment: Explore a handpicked collection of films and shows in style. 💻 Welcome to a reinvented Netflix experience — where design meets your favorite entertainment!",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "Rest API",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: netflixProject,
      source_code_link: "https://github.com/altynbeq/code-work/tree/master/Netflix-remake",
    },
    {
      name: "Movies App",
      description:
        "Film Buff Central: Your go-to destination for the latest and greatest in cinema! 🎬 Discover New Releases: Stay in the know with our regularly updated list of the newest movies. ⭐ Ratings Galore: Dive into film details, complete with ratings to guide your viewing choices. 🔍 Effortless Search: Find your favorites with ease using our intuitive search feature. 🌟 ",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "REST API",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: MoviesApp,
      source_code_link: "https://github.com/altynbeq/code-work/tree/master/MovieApp",
    },
    {
      name: "Stripe App",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Rest API",
          color: "pink-text-gradient",
        },
      ],
      image: StripeApp,
      source_code_link: "https://github.com/altynbeq/stripe-react",
    },
    {
      name: "Shopping cart",
      description:
        "💳 Stripe React Hub: Elevate your online experience with React.js. 🌐 Stylish Design: Tailwind's elegance meets modern aesthetics. 🚀 Real-time Integration: Dynamic content via Rest API and useEffect. Welcome to a streamlined Stripe experience!",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Rest API",
          color: "pink-text-gradient",
        },
      ],
      image: cartApp,
      source_code_link: "https://github.com/altynbeq/cart-app-react",
    },
    {
      name: "Int to text",
      description:
        "NumberWords Converter: Transform integers into expressive written form effortlessly with our C project. 🧮 Precision and Clarity: Crafted for accurate written representations in various applications. 🚀 Welcome to a realm where numbers come alive through linguistic artistry!",
      tags: [
        {
          name: "C",
          color: "blue-text-gradient",
        },
        {
          name: "Bash shell",
          color: "green-text-gradient",
        },
      ],
      image: cApp,
      source_code_link: "https://github.com/altynbeq/42",
    },
  ];
  
  export { services, technologies, experiences,  projects };