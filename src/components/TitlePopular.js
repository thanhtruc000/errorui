import styled from "styled-components";

const Container = styled.div`
    height:30px;
    ${'' /* background-color: #63B17C; */}
    ${'' /* background-color: black; */}
    color:black;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size: 30px;
    font-weight:800;
`;
const TitlePopular = () => {
    return (
       <Container>
          Popular 
       </Container>
    )
}

export default TitlePopular
