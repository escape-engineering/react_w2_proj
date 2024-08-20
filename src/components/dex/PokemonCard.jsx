import Button from "../common/Button";
import styled from "styled-components";
import { PokeImg, PokeName, PokeId } from "./SelectedList";
import useSelectPokemon from "../../hooks/useSelectPokemon";

const PokemonCard = ({ mock }) => {
    const { onClickAddPokemonHandler, goToDetail } = useSelectPokemon();

    return (
        <PokeDiv key={mock.id} onClick={() => goToDetail(mock.id)}>
            <PokeImg src={mock.img_url} />
            <PokeName>{mock.korean_name}</PokeName>
            <PokeId>No. {mock.id}</PokeId>
            <Button
                onClickHandler={(e) => onClickAddPokemonHandler(e, mock)}
                $width="50px"
                $height="30px"
                $backgroundColor="#9bee81"
                $border="none"
                $borderRadius="5px"
                $color="black"
                $margin="10px 0px"
            >
                추가
            </Button>
        </PokeDiv>
    );
};

export default PokemonCard;

const PokeDiv = styled.li`
    cursor: pointer;
    width: 100px;
    height: 200px;
    background-color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 5px;
    &:hover {
        transform: translateY(-10px);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`;
