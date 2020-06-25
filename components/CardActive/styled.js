import styled from 'styled-components';

const Card = styled.div`
  width: 23%;
  background-color: #eeeeee;
  margin-bottom:3%;
  margin-right: 2%;

`;

const Card_Img = styled.div`

figure{
    overflow: hidden;
    height: 85px;
    border-bottom: 6px solid #6418DC
    }

figure img{
    width: 100%;
    height: auto;
}

`

const Card_Info = styled.div`
   padding: 8% 8% 2% 10%;

div {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

div img {
  width: 8%;
  height: 8%;
  margin-right: 4%;
}

p {
  color: #707070;
  font-size: 0.6em;
}

h3 {
  font-size: 1em;
  font-weight: 600;
  padding-bottom:0;
  color: #272727;
}

h4 {
  font-size: 0.8em;
  color: #6418dc;
  font-weight: 600;
  padding-bottom: 0;
  padding-top: 0.5%;
}

h5 {
  font-size: 0.8em;
  margin:0 0 1% 0;
  color: #272727;
  font-weight: 500;
  text-align: left;
  font-family: 'Maison Neue Extended';
}

ul {
  text-decoration: none;
  list-style-type: none;
  padding: 0;

}
li {
  text-align: left;
  margin-bottom: 4%;
}
`;

export {
  Card_Info,
  Card_Img,
  Card
};