import React from "react";
import styled from "styled-components";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();

    const navToDex = () => {
        navigate("/dex");
    };

    return (
        <div>
            <LandingWrapper>
                <LandingLogo src="src/assets/landingPageLogo.png" />
                <Button
                    onClickHandler={navToDex}
                    width="200px"
                    height="40px"
                    backgroundColor="red"
                    border="none"
                    borderRadius="5px"
                    color="white"
                    fontSize="18px"
                    fontWeight="bold"
                >
                    포켓몬 도감 시작하기
                </Button>
            </LandingWrapper>
        </div>
    );
};

export default Landing;

const LandingWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const LandingLogo = styled.img`
    width: 800px;
    height: 300px;
`;
