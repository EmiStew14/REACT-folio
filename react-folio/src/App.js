import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [categories] = useState([
    {
      name: 'projects',
      description: 'Photos of my Coding class projects',
    },
    {
      name: 'resume',
      description: 'My work background'
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
        <Resume></Resume>
      </main>
      <footer>
      <a href="https://github.com/EmiStew14"><i class="fa fa-github" aria-hidden="true"></i></a>
      <a href="https://twitter.com/_queenblackshee?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @_queenblackshee</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </footer>
    </div>
  );
}

export default App;
