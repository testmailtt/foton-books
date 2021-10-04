import styled from 'styled-components';

export const Container = styled.label`
    display: flex;
    margin-top: 3.5rem;
`;
export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    
    background: #fff;
    padding: 15px 35px;
    

    border-radius: 10px;
    
    input{
        border: none;
        width: 40rem;
        margin-left: 15px;
       
        
        font-size: 17px;
        font-weight: 500;
        
        line-height: 18px;
        border: none;
        outline: none;
    }
`;

export const Paragraph = styled.div`
    max-width: 1120px;
    margin: 0 auto;
   
    p{
        margin-left: 12rem;
        margin-top: 2.5rem;
        
        font-size: 25px;
        font-weight: normal;
        color: var(--black-p);
        
        span{
            color: var(--pink);
            font-weight: 500;
        }

        img{
            margin-left: 10px;
        }
    }

`;
