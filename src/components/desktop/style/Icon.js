import styled from "styled-components";
// import img for Folder PDF

const Icon = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 5.5rem;
    height: 5.5rem;
    border: 1px solid transparent;

    img {
        height: 3.75rem;
        width: 5rem;
    }

    &&:hover {
        background: rgba(174, 192, 229, 0.2);
        border: 1px solid rgb(220, 227, 242, 0.5);
        cursor: pointer;
    }

    &&:focus {
        background: rgba(174, 192, 229, 0.4);
        border: 1px solid rgb(220, 227, 242, 0.7);
    }
`;

export default Icon;