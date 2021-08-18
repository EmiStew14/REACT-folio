import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  const [categories] = useState([
    {
      name: 'projects',
      description: 'Photos of my Coding class projects'
    },
    {
      name: 'resume',
      description: <a style={{display: "table-cell"}} href="https://drive.google.com/file/d/1at8EjSnVapDYc-7A-9Tdl-vbqaoOEJ9_/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume pdf</a>
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <footer>
      <div>
      <a href="https://github.com/EmiStew14"><FontAwesomeIcon icon={["github"]} />Github</a>
      </div>
      <div>
        <a href= "https://www.linkedin.com/in/emily-marie-stewart">Linkedin</a>
      </div>
      </footer>
    </div>
  );
}

export default App;
