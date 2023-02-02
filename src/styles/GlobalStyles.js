import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
background:${({ theme }) => theme.offWhite}; 
}

*{
    box-sizing:border-box;
}

p{
    color:${({ theme }) => theme.grayishBlue};
    font-size:15px;
}

img{
    max-width:100%; 
    max-height:100%;
}
`;
