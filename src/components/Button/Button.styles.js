import styled from "styled-components";

export const Wrapper = styled.button`
    display: block;
    background: var(--darkGrey);
    width: 25%;
    min-width: 200px;
    height: 60px;
    border-radius: 30px;
    color: var(--white);
    font-size: var(--fontBig);
    margin: 20px auto;
    border: 0;
    outline: none;
    cursor: pointer;

    transition: all 0.3s;

    &:hover {
        opacity: 0.8;
    }

`;