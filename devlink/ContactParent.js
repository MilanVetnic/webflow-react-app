import React from "react";
import * as _Builtin from "./_Builtin";
import { Preloader } from "./Preloader";
import { Navbar } from "./Navbar";
import { MainContact } from "./MainContact";
import * as _utils from "./utils";
import _styles from "./ContactParent.module.css";

export function ContactParent({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "page-wrapper")} tag="div">
      <Preloader />
      <Navbar />
      <MainContact />
    </_Component>
  );
}
