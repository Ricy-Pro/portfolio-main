export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I started my career as a freelance developer, delivering high-quality solutions to clients",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I've collaborated with clients worldwide",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "I’m passionate about data and web development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Full-Stack Mobile Application",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Music Roulette Mobile Application",
    des: "Developed a mobile application called Music Roulette using modern web and mobile technologies.",
    img: "/music.jpeg",
    iconLists: ["/re.svg", "/nodejs.svg", "/js.svg", "/mongodb.svg", "/expo.svg"],
    link: "https://github.com/Ricy-Pro/music-roulette-app",
  },
  {
    id: 2,
    title: "Email Management Web Application",
    des: "This project is a web application designed to streamline email management by consolidating emails from Gmail, Outlook, Yahoo, and potentially Microsoft Teams into a centralized platform.",
    img: "/Email.jpeg",
    iconLists: ["/django.svg", "/postgresql.svg", "/re.svg", "/python.svg"],
    link: "https://github.com/Ricy-Pro/EmailCentral",
  },
  {
    id: 3,
    title: "Cyber Defense Game",
    des: "Cyber Defense Game is an interactive educational game that combines entertainment with learning essential cybersecurity concepts.",
    img: "tdg.jpeg",
    iconLists: ["/unity.svg", "/Csharp.svg", "/git.svg"],
    link: "https://github.com/Ricy-Pro/Proiect-Hackathon",
  },
  {
    id: 4,
    title: "Matlab Image Processing Project",
    des: "This Matlab program recieves as input data an image with different symetrical and asymetrical objects and shows some objects in different figures. The first figure shows each object labeled. The second figure shows the object with the biggest Area and the object with the smallest Perimeter. ",
    img: "/imgapp.jpeg",
    iconLists: ["/matlab.svg", "/imgprocessing.svg"],
    link: "https://github.com/Ricy-Pro/Matlab_Project",
  },
];

export const testimonials = [
  {
    quote:
   "I first met Robert during his first year of college, when I had the opportunity to teach him. He was always punctual, deeply engaged with the subject, and consistently submitted his assignments on time. Robert is a communicative and motivated individual, with a strong desire to grow and an excellent ability to collaborate with others. He stood out as one of my best students. For further details, feel free to contact me at ioan.daniel.pop@ubbcluj.ro",
    name: "Pop Ioan Daniel",
    title: "PhD Candidate in Artificial Intelligence at Babeș-Bolyai University",
    img: "/pop.png"
  },
  
  
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Hermes CyberSecurity Hackathon",
    desc: "Developed a Tower Defense Game using Unity and C# for the Hermes CyberSecurity Hackathon. The game was designed to educate users on the importance of cybersecurity and the various ways to protect their data.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "IT Creativity Contest “Severin Bumbaru” - Web Design",
    desc: "Participated in three editions of the contest, winning a place on the podium each time. I developed varoius websites based on the contest theme.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "ACIEE - HACKATHON ",
    desc: "Managed the group, taking on the role of group leader, and successfully coordinated the development of a complex Matlab project using image processing technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "CloudFlight Contest",
    desc: "Participated in two editions of the contest, completing the tasks in the shortest time possible and gaining valuable experience.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  },

];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
