import React from 'react'
import './BlogView.scss'



const BlogView = () => {
    return (
        <div className="column">
            <div className="main-container m-auto">
                <div className=" row">            
                    <div className="column col-sm-9 col-md-9 col-lg-9">
                       <section className="bg-position" >
                                <div className="">           
                                    <nav className="d-flex" aria-label="breadcrumb">
                                        <ol className="breadcrumb mb-0 pl-0 pb-0 bg-none" style={{"background": 'none'}}>
                                            <li className="breadcrumb-item">Home</li>
                                            <li className="breadcrumb-item active" aria-current="page" style={{color: 'inherit'}}>Contact</li>
                                        </ol>
                                    </nav>
                                </div>
                        </section>
                            <hr/>
                            <div className="row">
                                <div className="column col-sm-5  position-relative" style={{"overflow": 'hidden'}}>
                                        <div id="main" className="">
                                            <img style={{"width":"380px","height":"220px"}} className="b-rounded b-shadow card-img-top" src="https://www.w3schools.com/w3css/img_lights.jpg"></img>
                                        </div>
                                </div>
                                <div className="column col-sm-7 position-relative" style={{"overflow": 'hidden'}}>
                                    <div class="column relative courseMeta">
                                        <h2 class="title mt-0 mb-0">
                                            <span itemprop="name">MERN + JS + TS + Ds and algorithms</span></h2>									
                                        <div>
                                            <p><h6 className="bestseller">Bestseller</h6></p>
                                            <p><h6>Beginner to Advance Level</h6></p>
                                            <p><h6>For Queries :&nbsp;<a href="tel:+91 8130596876" >+91 8130596876 </a></h6></p>

                                            <p><strong>LIFETIME ACCESS</strong></p>
                                        </div>	
                                        <p class="ml-0 mb-0 text-primary"><i class="material-icons icon-text">layers</i> 4 Courses</p>
                                        <p class="ml-0 mb-0 language"><small>Language:  <span class="text-primary">Hindi</span></small></p>
                                        
                                        
                                            <div class="mt-2">
                                                <div class="productPricing">
                                                        <div class="v1-20000-1450 p1 vvpricing">
                                                        <span style={{'text-decoration': 'line-through'}}> <i class="fab fa-inr" aria-hidden="true"></i> <del> 2000</del></span> &nbsp;
                                                        92% OFF
                                                        
                                                            <br/>
                                                        <h2 class="text-warning"> <del>&#2352;</del>1450 </h2>                                                                                   		
                                                        </div>
                                                    </div>
                                            </div>									
                                            <div class="columns cartBtns mt-2">
                                                <div class="column col-5 col-md-6">
                                                    <button type="button" data-toggle="modal" data-target="#addModal" class="btn btn-lg btn-primary buyBtn btn-block">Add to Cart</button>
                                                </div>
                                            </div>	
                                        
                                    </div>

                                    <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content px-4 py-2">
                                            <div class="modal-header border-0">                                                                                                                       
                                                    <div class="modal-title h5" id="addModalLabel">
                                                        <i className="fa fa-cart-arrow-down"></i> Cart (<span class="cartCount">1</span> items)
                                                    </div>                                                            
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>

                                                <div class="modal-body" style={{"max-height": "70vh"}} >
                                                <div class="content">		          
                                                    <div class="text-center msg loading" style={{"display": "none"}}></div>
                                                    <div class="text-center msg noItems" style={{"display": "none"}}>
                                                        There are no items in your cart.
                                                        <button class="btn btn-lg close" style={{"margin":"20px auto","display": "block"}}>Continue Browsing</button>
                                                    </div>
                                                    <div class="items msg">
                                                        <div class="m-0 cartDiv">
                                                            <table class="table cartTable">
                                                                <thead>
                                                                    <tr>
                                                                        <th colspan="2">Item Details</th>
                                                                        <th class="text-right">Price</th>
                                                                        <th style={{"width":"50px"}}></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        
                                                                        <td style={{"width":"150px"}}>				
                                                                            
                                                                            <img alt="Core Python Version 3.8 cover" style={{"width":"100%","max-height":"100px"}} class="img-fit-contain"  src="https://dz8fbjd9gwp2s.cloudfront.net/courses/5ec058570cf23c7fa506cf7b/5ec058570cf23c7fa506cf7b_scaled_cover.jpg?v=1"/>
                                                                        </td>
                                                                        <td class="itemTitle">&nbsp;Core Python Version 3.8<div class="text-gray variantDescription">Self Paced + Chat Support | Lifetime</div></td>
                                                                        <td class="text-right curr">495 <br/> <small>584.1 incl. 18% GST</small></td>
                                                                        <td><button class="btn btn-sm btn-error btn-action circle removeItemBtn" ><i class="fa fa-times" aria-hidden="true"></i></button></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div class="suggestCart mt-2 bg-gray p-2" style={{"display": 'none'}}><h6>You may also be interested in</h6>
                                                            <div class="columns loading"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>

                                                <div class="modal-footer border-0">
                                                    <div class="col-12 row clearfix clearfix" style={{"display": 'block'}}>
                                                        <div class="col-8 p-0 float-left text-left text-gray">Note: Promo Codes can be applied on checkout page</div>
                                                        <div class="col-4 p-0 float-right text-right">Total Amount: <span class="text-primary curr">₹<span class="totalAmount">584.10</span></span></div>
                                                    </div>
                                                    
                                                    <div class="row col-12 clearfix mt-2" style={{"display": 'block'}}>
                                                        <button class="btn float-left close">Continue Browsing</button>
                                                        <a class="btn btn-success float-right" href="/s/checkout">CHECKOUT</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>                                       
                                </div>
                            </div>                         
                    </div>

                    <div className="column col-sm-3 col-md-3 col-lg-3" style={{'padding-top': '30px'}}>
                        {/*right card 1*/}
                        <div className="py-4" >
                            <div className="m-auto b-shadow bg-white b-rounded">                                                    
                                <div id="main">
                                    <img style={{"width":"270px","height":"170px"}} className="card-img-top" src="https://www.w3schools.com/w3css/img_lights.jpg"></img>
                                </div>
                                <div id="textbois" className="p-3">
                                    <h6 className="">test</h6>                                                            
                                    <h6 className="text-info font-weight-normal">AC</h6>
                                    <a href="mailto:limecicila@gmail.com">limecicila@gmail.com</a>
                                    <ul className="social mb-0 list-inline mt-3">
                                        <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fab fa-twitter"></i></a></li>
                                        <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li>
                                        <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                                    </ul>
                                </div>                            
                            </div>
                        </div>
                        {/*right card 2*/}
                        <div className="py-4" >
                            <div className="m-auto b-shadow bg-white b-rounded">                                                    
                                <div id="main">
                                    <img style={{"width":"270px","height":"170px"}} className="card-img-top" src="https://www.w3schools.com/w3css/img_nature.jpg"></img>
                                </div>
                                <div id="textbois" className="p-3">
                                    <h6 className="">test</h6>                                                            
                                    <h6 className="text-info font-weight-normal">AC</h6>
                                    <a href="mailto:limecicila@gmail.com">limecicila@gmail.com</a>
                                    <ul className="social mb-0 list-inline mt-3">
                                        <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fab fa-twitter"></i></a></li>
                                        <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li>
                                        <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                                    </ul>
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            hiii this is Form

            
            <div class="container">
                <div class="row">
                    <div class="col-md-9">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="First Name *" value="" />
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Last Name *" value="" />
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Password *" value="" />
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control"  placeholder="Confirm Password *" value="" />
                                </div>
                                <div class="form-group">
                                    <div class="">
                                        <label class="radio inline"> 
                                            <input type="radio" name="gender" value="male" checked />
                                            <span> Male </span> 
                                        </label>
                                        <label class="radio inline"> 
                                            <input type="radio" name="gender" value="female" />
                                            <span>Female </span> 
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Your Email *" value="" />
                                </div>
                                <div class="form-group">
                                    <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control" placeholder="Your Phone *" value="" />
                                </div>
                                <div class="form-group">
                                    <select class="form-control">
                                        <option class="hidden"  selected disabled>Please select your Sequrity Question</option>
                                        <option>What is your Birthdate?</option>
                                        <option>What is Your old Phone Number</option>
                                        <option>What is your Pet Name?</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Enter Your Answer *" value="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



         

    )
}

export default BlogView
