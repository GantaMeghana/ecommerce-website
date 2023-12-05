import Link from 'next/link';
const Footer=()=>{
    return(
       
                
                
                   <div class="bg-dark p-2 text-white" style={{height:"60px"}}>
                      <div class="row">
                        <div class="col">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFQg-a06HyjCkdZIZc4CGawQocLSEhQPbAg&usqp=CAU" alt="logo" className="thumnail" width="150px" height="50px" />
                        </div>
                        <div class="col-2">
                            <img src="https://icon-library.com/images/location-icon-white-png/location-icon-white-png-20.jpg"  width="100px" height="50px"/>
                        </div>
                        <div class="col-5">
                            <form class="d-flex" role="search" >
                                   <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                   <button class="btn btn-outline-success" type="submit"><a href="/search">SERCH</a></button>
                            </form>
                        </div>
                        <div class="col">
                            <a class="nav-link" class="b-4 g-col-5" href="/productlist">Productlist</a>
                        </div>
                        <div class="col">
                            <a class="nav-link" class="b-7 g-col-6" href="/login">Login</a>
                        </div>
                        <div class="col">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_pYUE1g2MHOK7zYL5Uc9iQd8y4HKsbqQaX0RG2jU2YhI1apkiRSyJEza5MKU07Gkbg8M&usqp=CAU" width="100px" height="50px"/>
                            <a class="nav-link" class="b-7 g-col-6" href="/cart">cart</a>
                        </div>
                      
                        
                        
                      </div>
                   </div>
                      
           
          
    )
}
export default Footer;
