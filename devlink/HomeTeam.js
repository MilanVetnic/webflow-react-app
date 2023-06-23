import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { TeamCard } from "./TeamCard";
import * as _utils from "./utils";
import _styles from "./HomeTeam.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-243":{"id":"e-243","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-244"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c26f9503-d4f7-753c-aed7-325887d699b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c26f9503-d4f7-753c-aed7-325887d699b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1675553952245},"e-322":{"id":"e-322","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-323"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1e1c0c42-e1d5-74ea-c873-5843634d5088","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1e1c0c42-e1d5-74ea-c873-5843634d5088","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1675801725062},"e-483":{"id":"e-483","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-484"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3df9e124-f997-7632-effe-05a7a8316e22","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3df9e124-f997-7632-effe-05a7a8316e22","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1676313993939},"e-485":{"id":"e-485","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-486"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e6e4b14c-7a9c-6140-b06c-c17305d1fed6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e6e4b14c-7a9c-6140-b06c-c17305d1fed6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":35,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1676314123620},"e-493":{"id":"e-493","name":"","animationType":"custom","eventTypeId":"PAGE_FINISH","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-114","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-492"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676330080685}},"actionLists":{"a-67":{"id":"a-67","title":"Word into view","actionItemGroups":[{"actionItems":[{"id":"a-67-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".word-one","selectorGuids":["dcd76060-c830-58d8-3d30-8d07c47be00b"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-67-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".word-one","selectorGuids":["dcd76060-c830-58d8-3d30-8d07c47be00b"]},"value":0,"unit":""}},{"id":"a-67-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".word-two","selectorGuids":["2577b25b-e118-fb4c-14ff-44c6b28b2418"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-67-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".word-two","selectorGuids":["2577b25b-e118-fb4c-14ff-44c6b28b2418"]},"value":0,"unit":""}},{"id":"a-67-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".word-three","selectorGuids":["6b3f7599-844e-2630-419e-80dcaf1fffd5"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-67-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".word-three","selectorGuids":["6b3f7599-844e-2630-419e-80dcaf1fffd5"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-67-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".word-one","selectorGuids":["dcd76060-c830-58d8-3d30-8d07c47be00b"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-67-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".word-one","selectorGuids":["dcd76060-c830-58d8-3d30-8d07c47be00b"]},"value":1,"unit":""}},{"id":"a-67-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":120,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".word-two","selectorGuids":["2577b25b-e118-fb4c-14ff-44c6b28b2418"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-67-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":120,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".word-two","selectorGuids":["2577b25b-e118-fb4c-14ff-44c6b28b2418"]},"value":1,"unit":""}},{"id":"a-67-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":240,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".word-three","selectorGuids":["6b3f7599-844e-2630-419e-80dcaf1fffd5"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-67-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":240,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".word-three","selectorGuids":["6b3f7599-844e-2630-419e-80dcaf1fffd5"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675801727656},"a-114":{"id":"a-114","title":"Contact page load","actionItemGroups":[{"actionItems":[{"id":"a-114-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".word-one","selectorGuids":["dcd76060-c830-58d8-3d30-8d07c47be00b"]},"value":0,"unit":""}},{"id":"a-114-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".word-one","selectorGuids":["dcd76060-c830-58d8-3d30-8d07c47be00b"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-114-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".word-two","selectorGuids":["2577b25b-e118-fb4c-14ff-44c6b28b2418"]},"value":0,"unit":""}},{"id":"a-114-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".word-two","selectorGuids":["2577b25b-e118-fb4c-14ff-44c6b28b2418"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-114-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-line-1","selectorGuids":["6377caf7-19be-0bec-68ca-bf17bbb6d378"]},"value":0,"unit":""}},{"id":"a-114-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-line-1","selectorGuids":["6377caf7-19be-0bec-68ca-bf17bbb6d378"]},"xValue":-100,"yValue":null,"xUnit":"%","yUnit":"rem","zUnit":"PX"}},{"id":"a-114-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"value":0,"unit":""}},{"id":"a-114-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-114-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"value":0,"unit":""}},{"id":"a-114-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-114-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-4","selectorGuids":["2d42d1a8-7b7e-fbb5-a561-f9c28dbbb21b"]},"value":0,"unit":""}},{"id":"a-114-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-4","selectorGuids":["2d42d1a8-7b7e-fbb5-a561-f9c28dbbb21b"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-114-n-26","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".word-three","selectorGuids":["6b3f7599-844e-2630-419e-80dcaf1fffd5"]},"value":0,"unit":""}},{"id":"a-114-n-27","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".word-three","selectorGuids":["6b3f7599-844e-2630-419e-80dcaf1fffd5"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-114-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1900,"target":{"selector":".contact-hero","selectorGuids":["f27702d9-cf4d-f452-ffdc-583a677eb87a"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-114-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".word-one","selectorGuids":["dcd76060-c830-58d8-3d30-8d07c47be00b"]},"value":1,"unit":""}},{"id":"a-114-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1200,"target":{"selector":".word-one","selectorGuids":["dcd76060-c830-58d8-3d30-8d07c47be00b"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-114-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":120,"easing":"","duration":300,"target":{"selector":".word-two","selectorGuids":["2577b25b-e118-fb4c-14ff-44c6b28b2418"]},"value":1,"unit":""}},{"id":"a-114-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":120,"easing":"outExpo","duration":1200,"target":{"selector":".word-two","selectorGuids":["2577b25b-e118-fb4c-14ff-44c6b28b2418"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-114-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":280,"easing":"","duration":300,"target":{"selector":".load-line-1","selectorGuids":["6377caf7-19be-0bec-68ca-bf17bbb6d378"]},"value":1,"unit":""}},{"id":"a-114-n-19","actionTypeId":"TRANSFORM_MOVE","config":{"delay":280,"easing":"outExpo","duration":1600,"target":{"selector":".load-line-1","selectorGuids":["6377caf7-19be-0bec-68ca-bf17bbb6d378"]},"xValue":0,"yValue":null,"xUnit":"%","yUnit":"rem","zUnit":"PX"}},{"id":"a-114-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"","duration":300,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"value":1,"unit":""}},{"id":"a-114-n-21","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"outExpo","duration":1200,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-114-n-28","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"","duration":300,"target":{"selector":".word-three","selectorGuids":["6b3f7599-844e-2630-419e-80dcaf1fffd5"]},"value":1,"unit":""}},{"id":"a-114-n-29","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"outExpo","duration":1200,"target":{"selector":".word-three","selectorGuids":["6b3f7599-844e-2630-419e-80dcaf1fffd5"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-114-n-22","actionTypeId":"STYLE_OPACITY","config":{"delay":520,"easing":"","duration":300,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"value":1,"unit":""}},{"id":"a-114-n-23","actionTypeId":"TRANSFORM_MOVE","config":{"delay":520,"easing":"outExpo","duration":1200,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-114-n-24","actionTypeId":"STYLE_OPACITY","config":{"delay":640,"easing":"","duration":300,"target":{"selector":".load-4","selectorGuids":["2d42d1a8-7b7e-fbb5-a561-f9c28dbbb21b"]},"value":1,"unit":""}},{"id":"a-114-n-25","actionTypeId":"TRANSFORM_MOVE","config":{"delay":640,"easing":"outExpo","duration":1200,"target":{"selector":".load-4","selectorGuids":["2d42d1a8-7b7e-fbb5-a561-f9c28dbbb21b"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675799583070}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function HomeTeam({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "home-team")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "container-large")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "padding-vertical", "padding-xlarge")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "padding-horizontal",
              "padding-medium"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "margin-bottom", "margin-medium")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "home-works-top")}
                tag="div"
              >
                <_Builtin.Block
                  data-w-id="3df9e124-f997-7632-effe-05a7a8316e22"
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "clip-title")}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "heading-style-h1")}
                      tag="h2"
                    >
                      <_Builtin.Span className={_utils.cx(_styles, "word-one")}>
                        {"Meet"}
                      </_Builtin.Span>{" "}
                      <_Builtin.Span className={_utils.cx(_styles, "word-two")}>
                        {"our"}
                      </_Builtin.Span>
                    </_Builtin.Heading>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "clip-title")}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "heading-style-h1")}
                      tag="h2"
                    >
                      <_Builtin.Span
                        className={_utils.cx(_styles, "word-three")}
                      >
                        {"Designers"}
                      </_Builtin.Span>
                    </_Builtin.Heading>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "hoe-works-description")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_3df9e124-f997-7632-effe-05a7a8316e2e-a8316e1c"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "margin-bottom")}
                    tag="div"
                  >
                    <_Builtin.Paragraph
                      className={_utils.cx(
                        _styles,
                        "text-size-regular",
                        "text-color-grey"
                      )}
                    >
                      {
                        "After 8 years in the industry, our team has designed spaces from New York to Monaco."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "padding-horizontal",
              "padding-medium"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "service-grid")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "home-team-block")}
                id={_utils.cx(
                  _styles,
                  "w-node-_3df9e124-f997-7632-effe-05a7a8316e34-a8316e1c"
                )}
                tag="div"
              >
                <TeamCard portrait="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c12d4_Person%20006.webp" />
                <TeamCard
                  portrait="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c12d3_Person%20003.webp"
                  teamPosition="Senior designer"
                />
                <TeamCard
                  portrait="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c12cf_Person%20001.webp"
                  teamPosition="Junior designer"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
