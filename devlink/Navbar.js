import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Navbar.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-7":{"id":"e-7","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".home-service-grid","originalId":"b399721e-ea5d-569e-8c44-9a8d43254b07","appliesTo":"CLASS"},"targets":[{"selector":".home-service-grid","originalId":"b399721e-ea5d-569e-8c44-9a8d43254b07","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":60,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1673805670556},"e-35":{"id":"e-35","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-36"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button.is-icon","originalId":"648482ba6bff1a3a6f0c1191|5d244f16-1465-c25c-72b5-571d9d73e80a","appliesTo":"CLASS"},"targets":[{"selector":".button.is-icon","originalId":"648482ba6bff1a3a6f0c1191|5d244f16-1465-c25c-72b5-571d9d73e80a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1673816349512},"e-36":{"id":"e-36","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-35"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button.is-icon","originalId":"648482ba6bff1a3a6f0c1191|5d244f16-1465-c25c-72b5-571d9d73e80a","appliesTo":"CLASS"},"targets":[{"selector":".button.is-icon","originalId":"648482ba6bff1a3a6f0c1191|5d244f16-1465-c25c-72b5-571d9d73e80a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1673816349512},"e-257":{"id":"e-257","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-258"}},"mediaQueries":["main"],"target":{"selector":".navbar-link","originalId":"dc1a5b8c-aded-519a-ccf9-36a4c4a9a22c","appliesTo":"CLASS"},"targets":[{"selector":".navbar-link","originalId":"dc1a5b8c-aded-519a-ccf9-36a4c4a9a22c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675630030632},"e-258":{"id":"e-258","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-257"}},"mediaQueries":["main"],"target":{"selector":".navbar-link","originalId":"dc1a5b8c-aded-519a-ccf9-36a4c4a9a22c","appliesTo":"CLASS"},"targets":[{"selector":".navbar-link","originalId":"dc1a5b8c-aded-519a-ccf9-36a4c4a9a22c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675630030634},"e-286":{"id":"e-286","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-287"}},"mediaQueries":["main"],"target":{"selector":".social-link","originalId":"4cad311c-f4b5-1237-0190-af3b97389135","appliesTo":"CLASS"},"targets":[{"selector":".social-link","originalId":"4cad311c-f4b5-1237-0190-af3b97389135","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675713636786},"e-287":{"id":"e-287","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-286"}},"mediaQueries":["main"],"target":{"selector":".social-link","originalId":"4cad311c-f4b5-1237-0190-af3b97389135","appliesTo":"CLASS"},"targets":[{"selector":".social-link","originalId":"4cad311c-f4b5-1237-0190-af3b97389135","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675713636788},"e-299":{"id":"e-299","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-300"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b1c5fcfd-0252-d7d0-8e90-c90df2f6a59e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b1c5fcfd-0252-d7d0-8e90-c90df2f6a59e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675740820652},"e-300":{"id":"e-300","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-49","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-299"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b1c5fcfd-0252-d7d0-8e90-c90df2f6a59e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b1c5fcfd-0252-d7d0-8e90-c90df2f6a59e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675740820655},"e-301":{"id":"e-301","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-47","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-302"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b1c5fcfd-0252-d7d0-8e90-c90df2f6a59e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b1c5fcfd-0252-d7d0-8e90-c90df2f6a59e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675740831393},"e-302":{"id":"e-302","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-61","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-301"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b1c5fcfd-0252-d7d0-8e90-c90df2f6a59e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b1c5fcfd-0252-d7d0-8e90-c90df2f6a59e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675740831396},"e-328":{"id":"e-328","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-329"}},"mediaQueries":["main"],"target":{"id":"3d886c63-bfa8-c8c9-b537-cf01dc530c54","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3d886c63-bfa8-c8c9-b537-cf01dc530c54","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675803215391},"e-329":{"id":"e-329","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-328"}},"mediaQueries":["main"],"target":{"id":"3d886c63-bfa8-c8c9-b537-cf01dc530c54","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3d886c63-bfa8-c8c9-b537-cf01dc530c54","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675803215394},"e-363":{"id":"e-363","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-75","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-364"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64b189fa-cb73-af81-24f3-59973f9af4fc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64b189fa-cb73-af81-24f3-59973f9af4fc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1675890090467},"e-365":{"id":"e-365","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-75","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-366"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64b189fa-cb73-af81-24f3-59973f9af4e9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64b189fa-cb73-af81-24f3-59973f9af4e9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":35,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1675890090467},"e-421":{"id":"e-421","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-90","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-422"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button.is-circle","originalId":"e5e6da75-9972-84be-61b1-fadd3b2ce2ce","appliesTo":"CLASS"},"targets":[{"selector":".button.is-circle","originalId":"e5e6da75-9972-84be-61b1-fadd3b2ce2ce","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676231756597},"e-422":{"id":"e-422","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-91","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-421"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button.is-circle","originalId":"e5e6da75-9972-84be-61b1-fadd3b2ce2ce","appliesTo":"CLASS"},"targets":[{"selector":".button.is-circle","originalId":"e5e6da75-9972-84be-61b1-fadd3b2ce2ce","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676231756601},"e-423":{"id":"e-423","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-424"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e7ac2076-65b2-2c77-bb57-ce2a53e39551","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e7ac2076-65b2-2c77-bb57-ce2a53e39551","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676232313105},"e-424":{"id":"e-424","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-423"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e7ac2076-65b2-2c77-bb57-ce2a53e39551","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e7ac2076-65b2-2c77-bb57-ce2a53e39551","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676232313108},"e-441":{"id":"e-441","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-105","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-442"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6862f11d-9825-6b19-fa77-096aa25676f6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6862f11d-9825-6b19-fa77-096aa25676f6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":35,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1676234102300},"e-445":{"id":"e-445","name":"","animationType":"custom","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-107","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-446"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".testimonial-slide","originalId":"2cf28d11-aa44-d451-10f4-fab861942aa8","appliesTo":"CLASS"},"targets":[{"selector":".testimonial-slide","originalId":"2cf28d11-aa44-d451-10f4-fab861942aa8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676244904105},"e-446":{"id":"e-446","name":"","animationType":"custom","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-108","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-445"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".testimonial-slide","originalId":"2cf28d11-aa44-d451-10f4-fab861942aa8","appliesTo":"CLASS"},"targets":[{"selector":".testimonial-slide","originalId":"2cf28d11-aa44-d451-10f4-fab861942aa8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676244904108},"e-454":{"id":"e-454","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-109","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-455"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".service-tag","originalId":"648482ba6bff1a3a6f0c11a0|3f8df311-d7f0-c004-daad-b09a878285e8","appliesTo":"CLASS"},"targets":[{"selector":".service-tag","originalId":"648482ba6bff1a3a6f0c11a0|3f8df311-d7f0-c004-daad-b09a878285e8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1676311491516},"e-487":{"id":"e-487","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-110","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-488"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cf28d11-aa44-d451-10f4-fab861942aae","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cf28d11-aa44-d451-10f4-fab861942aae","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676318274885},"e-488":{"id":"e-488","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-111","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-487"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cf28d11-aa44-d451-10f4-fab861942aae","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cf28d11-aa44-d451-10f4-fab861942aae","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676318274887},"e-489":{"id":"e-489","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-112","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-490"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cf28d11-aa44-d451-10f4-fab861942ab4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cf28d11-aa44-d451-10f4-fab861942ab4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676318345550},"e-490":{"id":"e-490","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-113","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-489"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cf28d11-aa44-d451-10f4-fab861942ab4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cf28d11-aa44-d451-10f4-fab861942ab4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676318345552}},"actionLists":{"a-2":{"id":"a-2","title":"Into view content","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":0,"unit":""}},{"id":"a-2-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":0,"unit":""}},{"id":"a-2-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":0,"unit":""}},{"id":"a-2-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"value":0,"unit":""}},{"id":"a-2-n-19","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"value":0,"unit":""}},{"id":"a-2-n-22","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-23","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}},{"id":"a-2-n-24","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-25","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}},{"id":"a-2-n-26","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-27","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-2-n-21","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":150,"target":{"useEventTarget":true,"id":"648482ba6bff1a3a6f0c1191|4cfc427b-ecb5-8046-2f51-353cd0e4bf6e"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-2-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":1,"unit":""}},{"id":"a-2-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":130,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":1,"unit":""}},{"id":"a-2-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":130,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":260,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":1,"unit":""}},{"id":"a-2-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":260,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":390,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"value":1,"unit":""}},{"id":"a-2-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":390,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-17","actionTypeId":"STYLE_OPACITY","config":{"delay":520,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"value":1,"unit":""}},{"id":"a-2-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":520,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-28","actionTypeId":"STYLE_OPACITY","config":{"delay":650,"easing":"","duration":300,"target":{},"value":1,"unit":""}},{"id":"a-2-n-29","actionTypeId":"TRANSFORM_MOVE","config":{"delay":650,"easing":"outExpo","duration":1200,"target":{},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-31","actionTypeId":"TRANSFORM_MOVE","config":{"delay":780,"easing":"outExpo","duration":1200,"target":{},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-30","actionTypeId":"STYLE_OPACITY","config":{"delay":780,"easing":"","duration":300,"target":{},"value":1,"unit":""}},{"id":"a-2-n-33","actionTypeId":"TRANSFORM_MOVE","config":{"delay":910,"easing":"outExpo","duration":1200,"target":{},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-32","actionTypeId":"STYLE_OPACITY","config":{"delay":910,"easing":"","duration":300,"target":{},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1673805673015},"a-11":{"id":"a-11","title":"Button on hover","actionItemGroups":[{"actionItems":[{"id":"a-11-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-11-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":0,"yValue":0,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-11-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-text","selectorGuids":["025e9afb-9045-df61-7a2a-ab57f0346ef6"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-11-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuint","duration":900,"target":{},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-11-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".button-text","selectorGuids":["025e9afb-9045-df61-7a2a-ab57f0346ef6"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-11-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":100,"yValue":-100,"xUnit":"%","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1673816352122},"a-36":{"id":"a-36","title":"Button out hover","actionItemGroups":[{"actionItems":[{"id":"a-36-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":0,"target":{},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-36-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".button-text","selectorGuids":["025e9afb-9045-df61-7a2a-ab57f0346ef6"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-36-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":0,"yValue":0,"xUnit":"%","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1673816352122},"a-49":{"id":"a-49","title":"Out view content","actionItemGroups":[{"actionItems":[{"id":"a-49-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-49-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":0,"unit":""}},{"id":"a-49-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":60,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":0,"unit":""}},{"id":"a-49-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":60,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-49-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":120,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":0,"unit":""}},{"id":"a-49-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":120,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-49-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":180,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-49-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":180,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"value":0,"unit":""}},{"id":"a-49-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":240,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"value":0,"unit":""}},{"id":"a-49-n-21","actionTypeId":"TRANSFORM_MOVE","config":{"delay":240,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1673805673015},"a-47":{"id":"a-47","title":"Mega menu open","actionItemGroups":[{"actionItems":[{"id":"a-47-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar-menu-base","selectorGuids":["c2d85fab-4973-c22d-5225-671afaa184bd"]},"heightValue":0,"widthUnit":"AUTO","heightUnit":"px","locked":false}},{"id":"a-47-n-33","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menu-logo","selectorGuids":["e8d98304-8079-18b3-f66c-7d0b0bc9fc6e"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-47-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-view-1","selectorGuids":["f207ce01-8b1f-98de-49d8-301d5e6cc996"]},"value":0,"unit":""}},{"id":"a-47-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-view-1","selectorGuids":["f207ce01-8b1f-98de-49d8-301d5e6cc996"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-47-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-bottom","selectorGuids":["9626c89e-b4dc-7ece-7a47-4a153cf6a7d8"]},"value":0,"unit":""}},{"id":"a-47-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-bottom","selectorGuids":["9626c89e-b4dc-7ece-7a47-4a153cf6a7d8"]},"yValue":-9,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-47-n-11","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".toggle-spacer","selectorGuids":["8bc69849-3016-5bdc-2e4b-4bcb299b0373"]},"widthUnit":"AUTO","heightUnit":"AUTO","locked":false}},{"id":"a-47-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar-menu-base","selectorGuids":["c2d85fab-4973-c22d-5225-671afaa184bd"]},"value":0,"unit":""}},{"id":"a-47-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".menu-overlay","selectorGuids":["1bc31e1a-84b1-d76a-22c8-4559d4ba72b6"]},"value":"none"}},{"id":"a-47-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menu-overlay","selectorGuids":["1bc31e1a-84b1-d76a-22c8-4559d4ba72b6"]},"value":0,"unit":""}},{"id":"a-47-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar-menu-base","selectorGuids":["c2d85fab-4973-c22d-5225-671afaa184bd"]},"yValue":-5,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-47-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-view-2","selectorGuids":["b98af003-9edb-8efe-ceb8-3289087cea6c"]},"value":0,"unit":""}},{"id":"a-47-n-20","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-view-2","selectorGuids":["b98af003-9edb-8efe-ceb8-3289087cea6c"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-47-n-21","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-view-3","selectorGuids":["6fb12ccd-bda4-1571-61d3-2c63a7e4be83"]},"value":0,"unit":""}},{"id":"a-47-n-22","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-view-3","selectorGuids":["6fb12ccd-bda4-1571-61d3-2c63a7e4be83"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-47-n-23","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-view-4","selectorGuids":["6e9596a0-7c95-f707-2056-68dfd67badc9"]},"value":0,"unit":""}},{"id":"a-47-n-24","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-view-4","selectorGuids":["6e9596a0-7c95-f707-2056-68dfd67badc9"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-47-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".menu-overlay","selectorGuids":["1bc31e1a-84b1-d76a-22c8-4559d4ba72b6"]},"value":"block"}}]},{"actionItems":[{"id":"a-47-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".navbar-menu-base","selectorGuids":["c2d85fab-4973-c22d-5225-671afaa184bd"]},"widthUnit":"AUTO","heightUnit":"AUTO","locked":false}},{"id":"a-47-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".menu-overlay","selectorGuids":["1bc31e1a-84b1-d76a-22c8-4559d4ba72b6"]},"value":1,"unit":""}},{"id":"a-47-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar-menu-base","selectorGuids":["c2d85fab-4973-c22d-5225-671afaa184bd"]},"value":1,"unit":""}},{"id":"a-47-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".navbar-menu-base","selectorGuids":["c2d85fab-4973-c22d-5225-671afaa184bd"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-47-n-12","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".toggle-spacer","selectorGuids":["8bc69849-3016-5bdc-2e4b-4bcb299b0373"]},"heightValue":0,"widthUnit":"AUTO","heightUnit":"px","locked":false}},{"id":"a-47-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-bottom","selectorGuids":["9626c89e-b4dc-7ece-7a47-4a153cf6a7d8"]},"value":1,"unit":""}},{"id":"a-47-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":900,"target":{"useEventTarget":"CHILDREN","selector":".menu-bottom","selectorGuids":["9626c89e-b4dc-7ece-7a47-4a153cf6a7d8"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-47-n-34","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"selector":".menu-logo","selectorGuids":["e8d98304-8079-18b3-f66c-7d0b0bc9fc6e"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-47-n-31","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".menu-view-1","selectorGuids":["f207ce01-8b1f-98de-49d8-301d5e6cc996"]},"value":1,"unit":""}},{"id":"a-47-n-32","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".menu-view-1","selectorGuids":["f207ce01-8b1f-98de-49d8-301d5e6cc996"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-47-n-29","actionTypeId":"STYLE_OPACITY","config":{"delay":520,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".menu-view-2","selectorGuids":["b98af003-9edb-8efe-ceb8-3289087cea6c"]},"value":1,"unit":""}},{"id":"a-47-n-30","actionTypeId":"TRANSFORM_MOVE","config":{"delay":520,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".menu-view-2","selectorGuids":["b98af003-9edb-8efe-ceb8-3289087cea6c"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-47-n-27","actionTypeId":"STYLE_OPACITY","config":{"delay":620,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".menu-view-3","selectorGuids":["6fb12ccd-bda4-1571-61d3-2c63a7e4be83"]},"value":1,"unit":""}},{"id":"a-47-n-28","actionTypeId":"TRANSFORM_MOVE","config":{"delay":620,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".menu-view-3","selectorGuids":["6fb12ccd-bda4-1571-61d3-2c63a7e4be83"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-47-n-26","actionTypeId":"TRANSFORM_MOVE","config":{"delay":720,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".menu-view-4","selectorGuids":["6e9596a0-7c95-f707-2056-68dfd67badc9"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-47-n-25","actionTypeId":"STYLE_OPACITY","config":{"delay":720,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".menu-view-4","selectorGuids":["6e9596a0-7c95-f707-2056-68dfd67badc9"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675620166751},"a-61":{"id":"a-61","title":"Mega menu close","actionItemGroups":[{"actionItems":[{"id":"a-61-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outExpo","duration":900,"target":{"useEventTarget":"CHILDREN","selector":".navbar-menu-base","selectorGuids":["c2d85fab-4973-c22d-5225-671afaa184bd"]},"heightValue":0,"widthUnit":"AUTO","heightUnit":"px","locked":false}},{"id":"a-61-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"selector":".menu-logo","selectorGuids":["e8d98304-8079-18b3-f66c-7d0b0bc9fc6e"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-61-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-view-1","selectorGuids":["f207ce01-8b1f-98de-49d8-301d5e6cc996"]},"value":0,"unit":""}},{"id":"a-61-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-view-1","selectorGuids":["f207ce01-8b1f-98de-49d8-301d5e6cc996"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-61-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-bottom","selectorGuids":["9626c89e-b4dc-7ece-7a47-4a153cf6a7d8"]},"value":0,"unit":""}},{"id":"a-61-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".menu-bottom","selectorGuids":["9626c89e-b4dc-7ece-7a47-4a153cf6a7d8"]},"yValue":-9,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-61-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".toggle-spacer","selectorGuids":["8bc69849-3016-5bdc-2e4b-4bcb299b0373"]},"widthUnit":"AUTO","heightUnit":"AUTO","locked":false}},{"id":"a-61-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar-menu-base","selectorGuids":["c2d85fab-4973-c22d-5225-671afaa184bd"]},"value":0,"unit":""}},{"id":"a-61-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".navbar-menu-base","selectorGuids":["c2d85fab-4973-c22d-5225-671afaa184bd"]},"yValue":-5,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-61-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-view-2","selectorGuids":["b98af003-9edb-8efe-ceb8-3289087cea6c"]},"value":0,"unit":""}},{"id":"a-61-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-view-2","selectorGuids":["b98af003-9edb-8efe-ceb8-3289087cea6c"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-61-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-view-3","selectorGuids":["6fb12ccd-bda4-1571-61d3-2c63a7e4be83"]},"value":0,"unit":""}},{"id":"a-61-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-view-3","selectorGuids":["6fb12ccd-bda4-1571-61d3-2c63a7e4be83"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-61-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-view-4","selectorGuids":["6e9596a0-7c95-f707-2056-68dfd67badc9"]},"value":0,"unit":""}},{"id":"a-61-n-16","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-view-4","selectorGuids":["6e9596a0-7c95-f707-2056-68dfd67badc9"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-61-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"","duration":300,"target":{"selector":".menu-overlay","selectorGuids":["1bc31e1a-84b1-d76a-22c8-4559d4ba72b6"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-61-n-17","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".menu-overlay","selectorGuids":["1bc31e1a-84b1-d76a-22c8-4559d4ba72b6"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1675620166751},"a-75":{"id":"a-75","title":"Into view portfolio list","actionItemGroups":[{"actionItems":[{"id":"a-75-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-75-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":0,"unit":""}},{"id":"a-75-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-75-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":0,"unit":""}},{"id":"a-75-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-75-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":0,"unit":""}},{"id":"a-75-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-75-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"value":0,"unit":""}},{"id":"a-75-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-75-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-75-n-17","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":150,"target":{"useEventTarget":true,"id":"648482ba6bff1a3a6f0c1195|4cfc427b-ecb5-8046-2f51-353cd0e4bf6e"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-75-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-75-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":1,"unit":""}},{"id":"a-75-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":130,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":1,"unit":""}},{"id":"a-75-n-21","actionTypeId":"TRANSFORM_MOVE","config":{"delay":130,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-75-n-22","actionTypeId":"STYLE_OPACITY","config":{"delay":260,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":1,"unit":""}},{"id":"a-75-n-23","actionTypeId":"TRANSFORM_MOVE","config":{"delay":260,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-75-n-24","actionTypeId":"STYLE_OPACITY","config":{"delay":390,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"value":1,"unit":""}},{"id":"a-75-n-25","actionTypeId":"TRANSFORM_MOVE","config":{"delay":390,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-75-n-26","actionTypeId":"STYLE_OPACITY","config":{"delay":520,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"value":1,"unit":""}},{"id":"a-75-n-27","actionTypeId":"TRANSFORM_MOVE","config":{"delay":520,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1673805673015},"a-90":{"id":"a-90","title":"Arrow link on hover","actionItemGroups":[{"actionItems":[{"id":"a-90-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":0,"yValue":0,"xUnit":"%","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-90-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":100,"yValue":100,"xUnit":"%","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1673816352122},"a-91":{"id":"a-91","title":"Arrow link out hover","actionItemGroups":[{"actionItems":[{"id":"a-91-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":0,"yValue":0,"xUnit":"%","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1673816352122},"a-105":{"id":"a-105","title":"Into view service list","actionItemGroups":[{"actionItems":[{"id":"a-105-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-105-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":0,"unit":""}},{"id":"a-105-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-105-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":0,"unit":""}},{"id":"a-105-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-105-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":0,"unit":""}},{"id":"a-105-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-105-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"value":0,"unit":""}},{"id":"a-105-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-105-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-105-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1100,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-105-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":1,"unit":""}},{"id":"a-105-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":130,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":1,"unit":""}},{"id":"a-105-n-21","actionTypeId":"TRANSFORM_MOVE","config":{"delay":130,"easing":"outExpo","duration":1100,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-105-n-22","actionTypeId":"STYLE_OPACITY","config":{"delay":260,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":1,"unit":""}},{"id":"a-105-n-23","actionTypeId":"TRANSFORM_MOVE","config":{"delay":260,"easing":"outExpo","duration":1100,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-105-n-24","actionTypeId":"STYLE_OPACITY","config":{"delay":390,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"value":1,"unit":""}},{"id":"a-105-n-25","actionTypeId":"TRANSFORM_MOVE","config":{"delay":390,"easing":"outExpo","duration":1100,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-105-n-26","actionTypeId":"STYLE_OPACITY","config":{"delay":520,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"value":1,"unit":""}},{"id":"a-105-n-27","actionTypeId":"TRANSFORM_MOVE","config":{"delay":520,"easing":"outExpo","duration":1100,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1673805673015},"a-107":{"id":"a-107","title":"Testimonial slide in view","actionItemGroups":[{"actionItems":[{"id":"a-107-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-107-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-107-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":0,"unit":""}},{"id":"a-107-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-107-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":0,"unit":""}},{"id":"a-107-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-107-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":0,"unit":""}},{"id":"a-107-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-107-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-107-n-16","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-107-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-107-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":1,"unit":""}},{"id":"a-107-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":360,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-107-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":360,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":1,"unit":""}},{"id":"a-107-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":420,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-107-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":420,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1676244907091},"a-108":{"id":"a-108","title":"Testimonial slide out view","actionItemGroups":[{"actionItems":[{"id":"a-108-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":0,"unit":""}},{"id":"a-108-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":-2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-108-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":60,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":-2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-108-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":60,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":0,"unit":""}},{"id":"a-108-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-108-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":120,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":0,"unit":""}},{"id":"a-108-n-16","actionTypeId":"TRANSFORM_MOVE","config":{"delay":120,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":-2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-108-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-108-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-108-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-108-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":0,"unit":""}},{"id":"a-108-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-108-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":0,"unit":""}},{"id":"a-108-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-108-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":0,"unit":""}},{"id":"a-108-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1676244907091},"a-109":{"id":"a-109","title":"Into view skill list","actionItemGroups":[{"actionItems":[{"id":"a-109-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".line-load-1","selectorGuids":["f22685a7-3cfd-793a-83e2-4e9b89877fed"]},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-109-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-109-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":0,"unit":""}},{"id":"a-109-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-109-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-109-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":100,"target":{"useEventTarget":true,"id":"648482ba6bff1a3a6f0c11a0|3f8df311-d7f0-c004-daad-b09a878285e8"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-109-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".line-load-1","selectorGuids":["f22685a7-3cfd-793a-83e2-4e9b89877fed"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-109-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":160,"easing":"outExpo","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-109-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":160,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":1,"unit":""}},{"id":"a-109-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":290,"easing":"outExpo","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-109-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":290,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1676311498398},"a-110":{"id":"a-110","title":"Arrow left on hover","actionItemGroups":[{"actionItems":[{"id":"a-110-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-110-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1676318277469},"a-111":{"id":"a-111","title":"Arrow left out hover","actionItemGroups":[{"actionItems":[{"id":"a-111-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1676318277469},"a-112":{"id":"a-112","title":"Arrow right on hover","actionItemGroups":[{"actionItems":[{"id":"a-112-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-112-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1676318277469},"a-113":{"id":"a-113","title":"Arrow right out hover","actionItemGroups":[{"actionItems":[{"id":"a-113-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1676318277469}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navbar({ as: _Component = _Builtin.NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navbar")}
      tag="div"
      config={{
        animation: "default",
        collapse: "none",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "menu-overlay")}
        tag="div"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-horizontal", "padding-small")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "navbar-block")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "navbar-base", "left-navbar")}
            tag="div"
          >
            <_Builtin.NavbarBrand
              className={_utils.cx(_styles, "navbar-brand")}
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block className={_utils.cx(_styles, "clip")} tag="div">
                <_Builtin.Block
                  className={_utils.cx(_styles, "menu-logo")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "logo")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c12e2_GIGI%20Dark%20Logo.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "menu-logo",
                    "menue-logo-bottom"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "logo")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c12e2_GIGI%20Dark%20Logo.svg"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.NavbarBrand>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "navbar-base")}
            tag="div"
          >
            <_Builtin.NavbarButton tag="div">
              <_Builtin.Icon
                widget={{
                  type: "icon",
                  icon: "nav-menu",
                }}
              />
            </_Builtin.NavbarButton>
            <_Builtin.Link
              className={_utils.cx(_styles, "navbar-button")}
              data-w-id="e7ac2076-65b2-2c77-bb57-ce2a53e39551"
              button={false}
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block className={_utils.cx(_styles, "clip")} tag="div">
                <_Builtin.Block
                  className={_utils.cx(_styles, "button-text")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-size-tiny",
                      "text-style-allcaps"
                    )}
                    tag="div"
                  >
                    {"Hire us"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "button-text",
                    "button-text-bottom"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-size-tiny",
                      "text-style-allcaps"
                    )}
                    tag="div"
                  >
                    {"Hire us"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.DropdownWrapper
              className={_utils.cx(_styles, "menu-dropdown")}
              data-w-id="b1c5fcfd-0252-d7d0-8e90-c90df2f6a59e"
              tag="div"
              data-hover={false}
              data-delay={900}
            >
              <_Builtin.DropdownToggle
                className={_utils.cx(_styles, "navbar-toggle")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "navbar-menu-2")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "navbar-menu-line")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "toggle-spacer")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "navbar-menu-line")}
                    tag="div"
                  />
                </_Builtin.Block>
              </_Builtin.DropdownToggle>
              <_Builtin.DropdownList
                className={_utils.cx(_styles, "menu-dropdown-list")}
                tag="nav"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "navbar-menu-base")}
                  tag="div"
                >
                  <_Builtin.NavbarMenu
                    className={_utils.cx(_styles, "navbar-menu")}
                    tag="nav"
                    role="navigation"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar-menu-grid")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "into-view-1")}
                        tag="div"
                      >
                        <_Builtin.Link
                          className={_utils.cx(_styles, "navbar-link")}
                          button={false}
                          options={{
                            href: "#",
                          }}
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "clip")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button-text")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "text-size-large"
                                )}
                                tag="div"
                              >
                                {"Portfolio"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "button-text",
                                "button-text-bottom"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "text-size-large"
                                )}
                                tag="div"
                              >
                                {"Portfolio"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "clip")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button-icon")}
                              tag="div"
                            >
                              <_Builtin.Image
                                className={_utils.cx(_styles, "icon-1x1-small")}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                src="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c125c_Right%20arrow%20slant%20-%20dark.svg"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "button-icon",
                                "button-icon-bottom"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                className={_utils.cx(_styles, "icon-1x1-small")}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                src="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c125c_Right%20arrow%20slant%20-%20dark.svg"
                              />
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Link>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "into-view-2")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_9f31a508-06f5-9027-f222-785fcf2aeba0-c4a9a21f"
                        )}
                        tag="div"
                      >
                        <_Builtin.Link
                          className={_utils.cx(_styles, "navbar-link")}
                          button={false}
                          options={{
                            href: "#",
                          }}
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "clip")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button-text")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "text-size-large"
                                )}
                                tag="div"
                              >
                                {"Specialties"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "button-text",
                                "button-text-bottom"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "text-size-large"
                                )}
                                tag="div"
                              >
                                {"Specialties"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "clip")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button-icon")}
                              tag="div"
                            >
                              <_Builtin.Image
                                className={_utils.cx(_styles, "icon-1x1-small")}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                src="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c125c_Right%20arrow%20slant%20-%20dark.svg"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "button-icon",
                                "button-icon-bottom"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                className={_utils.cx(_styles, "icon-1x1-small")}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                src="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c125c_Right%20arrow%20slant%20-%20dark.svg"
                              />
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Link>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "into-view-3")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_9f31a508-06f5-9027-f222-785fcf2aebae-c4a9a21f"
                        )}
                        tag="div"
                      >
                        <_Builtin.Link
                          className={_utils.cx(_styles, "navbar-link")}
                          button={false}
                          options={{
                            href: "#",
                          }}
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "clip")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button-text")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "text-size-large"
                                )}
                                tag="div"
                              >
                                {"About"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "button-text",
                                "button-text-bottom"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "text-size-large"
                                )}
                                tag="div"
                              >
                                {"About"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "clip")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button-icon")}
                              tag="div"
                            >
                              <_Builtin.Image
                                className={_utils.cx(_styles, "icon-1x1-small")}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                src="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c125c_Right%20arrow%20slant%20-%20dark.svg"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "button-icon",
                                "button-icon-bottom"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                className={_utils.cx(_styles, "icon-1x1-small")}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                src="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c125c_Right%20arrow%20slant%20-%20dark.svg"
                              />
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Link>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "into-view-4")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_9f31a508-06f5-9027-f222-785fcf2aebbc-c4a9a21f"
                        )}
                        tag="div"
                      >
                        <_Builtin.Link
                          className={_utils.cx(_styles, "navbar-link")}
                          button={false}
                          options={{
                            href: "#",
                          }}
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "clip")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button-text")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "text-size-large"
                                )}
                                tag="div"
                              >
                                {"Hire us"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "button-text",
                                "button-text-bottom"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "text-size-large"
                                )}
                                tag="div"
                              >
                                {"Hire us"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "clip")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button-icon")}
                              tag="div"
                            >
                              <_Builtin.Image
                                className={_utils.cx(_styles, "icon-1x1-small")}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                src="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c125c_Right%20arrow%20slant%20-%20dark.svg"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "button-icon",
                                "button-icon-bottom"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                className={_utils.cx(_styles, "icon-1x1-small")}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                src="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c125c_Right%20arrow%20slant%20-%20dark.svg"
                              />
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Link>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.NavbarMenu>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "menu-action")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "menu-bottom")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_3d886c63-bfa8-c8c9-b537-cf01dc530c52-c4a9a21f"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "menu-view-1")}
                      id={_utils.cx(
                        _styles,
                        "w-node-_3d886c63-bfa8-c8c9-b537-cf01dc530c53-c4a9a21f"
                      )}
                      tag="div"
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "menu-action-content")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_3d886c63-bfa8-c8c9-b537-cf01dc530c54-c4a9a21f"
                        )}
                        data-w-id="3d886c63-bfa8-c8c9-b537-cf01dc530c54"
                        button={false}
                        options={{
                          href: "https://webflow.com/made-in-webflow/website/gigi-template",
                          target: "_blank",
                        }}
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "clip")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "button-text")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "text-size-xsmall")}
                              tag="div"
                            >
                              {"Clone me on webflow"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "button-text",
                              "button-text-bottom"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "text-size-xsmall")}
                              tag="div"
                            >
                              {"Clone me on webflow"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "clip")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "button-icon")}
                            tag="div"
                          >
                            <_Builtin.Image
                              className={_utils.cx(_styles, "icon-1x1-small")}
                              loading="lazy"
                              width="auto"
                              height="auto"
                              src="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c125c_Right%20arrow%20slant%20-%20dark.svg"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "button-icon",
                              "button-icon-bottom"
                            )}
                            tag="div"
                          >
                            <_Builtin.Image
                              className={_utils.cx(_styles, "icon-1x1-small")}
                              loading="lazy"
                              width="auto"
                              height="auto"
                              src="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c125c_Right%20arrow%20slant%20-%20dark.svg"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Link>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "menu-social")}
                      id={_utils.cx(
                        _styles,
                        "w-node-_3d886c63-bfa8-c8c9-b537-cf01dc530c61-c4a9a21f"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "menu-view-2")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_3d886c63-bfa8-c8c9-b537-cf01dc530c62-c4a9a21f"
                        )}
                        tag="div"
                      >
                        <_Builtin.Link
                          className={_utils.cx(_styles, "social-link")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_3d886c63-bfa8-c8c9-b537-cf01dc530c63-c4a9a21f"
                          )}
                          button={false}
                          options={{
                            href: "https://twitter.com/Tycreated",
                            target: "_blank",
                          }}
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "clip")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button-text")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "text-size-xsmall"
                                )}
                                tag="div"
                              >
                                {"IG"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "button-text",
                                "button-text-bottom"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "text-size-xsmall"
                                )}
                                tag="div"
                              >
                                {"IG"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Link>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "menu-view-3")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_3d886c63-bfa8-c8c9-b537-cf01dc530c6b-c4a9a21f"
                        )}
                        tag="div"
                      >
                        <_Builtin.Link
                          className={_utils.cx(_styles, "social-link")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_3d886c63-bfa8-c8c9-b537-cf01dc530c6c-c4a9a21f"
                          )}
                          button={false}
                          options={{
                            href: "https://twitter.com/Tycreated",
                            target: "_blank",
                          }}
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "clip")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button-text")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "text-size-xsmall"
                                )}
                                tag="div"
                              >
                                {"TW"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "button-text",
                                "button-text-bottom"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "text-size-xsmall"
                                )}
                                tag="div"
                              >
                                {"TW"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Link>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "menu-view-4")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_3d886c63-bfa8-c8c9-b537-cf01dc530c74-c4a9a21f"
                        )}
                        tag="div"
                      >
                        <_Builtin.Link
                          className={_utils.cx(_styles, "social-link")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_3d886c63-bfa8-c8c9-b537-cf01dc530c75-c4a9a21f"
                          )}
                          button={false}
                          options={{
                            href: "https://webflow.com/@tycreated",
                            target: "_blank",
                          }}
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "clip")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button-text")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "text-size-xsmall"
                                )}
                                tag="div"
                              >
                                {"WF"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "button-text",
                                "button-text-bottom"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "text-size-xsmall"
                                )}
                                tag="div"
                              >
                                {"WF"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Link>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.DropdownList>
            </_Builtin.DropdownWrapper>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
