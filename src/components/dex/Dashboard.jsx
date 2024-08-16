import React from "react";
import styled from "styled-components";
import SelectedList from "./SelectedList";

const Dashboard = ({ selectedPokemon, onClickDeletePokemonHandler }) => {
    return (
        <SelectedBox>
            <SelectedTitle>나만의 포켓몬</SelectedTitle>
            <SelectedList selectedPokemon={selectedPokemon} onClickDeletePokemonHandler={onClickDeletePokemonHandler} />
        </SelectedBox>
    );
};

export default Dashboard;

const SelectedBox = styled.div`
    background-color: #f5f5f5;
    padding: 20px 50px;
    border-radius: 10px;
    min-width: 1200px;
    margin-bottom: 20px;
`;
const SelectedTitle = styled.h2`
    font-size: 25px;
    font-weight: 900;
    color: #ff0000;
    margin: 20px 0px 30px 0px;
    text-align: center;
`;
