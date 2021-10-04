import { createGlobalStyle } from 'styled-components'; 

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #fefaf6;
        --white: #fffcf9;
        
        -black: #000000;
        --black-p: #020101;
	    --gray-900: #313131;
        --gray-800: #3f4043;
        --gray-700: #54565a; 
        --gray-600: #838281;
        --gray-500: #bfbebf;    
        --gray-400: #dcd8d8;           
        --gray-100: #f0f0f0;
        --gray-50: #fdfcfc;
        --green: #EEF5DB;
        --pink: #fe6a79;
        --yellow-light: #fff6e5;
        --blue: #4abdf1;
        --blue-900: #00173d;
        --purple: #451475;
    }
    
    html{
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Roboto', sans-serif;
        background: var(--white);
        -webkit-font-smoothing: antialiased;
    }
`;