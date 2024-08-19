import React from "react";
import MOCK_DATA from "../../mock";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
    return (
        <PokemonListWrap>
            {MOCK_DATA.map((mock) => {
                return <PokemonCard key={mock.id} mock={mock} />;
            })}
        </PokemonListWrap>
    );
};

export default PokemonList;

const PokemonListWrap = styled.ol`
    width: 1200px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: #f0f0f0;
    gap: 20px;
    border-radius: 10px;
`;
