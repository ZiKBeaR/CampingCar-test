import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  padding: 1%;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

`
////////////////////////////////////////////////////////////////////////

export const Left = styled.div`
flex: 1;
display: flex;

.Linkk {
  text-decoration: none;
}
`
export const Logo = styled.div`
font-weight: 600;
font-size: 38px;
line-height: 46px;
color: #006DAB;
text-decoration: none;
-webkit-user-select: none; /* Safari */
-ms-user-select: none; /* IE 10 and IE 11 */
user-select: none; /* Standard syntax */

:hover{
  cursor: pointer;
  transform: scale(1.01);
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.1));
}
`
/////////////////////////////////////////////
export const Center = styled.div`
flex: 4;
display: flex;
align-items: center;
justify-content: space-between;
`
export const Navbartext = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-weight: 600;
font-size: 16px;
line-height: 20px;
color: #373737;
padding: 1% 2%;
img {
  margin-left: 8px;
}

.downicon{
  display: flex;
  margin-left: 8px;
}
:hover{
  cursor: pointer;
  background: rgba(0, 109, 171, 0.05);
  border-radius: 10px;
}

a {
  text-decoration: none;
  color: #373737;
}

.righticon{
  display: none;
}

@media only screen and (max-width: 535px) {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  text-align: left;
  padding: 2% 3%;
  /* border: 2px solid red;  */
  margin: 3%;

  .downicon{
  display: none;
}

.righticon{
  display: flex;
}

:hover{
  .righticon{
    margin-left: 60%;
    transition: 0.4s;
  }
}
}
`

export const Signin = styled.div`

`
export const Myorders = styled.div`

`
export const Logout = styled.div`

`
export const Settings = styled.div`

`


///////////////////////////////////////////
export const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`

export const Cart = styled.div`
margin-left: 5%;


:hover{
  cursor: pointer;
}
`
export const User = styled.div`
margin-left: 5%;


:hover{
  cursor: pointer;
}
`
export const Languages = styled.div`
margin-left: 5%;
font-weight: 500;
font-size: 16px;
line-height: 20px;
color: #373737;

:hover{
  cursor: pointer;
}

img{
  margin-left: 5px;
}
`

