import Link from 'next/link';
import React from 'react';
const Grid=()=>{
    return(
        <div class="mx-auto p-2" style={{width:"1100px"}}>
           <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" >
              <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="https://m.media-amazon.com/images/I/717RUPA1bDL._SX3000_.jpg" alt="First slide" className="img-thumnail" width="150px" height="px"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" atl="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" alt="Third slide" />
                    </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            
           </div>
         
            
           
           
           
           
       </div>
    )
}
export default Grid;
