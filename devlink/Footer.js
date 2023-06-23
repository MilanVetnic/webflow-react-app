import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "padding-vertical", "padding-large")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-horizontal", "padding-medium")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "footer-content")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-menu")}
            id={_utils.cx(
              _styles,
              "w-node-_97509895-6aaf-b95e-26d1-65b5faf435f5-faf435f2"
            )}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "fotter-menu-link")}
              button={false}
              options={{
                href: "#",
              }}
            >
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "text-size-xsmall",
                  "text-style-allcaps"
                )}
              >
                {"Services"}
              </_Builtin.Paragraph>
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "fotter-menu-link")}
              button={false}
              options={{
                href: "#",
              }}
            >
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "text-size-xsmall",
                  "text-style-allcaps"
                )}
              >
                {"Portfolio"}
              </_Builtin.Paragraph>
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Link
            className={_utils.cx(_styles, "footer-brand")}
            id={_utils.cx(
              _styles,
              "w-node-_97509895-6aaf-b95e-26d1-65b5faf435fc-faf435f2"
            )}
            button={false}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "text-size-regular")}
            >
              {"GIGI"}
            </_Builtin.Paragraph>
          </_Builtin.Link>
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-menu")}
            id={_utils.cx(
              _styles,
              "w-node-_97509895-6aaf-b95e-26d1-65b5faf435ff-faf435f2"
            )}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "fotter-menu-link")}
              button={false}
              options={{
                href: "#",
              }}
            >
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "text-size-xsmall",
                  "text-style-allcaps"
                )}
              >
                {"About"}
              </_Builtin.Paragraph>
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "fotter-menu-link")}
              button={false}
              options={{
                href: "#",
              }}
            >
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "text-size-xsmall",
                  "text-style-allcaps"
                )}
              >
                {"Contact"}
              </_Builtin.Paragraph>
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
