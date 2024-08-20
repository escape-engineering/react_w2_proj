import React from "react";
import styled from "styled-components";
import Button from "../components/common/Button";
import useSelectPokemon from "../hooks/useSelectPokemon";

const PockeDetail = () => {
    const { targetPokemon, onClickAddPokemonHandler, backToDex } = useSelectPokemon();

    return (
        <Wrapper>
            <PokeDetailWrap>
                <PokeDetailImg src={targetPokemon.img_url} />
                <PokeDetailName>{targetPokemon.korean_name}</PokeDetailName>
                <PokeDetailDesc>{targetPokemon.types.join(", ")}</PokeDetailDesc>
                <PokeDetailDesc>{targetPokemon.description}</PokeDetailDesc>
                <ButtonWrap>
                    <Button
                        onClick={(e) => onClickAddPokemonHandler(e, targetPokemon)}
                        $height="50px"
                        $fontSize="20px"
                        $fontWeight="bold"
                    >
                        추가하기
                    </Button>
                    <Button
                        onClick={backToDex}
                        $height="50px"
                        $backgroundColor="#b1b0b0"
                        $color="white"
                        $fontSize="20px"
                        $fontWeight="bold"
                    >
                        뒤로가기
                    </Button>
                </ButtonWrap>
            </PokeDetailWrap>
        </Wrapper>
    );
};

export default PockeDetail;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const PokeDetailWrap = styled.div`
    border: 3px solid #d5d5d5;
    border-radius: 20px;
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px 0px;
`;

const PokeDetailImg = styled.img`
    width: 300px;
    height: 300px;
`;

const PokeDetailName = styled.h2`
    font-size: 30px;
    font-weight: bold;
    margin: 20px 0px;
`;

const PokeDetailDesc = styled.p`
    margin: 10px 0px;
    font-weight: 700;
`;

const ButtonWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;
