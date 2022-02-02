import { Search } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

// Creating React Element with Styled-components
const Container = styled.div`
  padding: 20px 20px;
  width: 60%;
  height: auto;
  margin: auto;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
`;
const ShowMore = styled.button`
  padding: 10px 20px;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
const Icon = styled.span`
  & > * {
    font-size: 15px !important;
  }
  margin-right: 3px;
`;
const CardList = ({ selectedCardHandler }) => {
  //Calling UseState to get Data from API

  // limit pages at first
  const perPage = 12;
  const [page, setPage] = useState(1);
  const [totoalPages, setTotoalPages] = useState(1);

  //geathering data of cards from API
  const [cardList, setCardList] = useState([]);

  // to wait to get data from API
  const [loading, setLoading] = useState(false);

  //use useEffect hook to get data at page fist-loading
  useEffect(() => {
    setLoading(true);
    const getCards = () => {
      axios
        .get(
          `https://api.pokemontcg.io/v2/cards?pageSize=${perPage}&page=${page}`
        )
        .then((response) => {
          //set page total from API to know how many pages
          setTotoalPages(response.data.pageSize);

          //set data to cardList array
          setCardList([...cardList, ...response.data.data]);

          //after getting data ,set loading to false
          setLoading(false);
        });
    };
    getCards();
  }, [page]);

  return (
    <Container>
      <CardListWrapper>
        {cardList.map((card) => (
          <Card
            card={card}
            key={card.id}
            selectedCardHandler={selectedCardHandler}
          />
        ))}
      </CardListWrapper>
      {totoalPages !== page && (
        <ShowMore onClick={() => setPage(page + 1)}>
          <Icon>
            <Search />
          </Icon>
          {loading ? 'Showing ...' : 'show more'}
        </ShowMore>
      )}
    </Container>
  );
};

export default CardList;
