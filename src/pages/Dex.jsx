import React, { useState } from "react";
import Dashboard from "../components/dex/Dashboard";
import PokemonList from "../components/dex/PokemonList";
import PokemonCard from "../components/dex/PokemonCard";
import styled from "styled-components";

const Dex = () => {
    const [selectedPokemon, setSelectedPokemon] = useState(Array.from({ length: 6 }));
    const onClickAddPokemonHandler = (e, pokemonData) => {
        e.stopPropagation();
        const emptyIndex = selectedPokemon.findIndex((poke) => poke === undefined);
        if (emptyIndex === -1) {
            alert("포켓몬 선택은 6개까지 가능합니다!");
            return null;
        }
        if (selectedPokemon[0] !== undefined) {
            const checkDuplication = selectedPokemon.some((poke) => poke?.id === pokemonData.id);
            if (checkDuplication) {
                alert("이미 해당 포켓몬을 선택하였습니다!");
                return null;
            }
        }
        const newArray = [...selectedPokemon].with(emptyIndex, pokemonData);
        setSelectedPokemon(newArray);
    };
    const onClickDeletePokemonHandler = (e) => {
        e.stopPropagation();
        const newArray = [...selectedPokemon].map((poke) => {
            return poke?.id == e.target.name ? undefined : poke;
        });
        setSelectedPokemon(newArray);
    };
    return (
        <DexWrapper>
            <Dashboard selectedPokemon={selectedPokemon} onClickDeletePokemonHandler={onClickDeletePokemonHandler} />
            <PokemonList onClickAddPokemonHandler={onClickAddPokemonHandler} />
            <PokemonCard />
        </DexWrapper>
    );
};

export default Dex;

const DexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;
