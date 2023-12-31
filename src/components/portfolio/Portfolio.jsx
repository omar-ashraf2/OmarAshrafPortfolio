/* eslint-disable react/prop-types */
import "./portfolio.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Next.js Blog App",
    img: "/proj/nextBlogApp.png",
    desc: "A Next.js and MongoDB-powered blog post app is a dynamic web application for publishing and managing blog content. It leverages Next.js for high-performance rendering and MongoDB for robust data storage. This combination offers a seamless user experience and efficient content management.",
    url: "https://blogpostappnextjs.netlify.app/",
    repo: "https://github.com/omar-ashraf2/blogPostApp-Next",
  },
  {
    id: 2,
    title: "CRUD Operations in JavaScript",
    img: "/proj/crud.png",
    desc: "CRUD operations, which stand for Create, Read, Update, and Delete, are essential operations when working with data in a JavaScript application. These operations enable you to manage the data stored in databases, objects, or any other data source",
    url: "https://crud-operations-javascript.netlify.app/",
    repo: "https://github.com/omar-ashraf2/CRUD-Operations-JaveScript",
  },
  {
    id: 3,
    title: "React.js Dashboard",
    img: "/proj/dashboard.png",
    desc: "The React-based dashboard web application is a dynamic and user-friendly solution designed to streamline data visualization and management. It empowers users to access, analyze, and act upon complex datasets in a clear and efficient manner.",
    url: "https://omar-ashraf2.github.io/dashboard-react/",
    repo: "https://github.com/omar-ashraf2/dashboard-react",
  },
  {
    id: 4,
    title: "Portfolio React.js Sass",
    img: "/proj/portfolio.png",
    desc: "This portfolio project, developed using React and enhanced with the power of Sass (Syntactically Awesome Style Sheets), is a testament to creativity, innovation, and technical proficiency. It serves as a versatile platform for a frontend developer to exhibit their expertise while offering visitors an engaging and personalized experience.",
    url: "https://omar-ashraf2.github.io/Portfolio-React.js-Sass/",
    repo: "https://github.com/omar-ashraf2/Portfolio-React.js-Sass",
  },
  {
    id: 5,
    title: "Disney+ Clone",
    img: "/proj/dplus.png",
    desc: "Disney+ is a streaming service where you can watch movies, series, and originals from Disney, Pixar, Marvel, Star Wars, Nat Geo, and more. Built with React, TS, Redux, and Firebase",
    url: "https://disneyplus-clone-ts.netlify.app/",
    repo: "https://github.com/omar-ashraf2/disney--clone-reactjs-redux-typescript-firebase",
  },
  {
    id: 6,
    title: "Blog App",
    img: "/proj/blogAppReact.png",
    desc: "The blog post app, meticulously crafted with React.js, redefines the way users engage with written content. It provides a modern and immersive platform for reading, writing, and sharing articles on a wide range of topics.",
    url: "https://omar-ashraf2.github.io/blog-post-app/",
    repo: "https://github.com/omar-ashraf2/blog-post-app",
  },
  {
    id: 7,
    title: "Clock App JS",
    img: "/proj/clock.png",
    desc: "A simple clock app built with Vanilla JS",
    url: "https://clock-app-js.netlify.app/",
    repo: "https://github.com/omar-ashraf2/clock-app-js",
  },
  {
    id: 8,
    title: "Age Calculator JS",
    img: "/proj/age-calc.jpg",
    desc: "A simple age calculator app built with Vanilla JS",
    url: "https://age-calc-app-javascript.netlify.app/",
    repo: "https://github.com/omar-ashraf2/age-calculator-app",
  },
];

const iconVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

const Single = ({ item }) => {
  const ref = useRef();
  const iconRef = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <motion.div
            className="imgContainer"
            ref={iconRef}
            initial="initial"
            whileHover="animate"
          >
            <motion.img src={item.img} ref={ref} alt="projectImg" />
            <motion.div className="viewMode" variants={iconVariants}>
              <a target="_blank" rel="noreferrer" href={item.url}>
                <img src="/iconView.png" alt="" />
                View
              </a>
              <a target="_blank" rel="noreferrer" href={item.repo}>
                <img src="/iconGit.png" alt="" />
                Code
              </a>
            </motion.div>
          </motion.div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a target="_blank" rel="noreferrer" href={item.url}>
              See Demo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
