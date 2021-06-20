import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'AZ 4 Locals',
      category: 'projects',
      description: '',
      link:<a href='https://agile-cliffs-08028.herokuapp.com/'>Deployed link</a>
    },
    {
      name: 'Password Generator',
      category: 'projects',
      description: 'To generate a strong password for your social media/daily security needs. Click through prompts to customize the password to your liking, choosing from adding special characters, numbers, lower and upper cased letter ranging from 8-128 characters.',
      link: <a href='https://emistew14.github.io/Safe-it-up/'>Deployed link</a>
    },
    {
      name: 'Planetarium Party',
      category: 'projects',
      description: "A group project Created by Emily Stewart, Krista McPherson, & Maribel Ellison. This project is an app that allows users to search for their favorite planet and in return they'll get an image from the NASA API and a portion of the Wikipedia article about that planet. It features continuous dark mode to enhance the feel of being in space.",
      link:<a href='https://emistew14.github.io/Planetarium-Party/'>Deployed link</a>
    },
    {
      name: 'Run Buddy',
      category: 'projects',
      description: 'A website that offers fitness training services.',
      link: <a href='https://github.com/EmiStew14/run-buddy.git'>Deployed link</a>
    },
    {
      name: 'Weather Dashboard',
      category: 'projects',
      description: 'A website that offers info from different weather API servers to display 5 day forecast weather updates, and the current weather temperature, humidity and windspeed. Also with the feature of clicking previous searches and calling back to their weather outputs.',
      link: <a href='https://emistew14.github.io/whats-the-weather-like/'>Deployed link</a>
    },
    {
        name: 'Work Planner',
        category: 'projects',
        description: 'An easy way to keep track of your tasks, this site presents the current date and allows for the user to save, store, and modify tasks for a standard 9-5 work day. Tasks will remain presented even when user refreshes or leaves the page. Time slots are color coded to show tasks happening now (red), past tasks (grey) and tasks coming up (green).',
        link:<a href='https://emistew14.github.io/busy-me/ '>Deployed link</a>
    },
    {
        name: 'Readme Generator',
        category:'projects',
        description:"A professional readme generator.",
        link: <a href='https://github.com/EmiStew14/make-it-professional'>Github</a>
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
