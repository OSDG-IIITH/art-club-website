import React,{ useState } from 'react';
import './Carousel1.scss';


import ImgComp from './Carousel1_0.js';
import i1 from '../img/11732.jpg'
import i2 from '../img/slide_1.jpg'
function Carousel1() {
  let  carouselArray = [<ImgComp head1="Suspendisse suscipit" head2="nulla sed" p1="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices" p2="posuere cubilia Curae; Sed at massa turpis" img={i2}/>,
                          <ImgComp head1="Loem ipsum dolor" head2="consectetur" img={i1}/>,
                          <ImgComp head1="Lorem ipsum dolor" head2="consectetur" img={i1}/>,
                          <ImgComp head1="Lorem ipsum dolor" head2="consectetur" img={i1}/>,
                          <ImgComp head1="Lorem ipsum dolor" head2="consectetur" img={i1}/>];
  const [x,setX] = useState(0);

  const goLeft=()=>{
    console.log(x);
  x === 0 ? setX(-100*(carouselArray.length-1)) : setX((x+100));

};
  const goRight=()=>{
    console.log(x);
    (x===-100*(carouselArray.length-1))?setX(0):setX((x-100));
  };
  return (
    <div className="slider">
    {carouselArray.map((item,index)=>{
      return(

        <div key={index} className="Modern-Slider content-section" id="top" style={{transform:`translateX(${x}%)`}}>
        {item}
        </div>
      );
    })
  }

  <button id="goLeft" onClick={goLeft}>&laquo;</button>
  <button id="goRight" onClick={goRight}>&raquo;</button>

  	</div>


  );
}
export default Carousel1;
