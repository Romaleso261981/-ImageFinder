import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { Header } from "../components/HomePageComponents/Header";
import { Filter } from "../components/Filter/Filter";
import {
  fetchCharacterByName,
  fetchCharacters,
} from "../rickMortyAPI/fetchCharacters";
import { CharactersList } from "../components/HomePageComponents/CharactersList";
import { Loader } from "../components/Loader";
import { ButtonLoadMore } from "../components/ButtonLoadMore/ButtonLoadMore";
import { LoadMoreContainer } from "../components/ButtonLoadMore/ButtonLoadMore.styled";

export const Home = () => {
  const [charactersList, setCharactersList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const characterName = searchParams.get("name") ?? "";

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (characterName !== "") {
      searchCharactersByName();
      return;
    }

    async function searchCharactersByName() {
      try {
        setLoading(true);
        const characters = await fetchCharacterByName(characterName, page);

        setCharactersList(characters.results);
        setTotalPages(characters.info.pages);
      } catch (error) {
        if ((error.response.data.error = "There is nothing here")) {
          setLoading(false);
          return alert("No characters by this name.");
        }

        console.log(error);
      }
      setLoading(false);
    }

    async function searchCharacters() {
      try {
        setLoading(true);
        const characters = await fetchCharacters(page);

        setCharactersList(characters.results);
        setTotalPages(characters.info.pages);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }

    searchCharacters();
  }, [characterName, page]);

  const sortedCharactersList = useMemo(() => {
    return charactersList.sort((firstCharacter, secondCharacter) =>
      firstCharacter.name.localeCompare(secondCharacter.name)
    );
  }, [charactersList]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const normilizedValue = form.elements.filter.value.toLowerCase();

    if (normilizedValue.trim() === "") {
      return alert("Please, enter character name.");
    }

    const searchName =
      normilizedValue !== "" ? { name: normilizedValue.trim() } : {};

    setSearchParams(searchName);
  };

  const loadNextPage = () => {
    setPage((prevState) => prevState + 1);
  };

  const loadPrevPage = () => {
    setPage((prevState) => prevState - 1);
  };

  return (
    <>
      <Header />
      <Filter onSubmit={handleFormSubmit} />

      {loading ? (
        <Loader />
      ) : (
        sortedCharactersList && (
          <CharactersList characters={sortedCharactersList} />
        )
      )}

      <LoadMoreContainer>
        {page !== 1 && (
          <ButtonLoadMore loadMore={loadPrevPage} buttonName={"prev"} />
        )}

        {page !== totalPages && (
          <ButtonLoadMore loadMore={loadNextPage} buttonName={"next"} />
        )}
      </LoadMoreContainer>
    </>
  );
};
