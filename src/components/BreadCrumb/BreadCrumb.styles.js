import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    background: var(--medGrey);
    color: var(--white);
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    max-width: var(--maxWidth);
    padding: 0 10px;
    color: var(--white);
    
    span {
        font-size: var(--fontMed);
        
        
        padding-right: 10px;
        color: var(--white);

        @media screen and (max-width: 768px) {
            font-size: var(--fontSmall);
        }
    }
`;