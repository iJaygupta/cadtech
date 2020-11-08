import React from 'react';

export default class CheckoutModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {

        let cartItems = this.props.cartItems.map(product => {
            return (
                <tr>
                    <td style={{ "width": "150px" }}>
                        <img alt="Core Python Version 3.8 cover" style={{ "width": "100%", "max-height": "100px" }} class="img-fit-contain" src={product.filename} />
                    </td>
                    <td class="itemTitle">&nbsp;{product.name}<div class="text-gray variantDescription">Self Paced + Chat Support | Lifetime</div></td>
                    <td class="text-right curr">{product.price} <br /> <small>584.1 incl. 18% GST</small></td>
                    <td><button class="btn btn-sm btn-error btn-action circle removeItemBtn" ><i class="fa fa-times" aria-hidden="true"></i></button></td>
                </tr>
            )
        })

        return (
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

                        <div class="modal-body" style={{ "max-height": "70vh" }} >
                            <div class="content">
                                <div class="text-center msg loading" style={{ "display": "none" }}></div>
                                <div class="text-center msg noItems" style={{ "display": "none" }}>
                                    There are no items in your cart.
                                                        <button class="btn btn-lg close" style={{ "margin": "20px auto", "display": "block" }}>Continue Browsing</button>
                                </div>
                                <div class="items msg">
                                    <div class="m-0 cartDiv">
                                        <table class="table cartTable">
                                            <thead>
                                                <tr>
                                                    <th colspan="2">Item Details</th>
                                                    <th class="text-right">Price</th>
                                                    <th style={{ "width": "50px" }}></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartItems}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="suggestCart mt-2 bg-gray p-2" style={{ "display": 'none' }}><h6>You may also be interested in</h6>
                                        <div class="columns loading"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer border-0">
                            <div class="col-12 row clearfix clearfix" style={{ "display": 'block' }}>
                                <div class="col-8 p-0 float-left text-left text-gray">Note: Promo Codes can be applied on checkout page</div>
                                <div class="col-4 p-0 float-right text-right">Total Amount: <span class="text-primary curr">₹<span class="totalAmount">584.10</span></span></div>
                            </div>

                            <div class="row col-12 clearfix mt-2" style={{ "display": 'block' }}>
                                <button class="btn float-left close">Continue Browsing</button>
                                <a class="btn btn-success float-right" href="/register">CHECKOUT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}