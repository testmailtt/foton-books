import styled from 'styled-components';

export const Paragraph= styled.div`
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

export const Container= styled.div`
    max-width: 1120px;
    margin: 0 auto;
`;

export const Content = styled.div`
    div{
        width: 500px;
        height: 100px;
        border-radius: 5px;
        margin-top: 4rem;
        background-color: var(--green);

        margin-left: 12rem;

        cursor: pointer;
        img{
            margin-top: -2rem;
            width: 6rem;
        }
        .title-book{
        color: var(--black-p);
        font-weight: 500;
        margin-top: -7.2rem;
        margin-left: 30%;
        margin-right: 20%;
        font-size: 25px;
        font-family: 'Playfair Display', serif;
    }
    h3{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        margin-left: 30%;
        font-size: 14px;
        margin-top: 5px;
    }
    p{  
        font-family: 'Roboto', sans-serif;
        color: var(--black-p);
        margin-left: 30%;
        font-size: 10px;

        .span-original{
            font-family: 'Roboto', sans-serif;
            color: var(--pink);
        }
    }
    .iconOriginals{
        width: 16px;
        margin-top: 22px;
    }
    }    
`; 