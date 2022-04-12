import React from "react";
import CartMenu from "../../elements/CartMenu";
import SearchItem from "../../elements/SearchItem";

const CartSearchTop = ({ showSearchForm }) => (
  <>
    {/* <CartMenu /> */}
    <SearchItem showSearchForm={showSearchForm} />
  </>
);

export default CartSearchTop;
