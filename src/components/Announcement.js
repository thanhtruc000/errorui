import styled from "styled-components";

const Container = styled.div`
    height:30px;
    ${'' /* background-color: #63B17C; */}
    background-color: black;
    color:white;
    display:fle;
    align-items:center;
    justify-content:center;
    font-size: 14px;
    font-weight:500;
`;

const Announcement = () => {
    return (
       <Container>
           {/* Super Deal! Free Shipping on Orders Over $50 */}
           <marquee style={{fontSize:'14px', fontWeight:'600'}}>60-DAY EXTENDED FREE RETURNS</marquee>
       </Container>
    )
}

export default Announcement
