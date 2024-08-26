import styled from "styled-components";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import landingPageBackground from "../assets/landingPageBackground.jpg";
import landingPageLogo from "../assets/landingPageLogo.png";

const Landing = () => {
    const navigate = useNavigate();

    const navToDex = () => {
        navigate("/dex");
    };

    return (
        <BackgroundDiv $image={landingPageBackground}>
            <LandingWrapper>
                <LandingLogo src={landingPageLogo} />
                <Button
                    onClickHandler={navToDex}
                    $height="40px"
                    $backgroundColor="red"
                    $color="white"
                    $fontWeight="bold"
                >
                    포켓몬 도감 시작하기
                </Button>
            </LandingWrapper>
        </BackgroundDiv>
    );
};

export default Landing;

const BackgroundDiv = styled.div`
    background-image: url(${(props) => props.$image});
    background-position: center;
    background-size: cover;
`;

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
