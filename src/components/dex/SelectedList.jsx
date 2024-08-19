import styled from "styled-components";
import dexpageEmptyImg from "../../assets/dexPageEmptyImg.png";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePoke } from "../../redux/slices/pokeSlices";

const SelectedList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selectedPokemon = useSelector((state) => state.pokes);

    const onClickDeletePokemonHandler = (e) => {
        e.stopPropagation();
        dispatch(
            deletePoke({
                id: e.target.name,
            })
        );
    };

    return (
        <SelectedListWrap>
            {selectedPokemon.map((poke) => {
                return poke ? (
                    <PokeDiv key={crypto.randomUUID()} onClick={() => navigate(`/pockedetail/${poke.id}`)}>
                        <PokeImg src={poke.img_url} />
                        <PokeName>{poke.korean_name}</PokeName>
                        <PokeId>No. {poke.id}</PokeId>
                        <Button
                            onClickHandler={(e) => onClickDeletePokemonHandler(e)}
                            name={poke.id}
                            $width="50px"
                            $height="30px"
                            $backgroundColor="red"
                            $border="none"
                            $borderRadius="5px"
                            $color="white"
                            $margin="10px 0px"
                        >
                            삭제
                        </Button>
                    </PokeDiv>
                ) : (
                    <ItemDiv key={crypto.randomUUID()}>
                        <ItemImg src={dexpageEmptyImg} />
                    </ItemDiv>
                );
            })}
        </SelectedListWrap>
    );
};

export default SelectedList;

const SelectedListWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
`;

const PokeDiv = styled.div`
    cursor: pointer;
    border: 1px dashed #d6d6d6;
    border-radius: 10px;
    padding: 20px;
    background-color: white;
    width: 100px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 5px;
    &:hover {
        transform: translateY(-10px);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`;

export const PokeImg = styled.img`
    width: 100px;
    height: 100px;
    object-fit: fill;
`;

export const PokeName = styled.h3`
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    margin: 5px 0px 10px 0px;
`;

export const PokeId = styled.h4`
    text-align: center;
    color: #cecece;
`;

const ItemDiv = styled.div`
    border: 1px dashed #d6d6d6;
    border-radius: 10px;
    padding: 20px;
    background-color: white;
    width: 100px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ItemImg = styled.img`
    width: 50px;
    height: 50px;
`;
