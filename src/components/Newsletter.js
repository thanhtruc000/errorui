import React from 'react'
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  align-items: center;
  justify-content: center;
  height: 60vh;
`;
const Image = styled.img`
    width: 100%;
`;


const Newsletter = () => {
    return (
        <Container>
            <Image src="https://www.converse.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dw0389e46e/firstspirit/media/homepage_1/2021_holiday_3/12_16/D-Converse-GBL-HP-12-16-P7-Email-Acc-HO21.jpg"/>
           
        </Container>
    )
}

export default Newsletter
