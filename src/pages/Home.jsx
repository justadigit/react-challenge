import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import CardList from './CardList';

const Home = () => {
  const [selectedCard, setSelectedCard] = useState([]);
  //console.log(selectedCard);
  const selectedCardHandler = (data) => {
    setSelectedCard([...selectedCard, { eachCount: 1, ...data }]);
  };
  return (
    <>
      <Navbar />
      <Search />
      <CardList selectedCardHandler={selectedCardHandler} />
      <Footer selectedCard={selectedCard} onsetSelectedCard={setSelectedCard} />
    </>
  );
};

export default Home;
