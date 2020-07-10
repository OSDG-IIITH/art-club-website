import React from 'react';
function ImgComp(props){

  return <div className="item" >
                    <div className="img-fill">
                    <div className="image" style={{backgroundImage: `url(${props.img})`}}></div>
                    <div className="info">
                        <div>
                          <h1>{props.head1}<br />{props.head2}</h1>
                          <p>{props.p1}<br />
                            {props.p2}</p>
                          <div className="white-button button">
                              <a href="#featured">Discover More</a>
                          </div>
                        </div>
                        </div>
                    </div>
                </div>


}
export default ImgComp;
