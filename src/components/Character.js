// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 70vw;
  max-height: 80vh;
  justify-content: space-between;
  align-content: center;
  margin: 5px 0;
  border: 7px solid;
  border-color: ${(pr) => pr.theme.tertiaryColor};
  font-size: 1.5rem;
  color: ${(pr) => pr.theme.primaryColor};
  text-shadow: 2px 2px 6px black;
  padding-left: 1%;

  backdrop-filter: blur(5px);

  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${(pr) => pr.theme.primaryColor};
    color: ${(pr) => pr.theme.secondaryColor};
  }

  button {
    background-color: ${(pr) => pr.theme.tertiaryColor};
    color: ${(pr) => pr.theme.secondaryColor};
    width: 150px;
    /* margin-right: 2%; */
    border-radius: 50px 20px;
    font-size: 1.5rem;
    font-family: "Poller One", cursive;

    margin: 1% 1% 1% 0;
    &:hover {
      transform: scale(1.1);
    }
  }

  @media ${(pr) => pr.theme.breakpointMobile} {
    width: 60vw;
    height: 8vh;
    font-size: 1rem;
    border: 5px solid;
    border-color: ${(pr) => pr.theme.tertiaryColor};
    color: ${(pr) => pr.theme.tertiaryColor};
    margin: 8px;

    justify-content: space-between;

    button {
      background-color: ${(pr) => pr.theme.tertiaryColor};
      width: 100px;

      border-radius: 50px 20px;
      font-size: 1rem;
      font-family: "Poller One", cursive;
    }
  }
`;

function Character({ character, birthYear }) {
  return (
    <>
      <StyledCharacter>
        <p>{character}</p>
        <button>{birthYear}</button>
      </StyledCharacter>
    </>
  );
}

export default Character;
