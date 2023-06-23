import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./LoopingStrip.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-157":{"id":"e-157","name":"","animationType":"custom","eventTypeId":"PAGE_FINISH","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-38","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-156"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1674333498197}},"actionLists":{"a-38":{"id":"a-38","title":"Looping strip","actionItemGroups":[{"actionItems":[{"id":"a-38-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":26000,"target":{"selector":".looping-strip","selectorGuids":["9ddbf6ec-64b0-e471-7639-488451ec9bdb"]},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-38-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".looping-strip","selectorGuids":["9ddbf6ec-64b0-e471-7639-488451ec9bdb"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1674333506941}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function LoopingStrip({
  as: _Component = _Builtin.Block,
  loopingText = "Our Founders",
}) {
  _interactions.useInteractions(_interactionsData, _styles);
  return (
    <_Component className={_utils.cx(_styles, "looping-strip")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "home-hero-heading")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "heading-style-xl")}
          tag="h1"
        >
          {loopingText}
        </_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "looping-line")}
        tag="div"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "home-hero-heading")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "heading-style-xl")}
          tag="h1"
        >
          {loopingText}
        </_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "looping-line")}
        tag="div"
      />
    </_Component>
  );
}
