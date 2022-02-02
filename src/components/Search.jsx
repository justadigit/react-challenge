import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  padding: 50px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchWrapper = styled.div`
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SearchText = styled.input`
  ::placeholder {
    color: lightgray;
  }
  font-weight: 100;
  padding: 11px 8px;
  padding-left: 25px;
  border: none;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: 3px 5px 15px 1px rgba(0, 0, 0, 0.08);
`;
const SearchType = styled.select`
  color: lightgray;
  font-weight: 200;
  padding: 10px 8px;
  margin-left: 2px;
  border: none;
  border-top-right-radius: ${(props) =>
    props.value === 'rightmost' ? '20px' : ''};
  border-bottom-right-radius: ${(props) =>
    props.value === 'rightmost' ? '20px' : ''};
  box-shadow: 3px 5px 15px 1px rgba(0, 0, 0, 0.08);
`;
const TypeItem = styled.option`
  font-weight: 200;
`;
const Search = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchText type="text" placeholder="Name..." />
        <SearchType>
          <TypeItem>Type</TypeItem>
          <TypeItem>A</TypeItem>
          <TypeItem>B</TypeItem>
          <TypeItem>c</TypeItem>
          <TypeItem>d</TypeItem>
        </SearchType>
        <SearchType>
          <TypeItem>Rarity</TypeItem>
          <TypeItem>A</TypeItem>
          <TypeItem>B</TypeItem>
          <TypeItem>c</TypeItem>
          <TypeItem>d</TypeItem>
        </SearchType>
        <SearchType value="rightmost">
          <TypeItem>Set</TypeItem>
          <TypeItem>A</TypeItem>
          <TypeItem>B</TypeItem>
          <TypeItem>c</TypeItem>
          <TypeItem>d</TypeItem>
        </SearchType>
      </SearchWrapper>
    </Container>
  );
};

export default Search;
