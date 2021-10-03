import styled from 'styled-components';

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
            //cursor: pointer;

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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 2rem;
    margin-left: 12rem;
    gap: 2rem;

    .thumbBook{
        border-radius: 5px;
        background-blend-mode: pass;
        background-color: var(--blue-900);
        cursor: pointer;
    }
    .oval{
        background: transparent;
    }
    .title-book{ 
        margin-top: -6rem;
        background: transparent;
        color: var(--yellow-light);
        margin-left: 15px;
        font-size: 35px;
    }
    .autor{ 
        font-family: 'Roboto', sans-serif;
        background: transparent;
        color: var(--yellow-light);
        font-size: 14px;
        font-style: italic;
        margin-left: 15px;
        margin-top: 2px;
        font-weight: 300;
    }
    .squareIcon{
        margin-left: 15px;
        margin-top: 20px;
        
    }
    p{
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        //margin-top: 2px;
        color: var(--yellow-light);
    }
    span{
        font-family: 'Roboto', sans-serif;
        margin-left: 5px;
        color: var(--yellow-light);
        font-size: 15px;
        
    }
    .book{
        margin-top: -7rem;
        margin-left: 13rem;
        width: 6rem;
    }
`;