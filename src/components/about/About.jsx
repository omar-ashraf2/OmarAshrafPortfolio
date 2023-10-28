import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <img className="star" src="/star.png" alt="star" />
      <section className="about-me">
        <h1>So, who am I?</h1>
        <p className="intro">
          Greetings, I&apos;m Omar Ashraf, a frontend developer with a profound
          fascination for the ever-evolving world of technology. With over three
          years of hands-on experience in the field, I&apos;ve embarked on a
          journey marked by continuous growth, relentless passion, and an
          unyielding commitment to crafting exceptional web experiences.
        </p>
        <h2>The Passion that Drives Me</h2>
        <p className="passion">
          Frontend development isn&apos;t merely my profession; it&apos;s my
          true passion. It&apos;s the art of transforming lines of code into
          tangible, visual masterpieces that resonate with users. Each project I
          undertake is an opportunity to push the boundaries of creativity and
          technical innovation.
        </p>
        <h2>A Commitment to Learning</h2>
        <p className="learning">
          Frontend development is a field that thrives on change and innovation.
          I recognize the importance of staying at the forefront of technology
          trends. Continual learning and self-improvement are my guiding
          principles. I embrace each new challenge and opportunity as a chance
          to expand my knowledge, refine my skills, and elevate my craft.
        </p>
        <h2>The Future Awaits</h2>
        <p className="future">
          As I look ahead, my goal is to leverage my expertise to create
          groundbreaking user experiences and lead a team of frontend
          developers. I am on a perpetual quest for excellence, seeking fresh
          insights, exploring innovative technologies, and fostering a culture
          of creativity and collaboration.
        </p>
        <h2>Let&apos;s Connect</h2>
        <p className="connect">
          I am always excited to connect with fellow developers, designers, and
          technology enthusiasts. Whether it&apos;s the prospect of
          collaborating on a new project or simply engaging in a conversation
          about the latest advancements in web development, I welcome the
          opportunity to connect and explore how we can work together to create
          extraordinary digital experiences.
        </p>
      </section>
      <div className="right">
        <div className="imgContainer">
          <img src="/main.png" alt="main" />
        </div>
        <h2>Skills for Success</h2>
        <ul className="skills">
          <li>
            <b>HTML</b> and <b>CSS</b> serve as my canvas, allowing me to paint
            visually stunning user interfaces.
          </li>
          <li>
            <b>SASS</b> adds elegance and efficiency to my styles, while{" "}
            <b>JavaScript </b>
            breathes life into web applications.
          </li>
          <li>
            <b>React.js</b> and <b>Next.js</b> provide the foundation for
            building dynamic and responsive websites.
          </li>
          <li>
            <b>Redux</b> empowers me to manage complex application states
            effectively.
          </li>
          <li>
            <b>TypeScript</b> ensures robust code with improved maintainability.
          </li>
          <li>
            <b>Git/Version</b> Control and <b>GitHub</b> are my allies in
            collaborative development.
          </li>
        </ul>
        <div className="btns">
          <a href="#">Resume</a>
          <a href="#Contact">Get in touch</a>
        </div>
      </div>
      <img className="arrow" src="/arrow.svg" alt="arrow" />
    </div>
  );
};

export default About;
