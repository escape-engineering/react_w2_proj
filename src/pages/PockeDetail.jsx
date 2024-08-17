import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../mock";
import styled from "styled-components";
import Button from "../components/common/Button";

const PockeDetail = () => {
    const navigate = useNavigate();
    const params = useParams();
    const targetPokemon = MOCK_DATA.find((poke) => poke.id == params.id);

    const backToDex = () => {
        navigate("/dex");
    };

    return (
        <Wrapper>
            <PokeDetailWrap>
                <PokeDetailImg src={targetPokemon.img_url} />
                <PokeDetailName>{targetPokemon.korean_name}</PokeDetailName>
                <PokeDetailDesc>{targetPokemon.types.join(", ")}</PokeDetailDesc>
                <PokeDetailDesc>{targetPokemon.description}</PokeDetailDesc>
                <Button
                    onClick={backToDex}
                    $width="150px"
                    $height="50px"
                    $backgroundColor="#b1b0b0"
                    $border="none"
                    $borderRadius="5px"
                    $color="white"
                    $margin="10px 0px"
                    $fontSize="20px"
                    $fontWeight="bold"
                >
                    뒤로가기
                </Button>
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
