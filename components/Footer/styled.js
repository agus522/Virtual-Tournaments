import styled from 'styled-components';
{
  /* Aca traigo el styled para escribir el css*/
}

{
  /* Este es el styled el codigo delheader*/
}

const ContenedorFooter = styled.div`
  * {
    padding: 0;
    margin: 0;
  }
width: 40%;
margin: 0 auto;
background-color: #272727;


h3{
    text-align: center;
    font-size:2em;
    font-weight:800;
    padding:3%;
}

nav {
    width: 70%;
    margin: 0 auto;
    padding:3%;
  }
  
  
  nav ul li{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav ul li a {
    text-decoration: none;
    color: #eeeeee;
    font-size: 1em;
    font-weight: 600;
    width: 5%;
  }

  p{
      text-align: center;
      color: #B4B4B4;
      
  }

  p:nth-child(even){
      margin-bottom: 2%;
  }

`;

const Logo = styled.div`

    width: 30%;
    margin: 0 auto;
    padding: 4%;

`





export { ContenedorFooter, Logo,};