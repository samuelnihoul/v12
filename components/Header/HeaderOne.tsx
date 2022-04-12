import React, { useState, useEffect, useCallback } from "react";
import Link from 'next/link'
import DropdownMenu from "../Navs/DropdownMenu";
import SearchOverlay from "../../elements/SearchOverlay";
import AttributeNav from "../Navs/AttributeNav";
import MainLogo from "../MainLogo";
import CartSearchTop from "../Navs/CartSearchTop";
import { Client } from '@hashgraph/sdk'
import PairButton from "../PairButton";
import { pair , init} from "../../helpers/hashconnect";
const HeaderOne = ({ type }) => {
  const [show, setShow] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [collapse, setCollapse] = useState(false);

  const showMenu = () => {
    setCollapse(!collapse);
    const menu = document.getElementById("navbar-menu");
    collapse ? menu.classList.remove("in") : menu.classList.add("in");
  };

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 34) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }, []);

  const resizeForm = useCallback(() => {
    var wHeight = window.innerHeight;
    const searchForm = document.getElementById("fullscreen-searchform");
    searchForm.style.top = wHeight / 2 + "px";
  }, []);

  const showSearchForm = (e) => {
    e.preventDefault();
    setShow(true);
    resizeForm();
  };

  const hideSearchForm = (e) => {
    e.preventDefault();
    setShow(false);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeForm);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", resizeForm);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [resizeForm, handleScroll]);

  return (
    <>
      <nav
        className={
          "navbar navbar-expand-lg navbar-light navbar-fixed white bootsnav on no-full " +
          (fixed || type === "white" ? "" : "navbar-transparent")
        }
      >
        <SearchOverlay show={show} onClick={hideSearchForm} />
        <div className="container">
          <button
            type="button"
            className={"navbar-toggler " + (collapse ? "collapsed" : "")}
            data-toggle="dropdown"
            data-target="#navbar-menu"
            onClick={showMenu}
          >
            <i className="icofont-navigation-menu"></i>
          </button><a href='/'>
          { <MainLogo showMenu={showMenu} collapse={undefined} ></MainLogo> }</a>
          <DropdownMenu />
          <AttributeNav>
            <CartSearchTop showSearchForm={showSearchForm} />
            <PairButton ></PairButton>
            
            
          </AttributeNav>
        </div>
      </nav>
    </>
  );
};

export default HeaderOne;
