import styled from "styled-components";

export const AppContainer = styled.section`
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - 3.5rem);
    background: ${props => props.theme.background};
    color: #000;
    transition: background 0.2s ease-in-out;

    @media (min-width: 28em) {
        height: 44rem;
        width: 44rem;
    }

    @media (min-width: 50em) {
        top: 7rem;
        left: 7rem;
    }
`;
