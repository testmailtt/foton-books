import styled from "styled-components";

export const Paragraph = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    
    p{
        margin-left: 12rem;
        margin-top: 2.5rem;

        font-size: 20px;
        font-weight: 500;
        a{
            margin-left: 30rem;
            font-size: 15px;
            text-decoration: none;
            color: var(--blue);
        }
    }
`;

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
`;

export const Content = styled.div`
    div{
        margin-top: 2rem;
        margin-left: 12rem;
        
        img{
            width: 20rem;
        }
    }

`;