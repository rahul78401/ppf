/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Saurav Patel",
  title: "Hi all, I'm Saurav",
  subTitle: emoji(
    "A passionate Full stack Software Developer 🚀 having an experience of building Web development with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1LOpidegHHxLUhMxffq3hMeqmfkptAJF-/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Hari3092001",
  linkedin: "https://github.com/Hari3092001",
  gmail: "sauravpatel3092001@gmail.com",
  instagram: "https://www.instagram.com/saurav.patel.890/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "FULL-STACK WEB DEVELOPER EXPLORING MODERN TECH STACKS",
  skills: [
    emoji(
      "⚡ Developing highly interactive and scalable web using React and modern frontend frameworks"
    ),
    emoji("⚡ Building efficient, high-performance backend systems with Node.js and NestJS/express"),
    emoji(
      "⚡ Seamless integration of third-party services and cloud platforms like Firebase, AWS"
    ),
    emoji("⚡ Creating Progressive Web Applications (PWAs) for improve user experience"),
    emoji("⚡ Optimizing application performance and ensuring best development practices"),
    emoji("⚡ I've worked on large-scale projects, gaining experience to build efficient solutions."),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Concordia University",
      logo: require("./assets/images/csp5Logo.jpg"),
      subHeader: "Master's Degree",
      duration: "Ongoing...",
      desc: "Participated in research on advanced computing and published 3 papers.",
      descBullets: [
        "Conducted research on distributed systems and cloud computing",
        "Explored AI-driven optimization techniques for large-scale applications"
      ]
    },
    {
      schoolName: "Apollo Institute of Engineering and Technology",
      logo: require("./assets/images/apolloLogo.jpg"),
      subHeader: "Bachelor's Degree",
      duration: "GPA: 7.61 out of 10",
      desc: "Major: Information Technology",
      descBullets: [
        "Developed projects focusing on full-stack web development",
        "Gained expertise in data structures, algorithms, and system design"
      ]
    }
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Reactjs/Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Nodejs/Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "Research",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Thingslinker",
      companylogo: require("./assets/images/thinhslinkerLogo.jpg"),
      date: "June 2022 – Jan 2023",
      desc: "software backend engineer.",
      descBullets: [
        "Working as backend developer using Node.js and NestJS",
        "collabcollaboration with international team members to develop a scalable and efficient system"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Stream Space AI",
      companylogo: require("./assets/images/ssLogo.jpg"),
      date: "Jan 2022 – June 2022",
      desc: "Intern as a software engineer.",
      descBullets: [
        "Worked as a front-end developer intern, gaining hands-on experience in modern web technologies.",
        "Developed dynamic and responsive user interfaces using React.js",
        "Integrated APIs and optimized performance for seamless user experience",
      ]
    },
    {
      role: "Software Developer",
      company: "Tender247",
      companylogo: require("./assets/images/tender.png"),
      date: "sept 2021 – Jan 2022",
      desc: "Intern",
      descBullets: [
        "This was my first job as a software engineer intern.",
        "Worked on real-world projects to enhance development skills",
        "Assisted in building and optimizing web applications",
        "Gained experience in full-stack development with modern technologies",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/tenderLogo.png"),
      projectName: "Tender247",
      projectDesc: "Contributed as a backend developer, working on key modules such as user management and the admin panel. Developed and optimized APIs using Node.js and NestJS to ensure efficient system performance",
      footerLink: [
        {
          name: "Explore",
          url: "https://www.tender247.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/credlock.jpg"),
      projectName: "Cred Lock",
      projectDesc: "I have standalone create this project admin backend For device .",
      footerLink: [
        {
          name: "Explore",
          url: "https://credlockng.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Coading compitetion ",
      subtitle:
        "Finalist in an inter-college coding competition, competing against top programmers and showcasing problem-solving skills.",
      image: require("./assets/images/codecomp.png"),
      imageAlt: "img",
      footerLink: []
    },
    {
      title: "Hackathon",
      subtitle:
        "Participated as a finalist in an inter-college hackathon, developing innovative solutions under tight deadlines and collaborating with a team to build a functional prototype.",
      image: require("./assets/images/hackthon.png"),
      imageAlt: "Hackathon Logo",
      footerLink: []
    },

    {
      title: "PWA Web Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Get in Touch ☎️"),
  subtitle: "Have a project in mind or just want to connect? Feel free to reach out—I'm always open to discussions!",
  number: "+1 (608) 724-2268",
  email_address: "sauravpatel3092001@gmail.com"
};


// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
