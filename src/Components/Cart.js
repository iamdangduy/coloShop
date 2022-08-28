import { useContext } from "react";
import Context from "./store/Context";

function Cart() {
  const addCart = useContext(Context);
  console.log(addCart.item);
  return (
    <section className="cart-page section-tb-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-xs-12 col-sm-12 col-md-12 col-lg-8">
            <div className="cart-area">
              <div className="cart-details">
                <div className="cart-item">
                  <span className="cart-head">My cart:</span>
                  <span className="c-items">4 item</span>
                </div>

                {/* Product Start */}
                {addCart.item.map((element, index) => (
                  <div className="cart-all-pro" key={index}>
                  <div className="cart-pro">
                    <div className="cart-pro-image">
                      <a href="product.html">
                        <img style={{maxWidth: "150px"}}
                          src={element.imageLink}
                          className="img-fluid"
                          alt="image"
                        />
                      </a>
                    </div>
                    <div className="pro-details">
                      <h4>
                        <a href="product.html">{element.productName}</a>
                      </h4>
                      <span className="pro-size">
                        <span className="size">Size:</span> 5kg
                      </span>
                      <span className="pro-shop">Petro-demo</span>
                      <span className="cart-pro-price">$384.51 CAD</span>
                    </div>
                  </div>
                  <div className="qty-item">
                    <div className="center">
                      <div className="plus-minus">
                        <span>
                          <a
                            href="javascript:void(0)"
                            className="minus-btn text-black"
                          >
                            -
                          </a>
                          <input type="text" name="name" defaultValue={1} />
                          <a
                            href="javascript:void(0)"
                            className="plus-btn text-black"
                          >
                            +
                          </a>
                        </span>
                      </div>
                      <a href="grid-list.html" className="pro-remove">
                        Remove
                      </a>
                    </div>
                  </div>
                  <div className="all-pro-price">
                    <span>$384.51 CAD</span>
                  </div>
                </div>
                ))}
                {/* Product End */}
              </div>
            </div>
            {/* <div className="cart-area">
              <div className="cart-details">
                <div className="cart-all-pro">
                  <div className="cart-pro">
                    <div className="cart-pro-image">
                      <a href="product.html">
                        <img
                          src="image/cart-page/cart-1/image3.jpg"
                          className="img-fluid"
                          alt="image"
                        />
                      </a>
                    </div>
                    <div className="pro-details">
                      <h4>
                        <a href="product.html">Fresh healthy food</a>
                      </h4>
                      <span className="pro-size">
                        <span className="size">Size:</span> 5kg
                      </span>
                      <span className="pro-shop">Multiwebinfo</span>
                      <span className="cart-pro-price">$230.00 CAD</span>
                    </div>
                  </div>
                  <div className="qty-item">
                    <div className="center">
                      <div className="plus-minus">
                        <span>
                          <a
                            href="javascript:void(0)"
                            className="minus-btn text-black"
                          >
                            -
                          </a>
                          <input type="text" name="name" defaultValue={1} />
                          <a
                            href="javascript:void(0)"
                            className="plus-btn text-black"
                          >
                            +
                          </a>
                        </span>
                      </div>
                      <a href="grid-list.html" className="pro-remove">
                        Remove
                      </a>
                    </div>
                  </div>
                  <div className="all-pro-price">
                    <span>$460.00 CAD</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-area">
              <div className="cart-details">
                <div className="cart-all-pro">
                  <div className="cart-pro">
                    <div className="cart-pro-image">
                      <a href="product.html">
                        <img
                          src="image/cart-page/cart-1/image2.jpg"
                          className="img-fluid"
                          alt="image"
                        />
                      </a>
                    </div>
                    <div className="pro-details">
                      <h4>
                        <a href="product.html">Fresh green orange</a>
                      </h4>
                      <span className="pro-size">
                        <span className="size">Size:</span> 5kg
                      </span>
                      <span className="pro-shop">Vegina-store</span>
                      <span className="cart-pro-price">$109.20 CAD</span>
                    </div>
                  </div>
                  <div className="qty-item">
                    <div className="center">
                      <div className="plus-minus">
                        <span>
                          <a
                            href="javascript:void(0)"
                            className="minus-btn text-black"
                          >
                            -
                          </a>
                          <input type="text" name="name" defaultValue={1} />
                          <a
                            href="javascript:void(0)"
                            className="plus-btn text-black"
                          >
                            +
                          </a>
                        </span>
                      </div>
                      <a href="grid-list.html" className="pro-remove">
                        Remove
                      </a>
                    </div>
                  </div>
                  <div className="all-pro-price">
                    <span>$109.20 CAD</span>
                  </div>
                </div>
                <div className="other-link">
                  <ul className="c-link">
                    <li className="cart-other-link">
                      <a href="grid-list.html">Update cart</a>
                    </li>
                    <li className="cart-other-link">
                      <a href="grid-list.html">Continue shopping</a>
                    </li>
                    <li className="cart-other-link">
                      <a href="index.html">Clear cart</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
          <div className="col-xl-3 col-xs-12 col-sm-12 col-md-12 col-lg-4">
            <div className="cart-total">
              <div className="cart-price">
                <span>Subtotal</span>
                <span className="total">$78.44 CAD</span>
              </div>
              <div className="cart-info">
                <h4>Shipping info</h4>
                <form>
                  <label>Country</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option>---</option>
                    <option>Afghanistan</option>
                    <option>Åland Islands</option>
                    <option>Albania</option>
                    <option>Algeria</option>
                    <option>Andorra</option>
                    <option>Angola</option>
                    <option>Anguilla</option>
                    <option>Antigua &amp; Barbuda</option>
                    <option>Argentina</option>
                    <option>Armenia</option>
                    <option>Aruba</option>
                    <option>Ascension Island</option>
                    <option>Australia</option>
                    <option>Austria</option>
                    <option>Azerbaijan</option>
                    <option>Bahamas</option>
                    <option>Bahrain</option>
                  </select>
                  <label>Zip/postal code</label>
                  <input
                    type="text"
                    name="code"
                    placeholder="Zip/postal code"
                  />
                </form>
                <a href="javascript:void(0)" className="cart-calculate">
                  Calculate
                </a>
              </div>
              <div className="shop-total">
                <span>Total</span>
                <span className="total-amount">$78.44 CAD</span>
              </div>
              <a href="checkout.html" className="check-link">
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
