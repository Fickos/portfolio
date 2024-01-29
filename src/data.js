export const projects = [
  {
    title: "Proptrek",
    image: "proptrek.png",
    description:
      "Developed core features for the real-estate platform. Provided search features, with challenging UI elements, and custom queries. Integrated Google API into the system, to ensure up-to-date location searches. Enabled start-to-finish communication and planning between users and agents (chat, meetings and more). Organized and managed the microservice infrastructure on AWS via Pulumi, while ensuring performance and security.",
    techStack: ["React.js", "Node.js", "Express.js", "SpringBoot", "Docker", "AWS", "Pulumi"],
    view: "https://www.proptrek.com/",
  },
  {
    title: "Voxtronic",
    image: "voxtronic.svg",
    background: true,
    description:
      "Voxtronic develops secure communication products and solutions for enterprises with high security requirements and organizations with critical infrastructure for public safety, public transport and industry by using the latest technologies. Developed multiple features using custom web framework built on top of React.",
    techStack: ["React.js", "Typescript", "Redux", "Redux-saga", "Java"],
    view: "https://www.voxtronic.com/",
  },
  {
    title: "Servotel",
    image: "servotel.png",
    background: true,
    description:
      "Utilized the power of Google API, to optimize the partner finding process. Created scripts for database consistency of location data. Added interactive map component to support the high load of partners in the system, without loosing performance.",
    techStack: ["React.js", "Node.js", "Express.js"],
    view: "https://www.servotel.com/",
  },
  {
    title: "Securaze",
    image: "securaze.png",
    description:
      "SECURAZE is an asset diagnostic and certified data erasure platform. My biggest responsibilities were to refactor microservice communication to RabbitMQ, and to enable the posibility to create XML templates which would later be used for printing labels on Brother printers.",
    techStack: ["React.js", "Node.js", "RabbitMQ", "Redis", "Microservices"],
    view: "https://securaze.com/",
  },
  {
    title: "Cloud Medify",
    image: "cloud_medify.svg",
    description:
      "In-house project for tracking of the patients medical records, setting up doctors appointments, and tracking the history of patients visits. Specifically customized for stomatologists and gynecologists. My responsibilities included elevating the security level, by introducing 2FA into the system, in respect to the provided network zones.",
    techStack: ["React.js", "Node.js", "Microservices", "Redux"],
  },
];

export const hobbyProjects = [
    {
      title: "Bukingoni",
      image: "devops.png",
      background: true,
      description:
        "The goal of this project was to implement best practices of DevOps and learn more about AWS. During this period, I have learned a lot about AWS resources, and successfully managed them, in order to support microservice architecture for a Booking like application on EKS.",
      techStack: ["React.js", "Node.js", "Docker", "Kubernetes", "AWS", "Jenkins"],
    },
    {
      title: "Zaposloni ELK",
      image: "elk.png",
      description:
        "Implementing basic employment agency processes, using ElasticSearch as base. Researched a lot of the provided features from ELK stack.",
      techStack: ["React.js", "Node.js", "ElasticSearch", "Kibana", "Logstash", "Docker"],
      github: "https://github.com/Fickos/zaposloni-udd-backend",
    },
    {
      title: "Thinkmate",
      image: "thinkmate.png",
      description:
        "Idea behind this project was to create a ML pipeline, which would provide a Leela-based model as output. The goal is to create a chess-bot to mimic the playstyle of a real-person, instead of playing the best move. This challenging task required good knowledge of LC0 architecture, in order to support transfer-learning from base MAIA models.",
      techStack: ["Python", "Tensorflow", "Keras", "GoogleColab"],
    },
    {
      title: "Sculptoni",
      image: "react.png",
      description:
        "One of my personal favorites. Developed as a part of bachelors work. The goal was to create development environment, in which a user could plan out and visualize the structure of the React application, and get generated code based on the model. More detailed description of how was this achieved can be found in README of the repository.",      techStack: ["React.js", "Node.js", "Javascript", "Redux", "Nunjucks", "Code generation"],
      github: "https://github.com/Fickos/GENEREACTONI-b",
    },
    {
      title: "Catoni",
      image: "catoni.jpg",
      description:
        "Knowledge-based Catan bot. Created a web application which N number of players to play a game of Catan with M number of bots. The bots 'knowledge' is stored as Drools rules, and they play with a very good precision.",
      techStack: [
        "React.js",
        "SpringBoot",
        "Drools",
      ],
      github: "https://github.com/Fickos/catoni",
    },
    {
      title: "And many more...",
      description:
        "These are only few of my latest and most favorite projects. While obtaining bachelors degree, I worked on multiple group projects using various technologies. Displaying skills in web development, databases, machine learning, computer vision and algorithms.",
    }
];
