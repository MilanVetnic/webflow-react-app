import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Contact.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-35":{"id":"e-35","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-36"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button.is-icon","originalId":"6495b1cced3cbc7f8e52d3c4|5d244f16-1465-c25c-72b5-571d9d73e80a","appliesTo":"CLASS"},"targets":[{"selector":".button.is-icon","originalId":"6495b1cced3cbc7f8e52d3c4|5d244f16-1465-c25c-72b5-571d9d73e80a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1673816349512},"e-36":{"id":"e-36","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-35"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button.is-icon","originalId":"6495b1cced3cbc7f8e52d3c4|5d244f16-1465-c25c-72b5-571d9d73e80a","appliesTo":"CLASS"},"targets":[{"selector":".button.is-icon","originalId":"6495b1cced3cbc7f8e52d3c4|5d244f16-1465-c25c-72b5-571d9d73e80a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1673816349512},"e-243":{"id":"e-243","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-244"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c26f9503-d4f7-753c-aed7-325887d699b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c26f9503-d4f7-753c-aed7-325887d699b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1675553952245},"e-257":{"id":"e-257","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-258"}},"mediaQueries":["main"],"target":{"selector":".navbar-link","originalId":"dc1a5b8c-aded-519a-ccf9-36a4c4a9a22c","appliesTo":"CLASS"},"targets":[{"selector":".navbar-link","originalId":"dc1a5b8c-aded-519a-ccf9-36a4c4a9a22c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675630030632},"e-258":{"id":"e-258","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-257"}},"mediaQueries":["main"],"target":{"selector":".navbar-link","originalId":"dc1a5b8c-aded-519a-ccf9-36a4c4a9a22c","appliesTo":"CLASS"},"targets":[{"selector":".navbar-link","originalId":"dc1a5b8c-aded-519a-ccf9-36a4c4a9a22c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675630030634},"e-262":{"id":"e-262","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-263"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".about-image-item","originalId":"e6e4b14c-7a9c-6140-b06c-c17305d1fec7","appliesTo":"CLASS"},"targets":[{"selector":".about-image-item","originalId":"e6e4b14c-7a9c-6140-b06c-c17305d1fec7","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1675634325694},"e-286":{"id":"e-286","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-287"}},"mediaQueries":["main"],"target":{"selector":".social-link","originalId":"4cad311c-f4b5-1237-0190-af3b97389135","appliesTo":"CLASS"},"targets":[{"selector":".social-link","originalId":"4cad311c-f4b5-1237-0190-af3b97389135","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675713636786},"e-287":{"id":"e-287","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-286"}},"mediaQueries":["main"],"target":{"selector":".social-link","originalId":"4cad311c-f4b5-1237-0190-af3b97389135","appliesTo":"CLASS"},"targets":[{"selector":".social-link","originalId":"4cad311c-f4b5-1237-0190-af3b97389135","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675713636788},"e-292":{"id":"e-292","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-57","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-293"}},"mediaQueries":["main"],"target":{"id":"09258679-ff30-aef8-e743-2dd7c0e9ffb6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"09258679-ff30-aef8-e743-2dd7c0e9ffb6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675727606606},"e-293":{"id":"e-293","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-58","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-292"}},"mediaQueries":["main"],"target":{"id":"09258679-ff30-aef8-e743-2dd7c0e9ffb6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"09258679-ff30-aef8-e743-2dd7c0e9ffb6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675727606608},"e-315":{"id":"e-315","name":"","animationType":"custom","eventTypeId":"PAGE_FINISH","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-65","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-314"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675798693851},"e-322":{"id":"e-322","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-323"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1e1c0c42-e1d5-74ea-c873-5843634d5088","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1e1c0c42-e1d5-74ea-c873-5843634d5088","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1675801725062},"e-328":{"id":"e-328","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-329"}},"mediaQueries":["main"],"target":{"id":"3d886c63-bfa8-c8c9-b537-cf01dc530c54","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3d886c63-bfa8-c8c9-b537-cf01dc530c54","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675803215391},"e-329":{"id":"e-329","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-328"}},"mediaQueries":["main"],"target":{"id":"3d886c63-bfa8-c8c9-b537-cf01dc530c54","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3d886c63-bfa8-c8c9-b537-cf01dc530c54","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675803215394},"e-361":{"id":"e-361","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-74","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64b189fa-cb73-af81-24f3-59973f9af4e1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64b189fa-cb73-af81-24f3-59973f9af4e1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-74-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1675888741254},"e-369":{"id":"e-369","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-76","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-370"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64b189fa-cb73-af81-24f3-59973f9af4f7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64b189fa-cb73-af81-24f3-59973f9af4f7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1675890090467},"e-421":{"id":"e-421","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-90","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-422"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button.is-circle","originalId":"e5e6da75-9972-84be-61b1-fadd3b2ce2ce","appliesTo":"CLASS"},"targets":[{"selector":".button.is-circle","originalId":"e5e6da75-9972-84be-61b1-fadd3b2ce2ce","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676231756597},"e-422":{"id":"e-422","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-91","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-421"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button.is-circle","originalId":"e5e6da75-9972-84be-61b1-fadd3b2ce2ce","appliesTo":"CLASS"},"targets":[{"selector":".button.is-circle","originalId":"e5e6da75-9972-84be-61b1-fadd3b2ce2ce","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676231756601},"e-423":{"id":"e-423","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-424"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e7ac2076-65b2-2c77-bb57-ce2a53e39551","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e7ac2076-65b2-2c77-bb57-ce2a53e39551","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676232313105},"e-424":{"id":"e-424","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-423"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e7ac2076-65b2-2c77-bb57-ce2a53e39551","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e7ac2076-65b2-2c77-bb57-ce2a53e39551","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676232313108},"e-427":{"id":"e-427","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-93","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-428"}},"mediaQueries":["main"],"target":{"selector":".home-service-link","originalId":"6862f11d-9825-6b19-fa77-096aa25676f8","appliesTo":"CLASS"},"targets":[{"id":"6862f11d-9825-6b19-fa77-096aa25676f8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676233904786},"e-428":{"id":"e-428","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-94","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-427"}},"mediaQueries":["main"],"target":{"selector":".home-service-link","originalId":"6862f11d-9825-6b19-fa77-096aa25676f8","appliesTo":"CLASS"},"targets":[{"id":"6862f11d-9825-6b19-fa77-096aa25676f8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676233904786},"e-443":{"id":"e-443","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-84","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"be0089f2-2d76-e959-4e62-48dd5b72a050","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"be0089f2-2d76-e959-4e62-48dd5b72a050","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-84-p","smoothing":94,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1676243937690},"e-444":{"id":"e-444","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-84","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cf28d11-aa44-d451-10f4-fab861942aa2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cf28d11-aa44-d451-10f4-fab861942aa2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-84-p","smoothing":94,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1676244568574},"e-483":{"id":"e-483","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-484"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3df9e124-f997-7632-effe-05a7a8316e22","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3df9e124-f997-7632-effe-05a7a8316e22","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1676313993939},"e-485":{"id":"e-485","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-486"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e6e4b14c-7a9c-6140-b06c-c17305d1fed6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e6e4b14c-7a9c-6140-b06c-c17305d1fed6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":35,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1676314123620}},"actionLists":{"a-11":{"id":"a-11","title":"Button on hover","actionItemGroups":[{"actionItems":[{"id":"a-11-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-11-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":0,"yValue":0,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-11-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-text","selectorGuids":["025e9afb-9045-df61-7a2a-ab57f0346ef6"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-11-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuint","duration":900,"target":{},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-11-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".button-text","selectorGuids":["025e9afb-9045-df61-7a2a-ab57f0346ef6"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-11-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":100,"yValue":-100,"xUnit":"%","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1673816352122},"a-36":{"id":"a-36","title":"Button out hover","actionItemGroups":[{"actionItems":[{"id":"a-36-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":0,"target":{},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-36-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".button-text","selectorGuids":["025e9afb-9045-df61-7a2a-ab57f0346ef6"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-36-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":0,"yValue":0,"xUnit":"%","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1673816352122},"a-67":{"id":"a-67","title":"Word into view","actionItemGroups":[{"actionItems":[{"id":"a-67-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".word-one","selectorGuids":["dcd76060-c830-58d8-3d30-8d07c47be00b"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-67-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".word-one","selectorGuids":["dcd76060-c830-58d8-3d30-8d07c47be00b"]},"value":0,"unit":""}},{"id":"a-67-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".word-two","selectorGuids":["2577b25b-e118-fb4c-14ff-44c6b28b2418"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-67-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".word-two","selectorGuids":["2577b25b-e118-fb4c-14ff-44c6b28b2418"]},"value":0,"unit":""}},{"id":"a-67-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".word-three","selectorGuids":["6b3f7599-844e-2630-419e-80dcaf1fffd5"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-67-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".word-three","selectorGuids":["6b3f7599-844e-2630-419e-80dcaf1fffd5"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-67-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".word-one","selectorGuids":["dcd76060-c830-58d8-3d30-8d07c47be00b"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-67-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".word-one","selectorGuids":["dcd76060-c830-58d8-3d30-8d07c47be00b"]},"value":1,"unit":""}},{"id":"a-67-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":120,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".word-two","selectorGuids":["2577b25b-e118-fb4c-14ff-44c6b28b2418"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-67-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":120,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".word-two","selectorGuids":["2577b25b-e118-fb4c-14ff-44c6b28b2418"]},"value":1,"unit":""}},{"id":"a-67-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":240,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".word-three","selectorGuids":["6b3f7599-844e-2630-419e-80dcaf1fffd5"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-67-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":240,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".word-three","selectorGuids":["6b3f7599-844e-2630-419e-80dcaf1fffd5"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675801727656},"a-51":{"id":"a-51","title":"About image into view","actionItemGroups":[{"actionItems":[{"id":"a-51-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".about-image-holder","selectorGuids":["917243ba-4881-1afd-73cf-544029766503"]},"xValue":0.6,"yValue":0.6,"locked":true}},{"id":"a-51-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".about-image-holder","selectorGuids":["917243ba-4881-1afd-73cf-544029766503"]},"yValue":50,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-51-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".about-image-holder","selectorGuids":["917243ba-4881-1afd-73cf-544029766503"]},"value":0,"unit":""}},{"id":"a-51-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1.4,"yValue":1.4,"locked":true}}]},{"actionItems":[{"id":"a-51-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".about-image-holder","selectorGuids":["917243ba-4881-1afd-73cf-544029766503"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-51-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":2000,"target":{"useEventTarget":"CHILDREN","selector":".about-image-holder","selectorGuids":["917243ba-4881-1afd-73cf-544029766503"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-51-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".about-image-holder","selectorGuids":["917243ba-4881-1afd-73cf-544029766503"]},"value":1,"unit":""}},{"id":"a-51-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675634328017},"a-57":{"id":"a-57","title":"Service on hover","actionItemGroups":[{"actionItems":[{"id":"a-57-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-57-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-column-shade","selectorGuids":["82c9232c-9891-89fb-0ad4-d8c3be8863ac"]},"value":0,"unit":""}},{"id":"a-57-n-11","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-column-shade","selectorGuids":["82c9232c-9891-89fb-0ad4-d8c3be8863ac"]},"xValue":0.9,"yValue":0.95,"locked":false}},{"id":"a-57-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-item-image","selectorGuids":["4d90f3ff-a4af-d698-f3e8-2c788c70fe18"]},"value":0,"unit":""}},{"id":"a-57-n-6","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1.25,"yValue":1.25,"locked":true}},{"id":"a-57-n-5","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-item-image","selectorGuids":["4d90f3ff-a4af-d698-f3e8-2c788c70fe18"]},"xValue":0.75,"yValue":0.75,"locked":true}},{"id":"a-57-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-57-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-57-n-12","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".service-column-shade","selectorGuids":["82c9232c-9891-89fb-0ad4-d8c3be8863ac"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-57-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".service-column-shade","selectorGuids":["82c9232c-9891-89fb-0ad4-d8c3be8863ac"]},"value":1,"unit":""}},{"id":"a-57-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":50,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-57-n-7","actionTypeId":"TRANSFORM_SCALE","config":{"delay":100,"easing":"outExpo","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-57-n-8","actionTypeId":"TRANSFORM_SCALE","config":{"delay":100,"easing":"outExpo","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".service-item-image","selectorGuids":["4d90f3ff-a4af-d698-f3e8-2c788c70fe18"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-57-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".service-item-image","selectorGuids":["4d90f3ff-a4af-d698-f3e8-2c788c70fe18"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675727608971},"a-58":{"id":"a-58","title":"Service out hover","actionItemGroups":[{"actionItems":[{"id":"a-58-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-58-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".service-column-shade","selectorGuids":["82c9232c-9891-89fb-0ad4-d8c3be8863ac"]},"value":0,"unit":""}},{"id":"a-58-n-6","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".service-column-shade","selectorGuids":["82c9232c-9891-89fb-0ad4-d8c3be8863ac"]},"xValue":0.9,"yValue":0.95,"locked":false}},{"id":"a-58-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".service-item-image","selectorGuids":["4d90f3ff-a4af-d698-f3e8-2c788c70fe18"]},"value":0,"unit":""}},{"id":"a-58-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":50,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-58-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":50,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1.25,"yValue":1.25,"locked":true}},{"id":"a-58-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":50,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".service-item-image","selectorGuids":["4d90f3ff-a4af-d698-f3e8-2c788c70fe18"]},"xValue":0.75,"yValue":0.75,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1675727608971},"a-65":{"id":"a-65","title":"Home page load","actionItemGroups":[{"actionItems":[{"id":"a-65-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-word-one","selectorGuids":["94ace7c4-6605-720b-91a3-f0cee2764284"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-65-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"value":0,"unit":""}},{"id":"a-65-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-65-n-17","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-1","selectorGuids":["e7363d9f-0ac4-e7c2-a5ef-014e1b052439"]},"value":0,"unit":""}},{"id":"a-65-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-1","selectorGuids":["e7363d9f-0ac4-e7c2-a5ef-014e1b052439"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-65-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-word-two","selectorGuids":["a8ab4ccf-58be-c637-798d-6b0ee6ff7ff5"]},"value":0,"unit":""}},{"id":"a-65-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-word-one","selectorGuids":["94ace7c4-6605-720b-91a3-f0cee2764284"]},"value":0,"unit":""}},{"id":"a-65-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-word-three","selectorGuids":["24ea85f2-3ded-b6e1-22fd-da03e5452999"]},"value":0,"unit":""}},{"id":"a-65-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-word-three","selectorGuids":["24ea85f2-3ded-b6e1-22fd-da03e5452999"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-65-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-word-two","selectorGuids":["a8ab4ccf-58be-c637-798d-6b0ee6ff7ff5"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-65-n-24","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"value":0,"unit":""}},{"id":"a-65-n-25","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-65-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1800,"target":{"selector":".main-wrapper","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27150"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-65-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1000,"target":{"selector":".hero-word-one","selectorGuids":["94ace7c4-6605-720b-91a3-f0cee2764284"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-65-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".hero-word-one","selectorGuids":["94ace7c4-6605-720b-91a3-f0cee2764284"]},"value":1,"unit":""}},{"id":"a-65-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"outExpo","duration":1000,"target":{"selector":".hero-word-two","selectorGuids":["a8ab4ccf-58be-c637-798d-6b0ee6ff7ff5"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-65-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"","duration":300,"target":{"selector":".hero-word-two","selectorGuids":["a8ab4ccf-58be-c637-798d-6b0ee6ff7ff5"]},"value":1,"unit":""}},{"id":"a-65-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"outExpo","duration":1000,"target":{"selector":".hero-word-three","selectorGuids":["24ea85f2-3ded-b6e1-22fd-da03e5452999"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-65-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"","duration":300,"target":{"selector":".hero-word-three","selectorGuids":["24ea85f2-3ded-b6e1-22fd-da03e5452999"]},"value":1,"unit":""}},{"id":"a-65-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"outExpo","duration":1000,"target":{"selector":".load-1","selectorGuids":["e7363d9f-0ac4-e7c2-a5ef-014e1b052439"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-65-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"","duration":300,"target":{"selector":".load-1","selectorGuids":["e7363d9f-0ac4-e7c2-a5ef-014e1b052439"]},"value":1,"unit":""}},{"id":"a-65-n-20","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"outExpo","duration":1000,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-65-n-21","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"","duration":300,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"value":1,"unit":""}},{"id":"a-65-n-22","actionTypeId":"TRANSFORM_MOVE","config":{"delay":500,"easing":"outExpo","duration":1000,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-65-n-23","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"","duration":300,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675798698900},"a-69":{"id":"a-69","title":"Work page load","actionItemGroups":[{"actionItems":[{"id":"a-69-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-1","selectorGuids":["e7363d9f-0ac4-e7c2-a5ef-014e1b052439"]},"value":0,"unit":""}},{"id":"a-69-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-1","selectorGuids":["e7363d9f-0ac4-e7c2-a5ef-014e1b052439"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-69-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"value":0,"unit":""}},{"id":"a-69-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-69-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"value":0,"unit":""}},{"id":"a-69-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-69-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-4","selectorGuids":["2d42d1a8-7b7e-fbb5-a561-f9c28dbbb21b"]},"value":0,"unit":""}},{"id":"a-69-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-4","selectorGuids":["2d42d1a8-7b7e-fbb5-a561-f9c28dbbb21b"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-69-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}},{"id":"a-69-n-19","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-69-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1900,"target":{},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-69-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".load-1","selectorGuids":["e7363d9f-0ac4-e7c2-a5ef-014e1b052439"]},"value":1,"unit":""}},{"id":"a-69-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1200,"target":{"selector":".load-1","selectorGuids":["e7363d9f-0ac4-e7c2-a5ef-014e1b052439"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-69-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":120,"easing":"","duration":300,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"value":1,"unit":""}},{"id":"a-69-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":120,"easing":"outExpo","duration":1200,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-69-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":240,"easing":"","duration":300,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"value":1,"unit":""}},{"id":"a-69-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":240,"easing":"outExpo","duration":1200,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-69-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":360,"easing":"","duration":300,"target":{"selector":".load-4","selectorGuids":["2d42d1a8-7b7e-fbb5-a561-f9c28dbbb21b"]},"value":1,"unit":""}},{"id":"a-69-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":360,"easing":"outExpo","duration":1200,"target":{"selector":".load-4","selectorGuids":["2d42d1a8-7b7e-fbb5-a561-f9c28dbbb21b"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-69-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":480,"easing":"","duration":300,"target":{},"value":1,"unit":""}},{"id":"a-69-n-21","actionTypeId":"TRANSFORM_MOVE","config":{"delay":480,"easing":"outExpo","duration":1200,"target":{},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675799583070},"a-74":{"id":"a-74","title":"Paralax background","continuousParameterGroups":[{"id":"a-74-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-74-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1.1,"yValue":1.1,"locked":true}},{"id":"a-74-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".timeline-left-block","selectorGuids":["3e861fac-4744-32b8-d8a8-575e9692d14b"]},"yValue":35,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-74-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"yValue":-10,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-74-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"yValue":10,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-74-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1.08,"yValue":1.08,"locked":true}},{"id":"a-74-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".timeline-left-block","selectorGuids":["3e861fac-4744-32b8-d8a8-575e9692d14b"]},"yValue":-35,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}]}],"createdOn":1675888657619},"a-76":{"id":"a-76","title":"Timeline image in view","actionItemGroups":[{"actionItems":[{"id":"a-76-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".story-image","selectorGuids":["0c803d17-0ff9-b8de-7873-972ea7df89e0"]},"xValue":0.8,"yValue":0.8,"locked":true}},{"id":"a-76-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64b189fa-cb73-af81-24f3-59973f9af4f7"},"yValue":30,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-76-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".story-image","selectorGuids":["0c803d17-0ff9-b8de-7873-972ea7df89e0"]},"value":0,"unit":""}},{"id":"a-76-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1.2,"yValue":1.2,"locked":true}}]},{"actionItems":[{"id":"a-76-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".story-image","selectorGuids":["0c803d17-0ff9-b8de-7873-972ea7df89e0"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-76-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".story-image","selectorGuids":["0c803d17-0ff9-b8de-7873-972ea7df89e0"]},"value":1,"unit":""}},{"id":"a-76-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1600,"target":{"useEventTarget":true,"id":"64b189fa-cb73-af81-24f3-59973f9af4f7"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-76-n-8","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":1600,"target":{"useEventTarget":"CHILDREN","selector":".story-image","selectorGuids":["0c803d17-0ff9-b8de-7873-972ea7df89e0"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-76-n-9","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":1600,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675888015810},"a-90":{"id":"a-90","title":"Arrow link on hover","actionItemGroups":[{"actionItems":[{"id":"a-90-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":0,"yValue":0,"xUnit":"%","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-90-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":100,"yValue":100,"xUnit":"%","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1673816352122},"a-91":{"id":"a-91","title":"Arrow link out hover","actionItemGroups":[{"actionItems":[{"id":"a-91-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":0,"yValue":0,"xUnit":"%","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1673816352122},"a-93":{"id":"a-93","title":"Service link on hover","actionItemGroups":[{"actionItems":[{"id":"a-93-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-93-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-service-image","selectorGuids":["516e5d18-a264-47fb-9c1e-a14ba29a2a5d"]},"value":0,"unit":""}},{"id":"a-93-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1.4,"yValue":1.4,"locked":true}},{"id":"a-93-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-service-image","selectorGuids":["516e5d18-a264-47fb-9c1e-a14ba29a2a5d"]},"xValue":0.6,"yValue":0.6,"locked":true}},{"id":"a-93-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-93-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-93-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":80,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-93-n-8","actionTypeId":"TRANSFORM_SCALE","config":{"delay":80,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-93-n-9","actionTypeId":"TRANSFORM_SCALE","config":{"delay":80,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".home-service-image","selectorGuids":["516e5d18-a264-47fb-9c1e-a14ba29a2a5d"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-93-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":80,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".home-service-image","selectorGuids":["516e5d18-a264-47fb-9c1e-a14ba29a2a5d"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675967110626},"a-94":{"id":"a-94","title":"Service link out hover","actionItemGroups":[{"actionItems":[{"id":"a-94-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-94-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".home-service-image","selectorGuids":["516e5d18-a264-47fb-9c1e-a14ba29a2a5d"]},"value":0,"unit":""}},{"id":"a-94-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1.4,"yValue":1.4,"locked":true}},{"id":"a-94-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".home-service-image","selectorGuids":["516e5d18-a264-47fb-9c1e-a14ba29a2a5d"]},"xValue":0.6,"yValue":0.6,"locked":true}},{"id":"a-94-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":80,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1675967110626},"a-84":{"id":"a-84","title":"Section bkg","continuousParameterGroups":[{"id":"a-84-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-84-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".featured-background","selectorGuids":["f152caeb-9ab7-c7e0-afb1-b7358d143433"]},"xValue":0.9,"yValue":0.8,"locked":false}},{"id":"a-84-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1.1,"yValue":1.2,"locked":false}},{"id":"a-84-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"be0089f2-2d76-e959-4e62-48dd5b72a050"},"value":0,"unit":""}}]},{"keyframe":20,"actionItems":[{"id":"a-84-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"be0089f2-2d76-e959-4e62-48dd5b72a050"},"value":1,"unit":""}}]},{"keyframe":35,"actionItems":[{"id":"a-84-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".featured-background","selectorGuids":["f152caeb-9ab7-c7e0-afb1-b7358d143433"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-84-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1,"yValue":1,"locked":true}}]}]}],"createdOn":1676001351788},"a-114":{"id":"a-114","title":"Contact page load","actionItemGroups":[{"actionItems":[{"id":"a-114-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".word-one","selectorGuids":["dcd76060-c830-58d8-3d30-8d07c47be00b"]},"value":0,"unit":""}},{"id":"a-114-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".word-one","selectorGuids":["dcd76060-c830-58d8-3d30-8d07c47be00b"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-114-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".word-two","selectorGuids":["2577b25b-e118-fb4c-14ff-44c6b28b2418"]},"value":0,"unit":""}},{"id":"a-114-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".word-two","selectorGuids":["2577b25b-e118-fb4c-14ff-44c6b28b2418"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-114-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-line-1","selectorGuids":["6377caf7-19be-0bec-68ca-bf17bbb6d378"]},"value":0,"unit":""}},{"id":"a-114-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-line-1","selectorGuids":["6377caf7-19be-0bec-68ca-bf17bbb6d378"]},"xValue":-100,"yValue":null,"xUnit":"%","yUnit":"rem","zUnit":"PX"}},{"id":"a-114-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"value":0,"unit":""}},{"id":"a-114-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-114-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"value":0,"unit":""}},{"id":"a-114-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-114-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-4","selectorGuids":["2d42d1a8-7b7e-fbb5-a561-f9c28dbbb21b"]},"value":0,"unit":""}},{"id":"a-114-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-4","selectorGuids":["2d42d1a8-7b7e-fbb5-a561-f9c28dbbb21b"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-114-n-26","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".word-three","selectorGuids":["6b3f7599-844e-2630-419e-80dcaf1fffd5"]},"value":0,"unit":""}},{"id":"a-114-n-27","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".word-three","selectorGuids":["6b3f7599-844e-2630-419e-80dcaf1fffd5"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-114-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1900,"target":{"selector":".contact-hero","selectorGuids":["f27702d9-cf4d-f452-ffdc-583a677eb87a"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-114-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".word-one","selectorGuids":["dcd76060-c830-58d8-3d30-8d07c47be00b"]},"value":1,"unit":""}},{"id":"a-114-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1200,"target":{"selector":".word-one","selectorGuids":["dcd76060-c830-58d8-3d30-8d07c47be00b"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-114-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":120,"easing":"","duration":300,"target":{"selector":".word-two","selectorGuids":["2577b25b-e118-fb4c-14ff-44c6b28b2418"]},"value":1,"unit":""}},{"id":"a-114-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":120,"easing":"outExpo","duration":1200,"target":{"selector":".word-two","selectorGuids":["2577b25b-e118-fb4c-14ff-44c6b28b2418"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-114-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":280,"easing":"","duration":300,"target":{"selector":".load-line-1","selectorGuids":["6377caf7-19be-0bec-68ca-bf17bbb6d378"]},"value":1,"unit":""}},{"id":"a-114-n-19","actionTypeId":"TRANSFORM_MOVE","config":{"delay":280,"easing":"outExpo","duration":1600,"target":{"selector":".load-line-1","selectorGuids":["6377caf7-19be-0bec-68ca-bf17bbb6d378"]},"xValue":0,"yValue":null,"xUnit":"%","yUnit":"rem","zUnit":"PX"}},{"id":"a-114-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"","duration":300,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"value":1,"unit":""}},{"id":"a-114-n-21","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"outExpo","duration":1200,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-114-n-28","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"","duration":300,"target":{"selector":".word-three","selectorGuids":["6b3f7599-844e-2630-419e-80dcaf1fffd5"]},"value":1,"unit":""}},{"id":"a-114-n-29","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"outExpo","duration":1200,"target":{"selector":".word-three","selectorGuids":["6b3f7599-844e-2630-419e-80dcaf1fffd5"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-114-n-22","actionTypeId":"STYLE_OPACITY","config":{"delay":520,"easing":"","duration":300,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"value":1,"unit":""}},{"id":"a-114-n-23","actionTypeId":"TRANSFORM_MOVE","config":{"delay":520,"easing":"outExpo","duration":1200,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-114-n-24","actionTypeId":"STYLE_OPACITY","config":{"delay":640,"easing":"","duration":300,"target":{"selector":".load-4","selectorGuids":["2d42d1a8-7b7e-fbb5-a561-f9c28dbbb21b"]},"value":1,"unit":""}},{"id":"a-114-n-25","actionTypeId":"TRANSFORM_MOVE","config":{"delay":640,"easing":"outExpo","duration":1200,"target":{"selector":".load-4","selectorGuids":["2d42d1a8-7b7e-fbb5-a561-f9c28dbbb21b"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675799583070}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Contact({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "contact-hero")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "contact-hero-block")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "contact-base")}
          id={_utils.cx(
            _styles,
            "w-node-ec6334e4-6e45-72fa-024a-1f91d0674a9c-d0674a9a"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "contact-hero-left")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "padding-horizontal",
                "padding-small"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "padding-top", "padding-xxlarge")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "padding-bottom",
                    "padding-large"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "contact-hero-top")}
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
                        <_Builtin.Span
                          className={_utils.cx(_styles, "word-one")}
                        >
                          {"Start"}
                        </_Builtin.Span>{" "}
                        <_Builtin.Span
                          className={_utils.cx(_styles, "word-two")}
                        >
                          {"a"}
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
                          {"Project"}
                        </_Builtin.Span>
                      </_Builtin.Heading>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "skill-steps")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "tag-grid")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "load-2")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "tag-item")}
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
                          {"01"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "load-3")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "tag-item", "tag-button")}
                        tag="div"
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
                                "text-size-tiny",
                                "text-style-allcaps"
                              )}
                              tag="div"
                            >
                              {"Contact"}
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
                              {"Category"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "skill-hero-text")}
                    id={_utils.cx(
                      _styles,
                      "w-node-ec6334e4-6e45-72fa-024a-1f91d0674abc-d0674a9a"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "load-4")}
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
                          "Fill out the form below to get in touch with our team."
                        }
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "top-line-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "load-line-1")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "inside-line")}
                        tag="div"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "contact-hero-left")}
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
                className={_utils.cx(
                  _styles,
                  "padding-vertical",
                  "padding-medium"
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-ec6334e4-6e45-72fa-024a-1f91d0674ac5-d0674a9a"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "contact-content")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "contact-body")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "contact-body-block")}
                      tag="div"
                    >
                      <_Builtin.FormWrapper
                        className={_utils.cx(_styles, "form-block")}
                      >
                        <_Builtin.FormForm
                          name="email-form"
                          data-name="Email Form"
                          method="get"
                          id="email-form"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-small"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "margin-bottom",
                                "margin-tiny"
                              )}
                              tag="div"
                            >
                              <_Builtin.FormBlockLabel
                                className={_utils.cx(_styles, "form_label")}
                                htmlFor="name"
                              >
                                {"Your name"}
                              </_Builtin.FormBlockLabel>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "form-two-columns")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "form-input-block"
                                )}
                                id={_utils.cx(
                                  _styles,
                                  "w-node-ec6334e4-6e45-72fa-024a-1f91d0674ad0-d0674a9a"
                                )}
                                tag="div"
                              >
                                <_Builtin.FormTextInput
                                  className={_utils.cx(_styles, "form-field")}
                                  autoFocus={false}
                                  maxLength={256}
                                  name="First-name-2"
                                  data-name="First Name 2"
                                  placeholder="First name"
                                  type="text"
                                  disabled={false}
                                  required={false}
                                  id="First-name-2"
                                />
                              </_Builtin.Block>
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "form-input-block"
                                )}
                                id={_utils.cx(
                                  _styles,
                                  "w-node-ec6334e4-6e45-72fa-024a-1f91d0674ad2-d0674a9a"
                                )}
                                tag="div"
                              >
                                <_Builtin.FormTextInput
                                  className={_utils.cx(_styles, "form-field")}
                                  autoFocus={false}
                                  maxLength={256}
                                  name="Last-name-2"
                                  data-name="Last Name 2"
                                  placeholder="Last name"
                                  type="text"
                                  disabled={false}
                                  required={false}
                                  id="Last-name-2"
                                />
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-small"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "margin-bottom",
                                "margin-tiny"
                              )}
                              tag="div"
                            >
                              <_Builtin.FormBlockLabel
                                className={_utils.cx(_styles, "form_label")}
                                htmlFor="name"
                              >
                                {"Your phone"}
                              </_Builtin.FormBlockLabel>
                            </_Builtin.Block>
                            <_Builtin.Block tag="div">
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "form-input-block"
                                )}
                                tag="div"
                              >
                                <_Builtin.FormTextInput
                                  className={_utils.cx(_styles, "form-field")}
                                  autoFocus={false}
                                  maxLength={256}
                                  name="Phone-6"
                                  data-name="Phone 6"
                                  placeholder="(555) 555-5555"
                                  type="tel"
                                  disabled={false}
                                  required={false}
                                  id="Phone-6"
                                />
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-small"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "margin-bottom",
                                "margin-tiny"
                              )}
                              tag="div"
                            >
                              <_Builtin.FormBlockLabel
                                className={_utils.cx(_styles, "form_label")}
                                htmlFor="name"
                              >
                                {"Your email"}
                              </_Builtin.FormBlockLabel>
                            </_Builtin.Block>
                            <_Builtin.Block tag="div">
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "form-input-block"
                                )}
                                tag="div"
                              >
                                <_Builtin.FormTextInput
                                  className={_utils.cx(_styles, "form-field")}
                                  autoFocus={false}
                                  maxLength={256}
                                  name="Phone-5"
                                  data-name="Phone 5"
                                  placeholder="(555) 555-5555"
                                  type="tel"
                                  disabled={false}
                                  required={false}
                                  id="Phone-5"
                                />
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-small"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "margin-bottom",
                                "margin-tiny"
                              )}
                              tag="div"
                            >
                              <_Builtin.FormBlockLabel
                                className={_utils.cx(_styles, "form_label")}
                                htmlFor="name"
                              >
                                {"Your message"}
                              </_Builtin.FormBlockLabel>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "form-input-block")}
                              tag="div"
                            >
                              <_Builtin.FormTextarea
                                className={_utils.cx(
                                  _styles,
                                  "form-field",
                                  "is-text-area"
                                )}
                                name="Message-2"
                                maxLength={5000}
                                data-name="Message 2"
                                placeholder="Share more details"
                                required={false}
                                autoFocus={false}
                                id="Message-2"
                              />
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.FormButton
                            className={_utils.cx(
                              _styles,
                              "button",
                              "is-form-submit"
                            )}
                            type="submit"
                            value="Send now"
                            data-wait="Please wait..."
                          />
                        </_Builtin.FormForm>
                        <_Builtin.FormSuccessMessage
                          className={_utils.cx(_styles, "form-message-success")}
                        >
                          <_Builtin.Block tag="div">
                            {"Thank you! Your submission has been received!"}
                          </_Builtin.Block>
                        </_Builtin.FormSuccessMessage>
                        <_Builtin.FormErrorMessage>
                          <_Builtin.Block tag="div">
                            {
                              "Oops! Something went wrong while submitting the form."
                            }
                          </_Builtin.Block>
                        </_Builtin.FormErrorMessage>
                      </_Builtin.FormWrapper>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "contact-hero-image")}
          id={_utils.cx(
            _styles,
            "w-node-ec6334e4-6e45-72fa-024a-1f91d0674aef-d0674a9a"
          )}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "image-fill")}
            loading="lazy"
            width="auto"
            height="auto"
            src="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c12db_Office%20mockup%2003%20(comp).webp"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "image-overlay")}
            tag="div"
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
