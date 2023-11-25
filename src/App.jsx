import styles from'./App.module.css';
import { Hero } from './componets/Hero/Hero';
import { About } from './componets/About/About';
import { Navbar } from './componets/Navbar/Navbar';
import { Contact } from './componets/Contact/Contact';
import { Experience } from './componets/Experience/Experience';
import { Projects } from './componets/Projects/Projects';

function App() {
return(
  <div className={styles.App}>
    <Navbar />
    <Hero />
    <About />
    <Contact />
    <Experience />
    <Projects />
  </div>
)
}

export default App;
