import ContactCard from '../ContactCard/ContactCard';

import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <ContactCard />
      <div className="about">
        <h1>About Me</h1>
        <p>
          My name is Andrew, and I'm a software engineer at Google. I love learning about artificial
          intelligence and neuroscience. Apart from software, computer, or brain stuff, I love 
          playing guitar and singing, practicing Brazilian jiu jitsu and yoga, and gourmet cooking.
          I love to travel and learn foreign languages, and I'm constantly devouring a plethora of 
          random sources of information about things like space travel, the environment, fitness, 
          and high achievers throughout history. I'm also slowly forcing myself to love reading 
          physical books (rather than reddit or other online articles). A more typical (and 
          professional) overview of my research and career interests follows.
        </p>
        <p>
          My research interests lie broadly in the fields of artificial intelligence, deep learning, 
          and neuroscience. I am particularly interested in deep reinforcement learning, the role of 
          the default mode network in the human brain, the role of nociceptors and pain receptors in 
          sample efficient learning, and sophisticated motor control and coordination. It is my firm 
          belief that the most promising way forward in artificial intelligence research is through 
          a deep understanding of the human brain and nervous system as both a densely intricate 
          array of sensors and a highly organized filtration system for those sensory inputs. 
          Similarly, I believe the most promising way forward in neuroscience research is through 
          the development of innovative yet biologically plausible models of mental faculties (e.g., 
          decision making, planning, learning, motor control).
        </p>
      </div>
    </div>
  );
};

export default Home;