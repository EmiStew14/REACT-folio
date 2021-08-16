import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'AZ 4 Locals',
      category: 'projects',
      tools: 'CSS , JavaScript, JSON, Node.js, Handlebars.js, Heroku, MySQL, SQLite ,Sequelize, npm, Express.js, dotenv, bcrypt, Weather API',
      description: 'A group full stack blog made for local arizonians',
      link:<a href='https://agile-cliffs-08028.herokuapp.com/'>Deployed link</a>,
      github: <a href ="https://github.com/marcysko/az4locals">Github</a>
    },
    {
      name: 'Safe it Up',
      category: 'projects',
      tools:'HTML, CSS, JavaScript',
      description: 'To generate a strong password for your social media/daily security needs. Click through prompts to customize the password to your liking, choosing from adding special characters, numbers, lower and upper cased letter ranging from 8-128 characters.',
      link: <a href='https://emistew14.github.io/Safe-it-up/'>Deployed link</a>,
      github: <a href ="https://github.com/EmiStew14/Safe-it-up">Github</a>
    },
    {
      name: 'Planetarium Party',
      category: 'projects',
      tools:'HTML, CSS, Javascript, JQuery, Halfmoon-CSS, Nasa-API, Wikipedia-API',
      description: "A group project Created by Emily Stewart, Krista McPherson, & Maribel Ellison. This project is an app that allows users to search for their favorite planet and in return they'll get an image from the NASA API and a portion of the Wikipedia article about that planet. It features continuous dark mode to enhance the feel of being in space.",
      link:<a href='https://emistew14.github.io/Planetarium-Party/'>Deployed link</a>,
      github: <a href ="https://github.com/EmiStew14/Planetarium-Party">Github</a>
    },
    {
      name: 'Run Buddy',
      category: 'projects',
      tools:'HTML,JavaScript, CSS',
      description: 'A website that offers fitness training services.',
      link: <a href='https://github.com/EmiStew14/run-buddy.git'>Deployed link</a>,
      github: <a href ="https://github.com/EmiStew14/run-buddy">Github</a>
    },
    {
      name: 'Whats the Weather like',
      category: 'projects',
      tools:'HTML, JavaScript, CSS, BootStrap, Weather-API',
      description: 'A website that offers info from different weather API servers to display 5 day forecast weather updates, and the current weather temperature, humidity and windspeed. Also with the feature of clicking previous searches and calling back to their weather outputs.',
      link: <a href='https://emistew14.github.io/whats-the-weather-like/'>Deployed link</a>,
      github: <a href ="https://github.com/EmiStew14/whats-the-weather-like">Github</a>
    },
    {
        name: 'Busy Me',
        category: 'projects',
        tools: 'HTML, CSS, JavaScript',
        description: 'An easy way to keep track of your tasks, this site presents the current date and allows for the user to save, store, and modify tasks for a standard 9-5 work day. Tasks will remain presented even when user refreshes or leaves the page. Time slots are color coded to show tasks happening now (red), past tasks (grey) and tasks coming up (green).',
        link:<a href='https://emistew14.github.io/busy-me/ '>Deployed link</a>,
        github: <a href ="https://github.com/EmiStew14/busy-me">Github</a>
    },
    {
        name: 'Make it Professional',
        category:'projects',
        tools: 'HTML, JavaScript, Node.Js, Inquirer, Markdown',
        description:"A professional readme generator.",
        link: <a href='https://drive.google.com/file/d/1QF_9PoUJuB7STSGEvoLLYYhJhP8RRJm3/view'>Useage vid</a>,
        github: <a href ="https://github.com/EmiStew14/make-it-professional">Github</a>
    },
    {
      name:'Anytime Budget',
      category:'projects',
      tools:'JavaScript, NPM, morgan, compression, transaction-api, Node.js, MongooseDB, Express.JS',
      description:"A PWA based Budget tracker, this tracker will allow users to be able to add expenses and deposits to their budget with or without a connection. If the user enters transactions offline, the total will be updated when they're brought back online.",
      link: <a href='https://serene-bastion-01859.herokuapp.com/'>Deployed link</a>,
      github: <a href ="https://github.com/EmiStew14/anywhere_budget">Github</a>
    },
    {
      name:'Save it for Later',
      category:'projects',
      tools:'HTML, CSS, Bootstrap, Javascript, Express.JS, Node.JS',
      description:"A note saving site that utilizes express.Js capabilities.",
      link: <a href=" https://boiling-spire-50403.herokuapp.com/ ">Deployed link</a>,
      github: <a href ="https://github.com/EmiStew14/save-it-for-later">Github</a>
    },
    {
      name:'Welcome to banking',
      category:'projects',
      tools:'JavaScript, Node.js, Sequelize, MySQL, ORM, dotenv, npm, express, nodemon',
      description: "An ORM based project that uses Node, sequelize, mySQL, and dotenv package to create a database that holds category,product and tag information and allows for you to edit, create and delete these items.",
      link: <a href = "https://github.com/EmiStew14/welcome-to-banking">Github</a>,
      github: <a href ="https://github.com/EmiStew14">Github</a>
    },
    {
      name: 'Track my Employee',
      category: 'projects',
      tools:'JavaScript,Node.js, MySQL, NPM, console.table, easy-table, express, inquirer',
      description: "A node based project that uses mysql to create a database that holds employee information and generates a table to display salaries, departments, and role ids.",
      link: <a href = "https://github.com/EmiStew14/track-my-employee">Github</a>,
      github: <a href ="https://github.com/EmiStew14">Github</a>
    },
    {
      name: 'Retro Yardsale',
      category: 'projects',
      tools:'React, JSX, CSS, npm, GraphQL, Node.js, express.js, MongoDB, Mongoose ODM, JWT, apollo-boost, stripe, jest, bcrypt, if-env',
      description: "a MERN ecommerce site aimed to connect users looking to sell vintage home goods with buyers from around the world.",
      link: <a href = "https://retro-yardsale.herokuapp.com/">Deployed link</a>,
      github: <a href ="https://github.com/rookoyole/retro-yardsale">Github</a>
    }
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/projects/${i}.PNG`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
