//import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  ${'' /* background-color: coral; */}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

// const Desc = styled.div`
//   font-size: 24px;
//   font-weight: 300;
//   margin-bottom: 20px;
//   ${mobile({ textAlign: "center" })}
// `;

// const InputContainer = styled.div`
//   width: 50%;
//   height: 40px;
//   background-color: white;
//   display: flex;
//   justify-content: space-between;
//   border: 1px solid lightgray;
//   ${mobile({ width: "80%" })}
// `;

// const Input = styled.input`
//   border: none;
//   flex: 8;
//   padding-left: 20px;
// `;

// const Button = styled.button`
//   flex: 1;
//   border: none;
//   background-color: teal;
//   color: white;
// `;

const Newsletter = () => {
  return (
    <Container>
      {/* <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer> */}
     <Image src="https://snkrvn.com/wp-content/uploads/2021/02/CLOT-x-Nike-AIr-Max-1-Kiss-of-The-Death-11.jpg"/>
    </Container>
  );
};

export default Newsletter;