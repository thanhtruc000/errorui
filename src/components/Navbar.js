import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { Badge } from '@material-ui/core';
import {mobile} from "../responsive";
//import {userSelector} from "react-redux";
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;
const Left = styled.div`
  flex:1;
  display:flex;
  align-items:center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor:pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display:flex;
  align-items:center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;
const Center = styled.div`
  flex:1;
  text-align:center;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`;
const Right = styled.div`
 flex:1;
 display:flex;
 align-items:center;
 justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor:pointer;
  margin-left:25px;
  font-weight:800;
`;


const Navbar = () => {
  // const quantity = useSelector(state=>state.cart.quantity)
    return (
       <Container>
            <Wrapper>
                <Left>
                    {/* <Language>EN</Language>
                    <SearchContainer>
                       <Input/>
                       <Search style={{color:"gray", fontSize:16}}/>
                    </SearchContainer> */}
                    <Link style={{textDecoration:'none', color:'black'}} to="/">
                      <MenuItem>HomePage</MenuItem>
                    </Link>
                    <Link style={{textDecoration:'none', color:'black'}} to="/productList">
                      <MenuItem>Product</MenuItem>
                    </Link>
                    <MenuItem>Blog</MenuItem>
                </Left>
                <Center>
                    <Logo>ERROR</Logo>
                </Center>
                <Right>
                    <Link style={{textDecoration:'none', color:'black'}} to ="/register">
                      <MenuItem>REGISTER</MenuItem>
                    </Link>  
                    <Link style={{textDecoration:'none', color:'black'}} to ="/login">
                      <MenuItem>SIN IN </MenuItem>
                    </Link>
                    <Link style={{textDecoration:'none', color:'black'}} to ="/cart">
                      <MenuItem>
                          <Badge badgeContent={4} color="secondary">
                              <ShoppingCartOutlined />
                          </Badge>
                      </MenuItem>
                    </Link>  
                </Right>
            </Wrapper>
          
       </Container>
    )
}

export default Navbar
