export interface IdmSolutionItem {
    title: string;
    description: string;
    extra?: string; // for "IDM Robo Camp" etc.
    image?: string;
  }
  
  export const idmSolutionsData: IdmSolutionItem[] = [
    {
      title: "Robotics",
      description:
        "Introducing students to the fascinating world of robotics, where they learn to design, build, and program robots, enhancing their problem-solving and critical-thinking skills.",
      extra:
        "IDM ROBO CAMP\nA unique platform which motivates, inspires and engages students to experience a natural, practical, hands-on and experimental learning...",
      image: "/images/robotics.webp",
    },
    {
      title: "Artificial Intelligence (AI)",
      description:
        "We provide a foundational understanding of AI concepts, our courses delve into machine learning, neural networks, and data analysis, preparing students for a future driven by intelligent systems.",
      image: "/images/ai.webp",
    },
    {
      title: "Software Programming (Coding)",
      description:
        "Introducing students to the language of the future, our coding courses range from basic programming concepts to advanced software development, empowering students to build their own applications and solutions.",
      image: "/images/software-programing.webp",
    },
    {
      title: "Game Development",
      description:
        "Guiding students through the exciting process of game creation, our game development courses teach the fundamentals of game design, programming, and interactive storytelling.",
      image: "/images/game-dev.webp",
    },
    {
      title: "Database Management",
      description:
        "Students learn the principles of database design, management, and security, preparing them to organize and maintain complex data systems.",
      image: "/images/database.webp",
    },
    {
      title: "Animation and Multimedia",
      description:
        "Encouraging creativity and storytelling, our animation and media courses cover everything from basic animation techniques to advanced media production, enabling students to bring their imaginations to life.",
      image: "/images/animation-and-multimedia.webp",
    },
    {
      title: "3D Modelling",
      description:
        "Explore the world of 3D graphics by learning to create digital models used in games, simulations, and product design.",
      image: "/images/3d.webp",
    },
    {
      title: "Microsoft Suites",
      description:
        "Mastering Microsoft Office applications including Word, Excel, and PowerPoint to boost productivity and digital literacy.",
      image: "/images/ms.webp",
    },
    {
      title: "Graphics Design",
      description:
        "Unleash creativity with tools like Photoshop and Illustrator to craft compelling digital designs, branding, and layouts.",
      image: "/images/Graphics-design.webp",
    },
  ];
  