/* Change this file to get your personal portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000,
};

// Summary And Greeting Section
const illustration = {
  animated: true,
};

const greeting = {
  username: "Yash Khare",
  title: "Hey, I'm Yash",
  subTitle: emoji(
    "A Data Engineer & ML Practitioner building scalable data pipelines, intelligent ML systems, and cloud-native solutions. Currently finishing my Master's at Northeastern and actively seeking full-time opportunities in Data Engineering and ML/AI roles."
  ),
  resumeLink:
    "https://drive.google.com/file/d/YOUR_RESUME_LINK/view?usp=sharing",
  displayGreeting: true,
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/YashKhare20",
  linkedin: "https://www.linkedin.com/in/yash-khare20",
  gmail: "khare.y@northeastern.edu",
  display: true,
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle:
    "DATA ENGINEER & ML PRACTITIONER WHO LOVES BUILDING END-TO-END INTELLIGENT SYSTEMS",
  skillsAnimation: true,
  skills: [
    emoji(
      "⚡ Architect scalable data pipelines processing millions of records daily across cloud platforms (GCP, AWS)"
    ),
    emoji(
      "⚡ Design and deploy production ML systems with automated training, versioning, and CI/CD workflows"
    ),
    emoji(
      "⚡ Build real-time streaming solutions for high-volume data ingestion using Kafka, Spark & cloud-native tools"
    ),
    emoji(
      "⚡ Develop multi-agent AI frameworks that reduce manual effort and accelerate decision-making"
    ),
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fab fa-google",
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker",
    },
    {
      skillName: "Apache Spark",
      fontAwesomeClassname: "fas fa-bolt",
    },
    {
      skillName: "Kafka",
      fontAwesomeClassname: "fas fa-stream",
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain",
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt",
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra",
    },
    {
      skillName: "Airflow",
      fontAwesomeClassname: "fas fa-wind",
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project",
    },
    {
      skillName: "Hugging Face",
      fontAwesomeClassname: "fas fa-robot",
    },
  ],
  display: true,
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Northeastern University",
      logo: require("./assets/images/neuLogo.png"),
      subHeader: "Master of Science in Data Science",
      duration: "January 2024 - Present",
      desc: "Khoury College of Computer Sciences | GPA: 4.0/4.0",
      descBullets: [
        "Coursework: Supervised/Unsupervised Machine Learning, NLP, Algorithms",
        "Focus on applied ML systems and scalable data engineering",
      ],
    },
    {
      schoolName: "MIT World Peace University",
      logo: require("./assets/images/mitwpuLogo.png"),
      subHeader: "B.Tech in Computer Science & Engineering",
      duration: "July 2017 - May 2021",
      desc: "GPA: 9.54/10.0",
      descBullets: [
        "Coursework: Data Structures & Algorithms, Database Management, OOD",
        "Published research on Fake News Detection and Object Detection systems",
      ],
    },
  ],
};

// Tech Stack / Proficiency Section
const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Data Engineering & ETL",
      progressPercentage: "95%",
    },
    {
      Stack: "Machine Learning & AI",
      progressPercentage: "85%",
    },
    {
      Stack: "Cloud Platforms (GCP/AWS)",
      progressPercentage: "90%",
    },
    {
      Stack: "Backend Development",
      progressPercentage: "75%",
    },
  ],
  displayCodersrank: false,
};

// Work Experience Section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Architect Intern",
      company: "L.L. Bean",
      companylogo: require("./assets/images/llbeanLogo.png"),
      date: "January 2025 – August 2025",
      desc: "Building next-generation data infrastructure on Google Cloud Platform",
      descBullets: [
        "Architected GCS-to-BigQuery ingestion pipeline using Dataflow & Composer, processing 10K+ daily files with 90% improved data availability",
        "Developed multi-agent AI framework using Google's ADK for automated failure analysis across GCP services, achieving 99.9% uptime",
        "Implemented YAML-driven configuration framework reducing pipeline setup time by 80% and reruns by 45%",
        "Built CI/CD pipelines with GitHub & Harness integrating Splunk API for real-time log extraction and automated alerting",
      ],
    },
    {
      role: "Senior Data Engineer",
      company: "Quantiphi Analytics",
      companylogo: require("./assets/images/quantiphiLogo.png"),
      date: "July 2021 – November 2023",
      desc: "Led cross-functional teams building enterprise-scale data solutions",
      descBullets: [
        "Directed Kafka-PubSub real-time ETL pipeline for financial institute handling 2TB daily, boosting efficiency by 40%",
        "Led BigQuery data warehouse integration with Vertex AI for ML demand forecasting, improving accuracy by 30%",
        "Orchestrated MySQL & MongoDB to BigQuery migration using Datastream impacting 5K+ users",
        "Automated molecular enumeration of 1B molecules for healthcare using Dataflow & Dataproc",
      ],
    },
    {
      role: "Data Science Research Intern",
      company: "Maker's Lab, Tech Mahindra",
      companylogo: require("./assets/images/techMahindraLogo.png"),
      date: "November 2020 – May 2021",
      desc: "Computer Vision research and MLOps implementation",
      descBullets: [
        "Developed automatic image annotation system using YOLOv4-Tiny achieving 40 mAP@0.5, reducing annotation time by 75%",
        "Deployed system using Docker & Kubernetes, optimizing CI/CD in GitLab and cutting costs by 89%",
      ],
    },
  ],
};

// Open Source Section - Pulls from GitHub
const openSource = {
  showGithubProfile: "true",
  display: true,
};

// Big Projects Section
const bigProjects = {
  title: "Featured Projects",
  subtitle:
    "INNOVATIVE SOLUTIONS COMBINING ML, DATA ENGINEERING & XR TECHNOLOGIES",
  projects: [
    {
      image: require("./assets/images/himasProject.png"),
      projectName: "Healthcare Intelligence Multi-Agent System",
      projectDesc:
        "MLOps project implementing a healthcare intelligence system using multi-agent architecture for automated analysis and decision support.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/YashKhare20/himas-mlops",
        },
      ],
    },
    {
      image: require("./assets/images/xrAvatarProject.png"),
      projectName: "XR Remote Assistance with LLM Avatars",
      projectDesc:
        "Extended Reality system with LLM-driven avatars for manufacturing troubleshooting.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/YashKhare20/Avatar-Controller",
        },
      ],
    },
    {
      image: require("./assets/images/fakeNewsProject.png"),
      projectName: "Fake News Detection Web Extension",
      projectDesc:
        "Deep learning web extension using LSTM and transfer learning to differentiate fake from legitimate news. Published research paper on the system.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/YashKhare20/Fake-News-Prediction",
        },
      ],
    },
    {
      image: require("./assets/images/dragonflyProject.png"),
      projectName: "Dragonfly Checklist App",
      projectDesc:
        "Android application for reporting dragonfly ecological data, enabling citizen science contributions to species monitoring.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/YashKhare20/Dragonfly-Checklist-App",
        },
      ],
    },
  ],
  display: true,
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Certifications, Publications, and Milestones",
  achievementsCards: [
    {
      title: "Google Cloud Professional Data Engineer",
      subtitle:
        "Certified expertise in designing and building data processing systems on GCP",
      image: require("./assets/images/gcpDataEngineer.png"),
      imageAlt: "GCP Data Engineer Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://cloud.google.com/certification/data-engineer",
        },
      ],
    },
    {
      title: "Google Cloud Associate Cloud Engineer",
      subtitle:
        "Certified in deploying applications, monitoring operations, and managing enterprise solutions on GCP",
      image: require("./assets/images/gcpCloudEngineer.png"),
      imageAlt: "GCP Cloud Engineer Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://cloud.google.com/certification/cloud-engineer",
        },
      ],
    },
    {
      title: "Published Researcher",
      subtitle:
        "Publications on Fake News Detection Systems and Comparative Review of Generic Object Detection",
      image: require("./assets/images/researchIcon.png"),
      imageAlt: "Research Publication Icon",
      footerLink: [
        {
          name: "Fake News Detection Paper",
          url: "https://ieeexplore.ieee.org/document/9362384",
        },
        {
          name: "Object Detection Review",
          url: "https://app.box.com/s/a1jczqo3u9dek895oiniuepnxijo4fks",
        },
      ],
    },
  ],
  display: true,
};

// Blogs Section - Optional
const blogSection = {
  title: "Blogs",
  subtitle: "Thoughts on data engineering, ML systems, and cloud architecture",
  displayMediumBlogs: "false",
  blogs: [],
  display: false,
};

// Talks Section - Optional
const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),
  talks: [],
  display: false,
};

// Podcast Section - Optional
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false,
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true,
};

// Contact Info
const contactInfo = {
  title: emoji("Let's Connect ☎️"),
  subtitle:
    "Open to discussing data engineering, ML/AI full time roles, ML projects, or just a friendly chat about technology!",
  number: "+1 (857) 506-4305",
  email_address: "khare.y@northeastern.edu",
  contactAnimation: false,
};

// Twitter Section - Optional
const twitterDetails = {
  userName: "",
  display: false,
};

const isHireable = true;

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
  resumeSection,
  isHireable,
};
