import React, {useState} from "react";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

import "./Product.css";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h3`
  font-weight: 600;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterTitleSize = styled.span`
  margin-left: 30px;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  border:  2px double black;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid  black;
  background-color: white;
  cursor: pointer;
  font-weight: 800;
  &:hover{
      background-color: #B0B0B0 ;
  }
`;

const ImageSize = styled.img`
  width:100%;
`;


const Product = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = ()=>{
    setModal(!modal);
  };
  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8ca8607f4c344ffd966eaca6011245ac_9366/Ultraboost_21_Shoes_White_FY0379_01_standard.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>ULTRABOOST 21</Title>
          <Desc>
          DESCRIPTION <br/>
          Prototype after prototype. Innovation after innovation. Testing after testing. 
          Meet us in the hot pursuit of the pinnacle harmonization of weight, cushioning, and responsiveness. Ultraboost 21. Say hello to incredible energy return.

          </Desc>
          <Price>$ 99.90</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="white" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
              <FilterColor color="pink"/>
              <FilterColor color="purple"/>
            </Filter>
            <Filter> 
            <FilterTitleSize>Size</FilterTitleSize>
              <FilterSize>
                <FilterSizeOption>39</FilterSizeOption>
                <FilterSizeOption>40</FilterSizeOption>
                <FilterSizeOption>41</FilterSizeOption>
                <FilterSizeOption>42</FilterSizeOption>
                <FilterSizeOption>43</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
          {/* <ImageSize src="https://giaycaosmartmen.com/wp-content/uploads/2020/09/bang-size-giay-converse.png"></ImageSize> */}
            <button onClick={toggleModal} className="btn-modal">
                Size Chart
            </button>
            {modal && (
              <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                  <h2>Size Chart</h2>
                  <ImageSize src="https://giaycaosmartmen.com/wp-content/uploads/2020/09/bang-size-giay-converse.png"></ImageSize>
                  <button className="close-modal" onClick={toggleModal}>
                      CLOSE
                  </button>
                </div>
              </div>
            )}
          
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;