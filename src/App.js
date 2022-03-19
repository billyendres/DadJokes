import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Content from "./components/Content";
import Button from "./components/Button";
import SearchBar from "./components/SearchBar";
import { url, options } from "./url/url";

import axios from "axios";
import Highlighter from "react-highlight-words";
import styled, { createGlobalStyle } from "styled-components";

const App = () => {
  const [joke, setJoke] = useState([]);
  const [searchJoke, setSearchJoke] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const getJoke = async () => {
    const response = await axios.get(url, options);
    setJoke(response.data.joke);
  };

  useEffect(() => {
    const loadJokes = async () => {
      const response = await axios.get(
        url + `/search?term=${searchInput}&limit=30`,
        options
      );
      setSearchJoke(response.data.results);
    };
    loadJokes();
  }, [searchInput]);

  const filteredSearch = searchJoke.filter((item) => {
    return Object.values(item)
      .join("")
      .toLowerCase()
      .includes(searchInput.toLowerCase());
  });

  const shortJoke = filteredSearch.map(({ joke, id }) => {
    const jokeLength = joke.split(" ").length;

    return (
      searchInput.length > 2 &&
      jokeLength < 10 && (
        <>
          <p>
            <Highlighter
              key={id}
              highlightClassName="YourHighlightClass"
              searchWords={[searchInput]}
              autoEscape={true}
              textToHighlight={joke}
            />
          </p>
        </>
      )
    );
  });

  const mediumJoke = filteredSearch.map(({ joke, id }) => {
    const jokeLength = joke.split(" ").length;

    return (
      searchInput.length > 2 &&
      jokeLength >= 10 &&
      jokeLength < 20 && (
        <p>
          <Highlighter
            key={id}
            highlightClassName="YourHighlightClass"
            searchWords={[searchInput]}
            autoEscape={true}
            textToHighlight={joke}
          />
        </p>
      )
    );
  });

  const longJoke = filteredSearch.map(({ joke, id }) => {
    const jokeLength = joke.split(" ").length;

    return (
      searchInput.length > 2 &&
      jokeLength > 20 && (
        <p>
          <Highlighter
            key={id}
            highlightClassName="YourHighlightClass"
            searchWords={[searchInput]}
            autoEscape={true}
            textToHighlight={joke}
          />
        </p>
      )
    );
  });

  return (
    <>
      <GlobalStyle />
      <Header title="Dad Jokes" />
      <Button onClickhandler={getJoke} placeholder="Click me to laugh!" />
      <Content placeholder={joke} />
      <SearchBar
        onChangeHandler={(e) => setSearchInput(e.target.value)}
        placeholder="Search More Jokes :)"
      />
      {searchInput.length > 2 ? (
        <Wrapper>
          <SubHeader placeholder="Short Jokes" />
          <SubHeader placeholder="Medium Jokes" />
          <SubHeader placeholder="Long Jokes" />
        </Wrapper>
      ) : (
        <SubHeader placeholder="Enter at least 3 letters to find a matching joke!" />
      )}

      <Wrapper>
        <Content placeholder={shortJoke} />
        <Content placeholder={mediumJoke} />
        <Content placeholder={longJoke} />
      </Wrapper>
    </>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  html {
    min-height: 100%;
  }
  body {
		margin: 0;
    padding: 0;
		color: #FF9EF6;
    font-family: "Bungee", sans-serif;
    letter-spacing: 2px;
    text-align: center;
    background: #5152FB;
    background: -webkit-linear-gradient(top left, #5152FB, #07E0D6);
    background: -moz-linear-gradient(top left, #5152FB, #07E0D6);
    background: linear-gradient(to bottom right, #5152FB, #07E0D6);
}`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
