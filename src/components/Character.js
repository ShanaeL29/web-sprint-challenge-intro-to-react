// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 70vw;
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
