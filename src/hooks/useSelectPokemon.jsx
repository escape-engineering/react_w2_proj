import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addPoke, deletePoke } from "../redux/slices/pokeSlices";
import MOCK_DATA from "../mock";
import { check } from "../util";

const useSelectPokemon = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const targetPokemon = MOCK_DATA.find((poke) => poke.id == params.id);

    const backToDex = () => {
        navigate("/dex");
    };

    const selectedPokemon = useSelector((state) => state.pokes);

    const onClickAddPokemonHandler = (e, pokemonData) => {
        e.stopPropagation();
        const emptyIndex = selectedPokemon.findIndex((poke) => poke === undefined);
        if (!check(emptyIndex, selectedPokemon, pokemonData)) return null;
        dispatch(
            addPoke({
                emptyIndex,
                pokemonData,
            })
        );
    };

    const onClickDeletePokemonHandler = (e) => {
        e.stopPropagation();
        dispatch(
            deletePoke({
                id: e.target.name,
            })
        );
    };

    const goToDetail = (id) => {
        navigate(`/pokedetail/${id}`);
    };

    return {
        targetPokemon,
        onClickAddPokemonHandler,
        backToDex,
        goToDetail,
        selectedPokemon,
        onClickDeletePokemonHandler,
    };
};
export default useSelectPokemon;
