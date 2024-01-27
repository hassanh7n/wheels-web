import React from 'react'
import styled from 'styled-components';
const Cards = ({name, price, images, location}) => {
    const [state, setState] = React.useState(false);
    function changeState(){
        setState((prev) => {
            return !prev
        })
    }
  return (
        <Wrapper onClick={changeState} className="cards">
            {/* {badgeText && <div className="badge">{badgeText}</div>}
                 */}
                 <img className="Cardimg" src={images[0]?.url}alt="" />
            <div className="card1">
                {/* <img className="starimg" src="images.png" alt="" /> */}
                <span className="name">{name}</span>
                <span className="span">{location}</span>
            </div>
            {/* <p className="info">{props}</p> */}
            <p className="price">Rs : <span className="dollar">{price}</span></p>
            {/* {state && <div>
                <New 
                data={props.item.discription}
                />
            </div> } */}
        </Wrapper>
    
  )
}

const Wrapper = styled.main`

  margin-left: 30px;
  position: relative;
  background-color: white;
  padding: 5px 5px 5px 5px;
  border-radius: 10px;
  border-color: red;
  margin-bottom: 20px;

  box-shadow: 10px 10px 8px 10px rgba(0,0,0,0.42);
  -webkit-box-shadow: 10px 10px 8px 10px rgba(0,0,0,0.42);
  -moz-box-shadow: 10px 10px 8px 10px rgba(0,0,0,0.42);

.badge{
  position: absolute;
  top: 7px;
  left: 160px;
  background-color: white;
  padding: 5px 7px;
  border-radius: 3px;
  font-weight: bold;
}
.Cardimg{
    margin-top : 30px;
  width: 230px;
  height: 150px;
  border-radius: 10px;
}
.card1{
  display: flex;
  margin-top: 10px;
  padding-left: 5px;
}
.starimg{
  width: 20px;
  margin-left: 5px;
}
.name{
    color : black;
    font-weight : bold; 
}
.span{
  color: gray;
  padding-left: 60px;
}
.info{
  font-size: 20px;
  color: slategray;
  padding-left: 5px;
}
.price{
    color : green;
  font-size: 20px;
}
.dollar{
  font-weight: 700;
  padding-left: 5px;
}
.Footer{
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding-top: 50px;
  height: 8vh;
  width: 100vw;
  font-size: x-large;
  font-weight: 300;
}
.price{
  padding-left: 5px;
}
`

export default Cards