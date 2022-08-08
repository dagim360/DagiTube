import React from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Container  = styled.div`
position: sticky;
top: 0;
background-color: white;
height: 56px;

`;

const Wrapper  = styled.div`
display: flex;
align-items: center;
height: 100%;
justify-content: flex-end;
padding:0px 20px;
position: relative;
`;

const Search  = styled.div`
width: 40%;
position: absolute;
left: 0;
right: 0;
margin:auto;
display:flex;
justify-content:space-between;
align-items: center;
padding: 5px;
border: 1px solid #ccc;
border-radius: 3px;
`;

const Input  = styled.input`
border:none;
background-color: transparent;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  font-weight: 500;
 
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='search'/>
          <SearchOutlinedIcon/>
        </Search>
        <Button> <AccountCircleOutlinedIcon/>SIGN IN</Button>
      </Wrapper>
    </Container>
  )
}

export default Navbar
