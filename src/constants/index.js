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

  studynotion,
  busbooking,
  cafe2,
  carrent,
  jobit,
  dev,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "profiles",
    title: "Profiles",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Competitive Programmer",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "Study-Notion",
    description:
      "StudyNotion is a fully functional ed-tech learning platform that enables users to create, consume, and rate educational content. Users can sign up and log in to the platform using their email addresses and password. The platform also supports OTP verification and forgot password functionality.. It uses Cloudinary, a cloud-based media management service, to store and manage all media content" ,
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "orange-text-gradient",
      },
    ],
    image: studynotion,
    source_code_link: "https://github.com/abhikant12/Study-Notion.git",
  },

  {
    name: "Virtual-Study-Room",
    description:
      "A fully functional ed-tech platform enabling remote collaboration for students. Features include video/voice calls, collaborative whiteboards, screen sharing, and real-time chatting." ,
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.IO",
        color: "blue-text-gradient",
      },
      {
        name: "WebRTC",
        color: "orange-text-gradient",
      },
    ],
    image: p1,
    source_code_link: "https://github.com/abhikant12/Virtual-Study-Room.git",
  },


  {
    name: "Bus Booking System",
    description:
      "It is a fully functional bus reservation system developed using Tkinter (GUI), SQLite, and Python, This reservation system has three modules. First module helps the customer to enquire the availability of seats in a particular bus at particular date. Second module helps him to reserve a ticket. Using third module he can cancel a reserved ticket. It manages all the information about Bus, Customers, Seats. The Project is totally built at administrator end",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tkinter (GUI)",
        color: "green-text-gradient",
      },
      {
        name: "SQLite",
        color: "pink-text-gradient",
      },
    ],
    image: busbooking,
    source_code_link: "https://github.com/abhikant12/Bus-booking-.git",
  },

  {
    name: "Cafe Management System",
    description:
      "An user interactive Website based on MERN stack. Functionality to add, edit and delete food item, customize and place order, update status of order. and Added interactive dashboard for both buyer and seller, statistics page for seller to analyze the sale",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "orange-text-gradient",
        },
      ],
    image: cafe2,
    source_code_link: "https://github.com/abhikant12",
  },

  {
    name: "Shopping Cart",
    description:
      "Shopping Cart Front-end design using React/Redux.It is website contain multiple items on its Home page and we can add them into the our cart.In cart we can see our selected items and also total items with total amount. It is fully responsive and Designing is done using Tailwind CSS",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/abhikant12/Web-D/tree/main/React/project/Shopping%20cart%20app",
  },

  {
    name: "Dev Detective",
    description:
      "Dev Detective is a website in which we can find the information about the developer by searching the username of the developer on the GitHub.When we search for the username it gives shows the GitHub profile information.It also have the feature of changing into dark mode and light mode.",
    tags: [
      {
        name: "HTLM",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: dev,
    source_code_link: "https://github.com/abhikant12/Web-D/tree/main/Javascript/project/mini%20-%20project/github%20profile%20viewer%20web",
  },

];

export { services, technologies, projects };
