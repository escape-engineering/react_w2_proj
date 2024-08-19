import { toast } from "react-toastify";

export const check = (emptyIndex, selectedPokemon, pokemonData) => {
    if (emptyIndex === -1) {
        toast.error("포켓몬 선택은 6개까지 가능합니다!");
        return false;
    }
    if (selectedPokemon[0] !== undefined) {
        const checkDuplication = selectedPokemon.some((poke) => poke?.id === pokemonData.id);
        if (checkDuplication) {
            toast.error("이미 해당 포켓몬을 선택하였습니다!");
            return false;
        }
    }
    return true;
};
