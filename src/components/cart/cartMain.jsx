import useCartInfo from "@hooks/use-cart-info";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { REQUEST_PAYMENT } from "src/middleware/api";
import execute from "src/middleware/serviceExecutor";
import { useRouter } from "next/router";
import {
  cart_product,
  clear_cart,
  decrease_quantity,
  remove_cart_product,
} from "src/redux/features/cart-slice";
import { toast } from "react-toastify";
import { getErrorMessage } from "@utils/error-code-util";
import PrimaryButton from "@components/common/primary-button";
import CartCheckOut, { handleOnClickCheckout } from "./cartCheckout";
import { isValidEmail } from "@utils/email-util";
import { ENROLL_TYPE_TRIAL } from "src/enum/enrollType";

const CartMain = () => {
  const { languageLabel } = useSelector((state) => state.language);
  const { cartProducts } = useSelector((state) => state.cart);
  const router = useRouter();
  const [email, setEmail] = useState();
  const [validEmail, setValidEmail] = useState(false);

  const dispatch = useDispatch();
  const { total } = useCartInfo();

  const labels = languageLabel?.component?.cartMain ?? {};

  const onEmailChange = (email) => {
    const isValid = isValidEmail(email);
    setEmail(email);
    setValidEmail(isValid);
  };

  return (
    <>
      {cartProducts.length === 0 && (
        <div className="container">
          <div className="empty-text pt-100 pb-100 text-center">
            <h3>{labels.cartEmpty}</h3>
          </div>
        </div>
      )}
      {cartProducts.length >= 1 && (
        <div className="cart-area pt-100 pb-100">
          <div className="container">
            <div className="row wow fadeInUp" data-wow-delay=".3s">
              <div className="col-12">
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        {/* <th className="product-thumbnail">
                          {labels.tableColumnImage}
                        </th> */}
                        <th className="cart-product-name">
                          {labels.tableColumnProduct}
                        </th>
                        {/* <th className="product-price">Unit Price</th> */}
                        {/* <th className="product-quantity">Quantity</th> */}
                        <th className="product-subtotal">
                          {labels.tableColumnPrice}
                        </th>
                        <th className="product-remove">
                          {labels.tableColumnRemove}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartProducts.map((item, index) => (
                        <tr key={index}>
                          {/* <td className="product-thumbnail">
                            <Image
                              src={item?.productImg}
                              style={{
                                borderRadius: 8,
                                width: "100%",
                                height: "100%",
                              }}
                              alt="img not found"
                            />
                          </td> */}
                          <td className="product-name">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              {item.title}
                              <div>
                                {item.subTitles.map((subTitle, index) => (
                                  <h6
                                    key={"st" + index}
                                    style={{ color: "grey", margin: 0 }}
                                  >
                                    {subTitle}
                                  </h6>
                                ))}
                                {item?.formData?.enrollType ===
                                  ENROLL_TYPE_TRIAL.key && (
                                  <h6 style={{ color: "red" }}>
                                    {labels.trialDisclaimer}
                                  </h6>
                                )}
                              </div>
                            </div>
                          </td>
                          {/* <td className="product-price">
                            <span className="amount">${item.price}</span>
                          </td> */}
                          {/* <td className="product-quantity text-center">
                                                        <div className="product-quantity mt-10 mb-10">
                                                            <div className="product-quantity-form">
                                                                <form onSubmit={e => e.preventDefault()}>
                                                                    <button className="cart-minus" type='button' onClick={() => dispatch(decrease_quantity(item))}>
                                                                        <i className="far fa-minus"></i>
                                                                    </button>
                                                                    <input className="cart-input" type="text" onChange={handleChange} value={item?.quantity} />
                                                                    <button className="cart-plus" type='button' onClick={() => dispatch(cart_product(item))}>
                                                                        <i className="far fa-plus"></i>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </td> */}
                          <td className="product-subtotal">
                            <span className="amount">
                              ${item?.quantity * item.price}
                            </span>
                          </td>
                          <td className="product-remove">
                            <button
                              type="button"
                              onClick={() =>
                                dispatch(remove_cart_product(item))
                              }
                            >
                              <i className="fa fa-times"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-12">
                <div className="coupon-all">
                  <div className="coupon d-flex align-items-center">
                    <input
                      id="coupon_code"
                      className="input-text"
                      name="coupon_code"
                      placeholder="Coupon code"
                      type="text"
                    />
                    <button
                      name="apply_coupon"
                      type="submit"
                      className="bd-btn"
                    >
                      <span className="bd-btn-inner">
                        <span className="bd-btn-normal">Apply Coupon</span>
                        <span className="bd-btn-hover">Apply Coupon</span>
                      </span>
                    </button>
                  </div>
                  <div className="coupon2">
                    <button
                      className="bd-btn"
                      name="update_cart"
                      type="button"
                      onClick={() => dispatch(clear_cart())}
                    >
                      <span className="bd-btn-inner">
                        <span className="bd-btn-normal">Update Cart</span>
                        <span className="bd-btn-hover">Update Cart</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div className="cart-page-total" style={{ flex: 1 }}>
                <h2>{labels.cartTotal}</h2>
                <ul className="mb-30">
                  <li>
                    {labels.subTotal} <span>${parseFloat(total)}</span>
                  </li>
                  <li>
                    {labels.total}
                    <span>${parseFloat(total)}</span>
                  </li>
                </ul>
              </div>
              <div
                className="pt-50"
                style={{
                  alignItems: "end",
                  display: "flex",

                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "end",
                }}
              >
                <Form.Group md="4" controlId="validationCustom01">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Email"
                    onChange={(e) => onEmailChange(e.target.value)}
                    isInvalid={!validEmail}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email address.
                  </Form.Control.Feedback>
                </Form.Group>
                <CartCheckOut
                  cartProducts={cartProducts}
                  disabled={!validEmail}
                  paymentInfo={{ email }}
                >
                  <PrimaryButton
                    disabled={!validEmail}
                    style={{ marginTop: 20 }}
                  >
                    {labels.proceedToCheckout}
                  </PrimaryButton>
                </CartCheckOut>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <Row>
        <Col xs={12} sm={8}>
          Item 1
        </Col>
        <Col xs={12} sm={2}>
          Item 2
        </Col>
        <Col xs={12} sm={2}>
          Item 3
        </Col>
      </Row> */}
    </>
  );
};

export default CartMain;

// <div className="row">
//               <div className="col-md-5 ml-auto">
//                 <div className="cart-page-total">
//                   <h2>Cart totals</h2>
//                   <ul className="mb-30">
//                     <li>
//                       Subtotal <span>${parseFloat(total)}</span>
//                     </li>
//                     <li>
//                       Total <span>${parseFloat(total)}</span>
//                     </li>
//                   </ul>
//                   {/* <div className="bd-checkout-btn">
//                     <Link href="/checkout">Proceed to Checkout</Link>
//                   </div> */}
//                 </div>
//                 <div>
//                   <PrimaryButton onClick={handleOnClickCheckout}>
//                     Proceed to Checkout
//                   </PrimaryButton>
//                 </div>
//               </div>
//             </div>
