import React from "react";
import * as _Builtin from "./_Builtin";
import { Preloader } from "./Preloader";
import { Navbar } from "./Navbar";
import { MainWrapper } from "./MainWrapper";
import * as _utils from "./utils";
import _styles from "./HomepageParent.module.css";

export function HomepageParent({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "page-wrapper")} tag="div">
      <Preloader />
      <Navbar />
      <MainWrapper />
    </_Component>
  );
}
