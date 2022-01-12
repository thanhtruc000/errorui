import styled from "styled-components";
import {mobile} from "../responsive";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column; 
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  font-weight:600;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const LinkTo = styled.p`
  margin: 5px 10px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  text-align:center;
  font-weight:800;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const dispatch = useDispatch();
  const {isFetching,error} = useSelector((state)=> state.user)

  const handleClick = (e) =>{
    e.preventDefault();
    login(dispatch, { username, password });
    
  }
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Username" 
                    onChange={(e)=> setUsername(e.target.value)}
                    />
                    <Input type="password" placeholder="Password" 
                    type ="password"
                    onChange={(e)=> setPassword(e.target.value)}                   
                    />
                    <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
                    {error && <Error>Something went wrong...</Error>}
                    <LinkTo>DO NOT YOU REMEMBER THE PASSWORD?</LinkTo>
                    <Link style={{textDecoration:'none', color:'black', textAlign:'center', fontWeight:'bold'}} to="/register">CREATE A NEW ACCOUNT</Link>
                    {/* <Link> CREATE A NEW ACCOUNT</Link> */}
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
