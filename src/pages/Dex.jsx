import Dashboard from "../components/dex/Dashboard";
import PokemonList from "../components/dex/PokemonList";
import styled from "styled-components";

const Dex = () => {
    return (
        <DexWrapper>
            <Dashboard />
            <PokemonList />
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
