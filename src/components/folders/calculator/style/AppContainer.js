import styled from "styled-components";

export const AppContainer = styled.section`
    box-sizing: border-box;
    padding-bottom: 3.5rem;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - 3.5rem);
    background: ${props => props.theme.background};
    color: ${props => props.theme.textColor};
    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;

    @media (min-width: 28em) {
        height: 42rem;
        width: 21.5rem;
        padding-bottom: 0;
    }

    @media (min-width: 35em) {
        top: 10rem;
        left: 10rem;
    }
`;
