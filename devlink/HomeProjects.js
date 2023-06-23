import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./HomeProjects.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-7":{"id":"e-7","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".home-service-grid","originalId":"b399721e-ea5d-569e-8c44-9a8d43254b07","appliesTo":"CLASS"},"targets":[{"selector":".home-service-grid","originalId":"b399721e-ea5d-569e-8c44-9a8d43254b07","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":60,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1673805670556},"e-35":{"id":"e-35","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-36"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button.is-icon","originalId":"648482ba6bff1a3a6f0c1191|5d244f16-1465-c25c-72b5-571d9d73e80a","appliesTo":"CLASS"},"targets":[{"selector":".button.is-icon","originalId":"648482ba6bff1a3a6f0c1191|5d244f16-1465-c25c-72b5-571d9d73e80a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1673816349512},"e-36":{"id":"e-36","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-35"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button.is-icon","originalId":"648482ba6bff1a3a6f0c1191|5d244f16-1465-c25c-72b5-571d9d73e80a","appliesTo":"CLASS"},"targets":[{"selector":".button.is-icon","originalId":"648482ba6bff1a3a6f0c1191|5d244f16-1465-c25c-72b5-571d9d73e80a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1673816349512},"e-243":{"id":"e-243","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-244"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c26f9503-d4f7-753c-aed7-325887d699b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c26f9503-d4f7-753c-aed7-325887d699b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1675553952245},"e-257":{"id":"e-257","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-258"}},"mediaQueries":["main"],"target":{"selector":".navbar-link","originalId":"dc1a5b8c-aded-519a-ccf9-36a4c4a9a22c","appliesTo":"CLASS"},"targets":[{"selector":".navbar-link","originalId":"dc1a5b8c-aded-519a-ccf9-36a4c4a9a22c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675630030632},"e-258":{"id":"e-258","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-257"}},"mediaQueries":["main"],"target":{"selector":".navbar-link","originalId":"dc1a5b8c-aded-519a-ccf9-36a4c4a9a22c","appliesTo":"CLASS"},"targets":[{"selector":".navbar-link","originalId":"dc1a5b8c-aded-519a-ccf9-36a4c4a9a22c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675630030634},"e-262":{"id":"e-262","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-263"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".about-image-item","originalId":"e6e4b14c-7a9c-6140-b06c-c17305d1fec7","appliesTo":"CLASS"},"targets":[{"selector":".about-image-item","originalId":"e6e4b14c-7a9c-6140-b06c-c17305d1fec7","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1675634325694},"e-286":{"id":"e-286","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-287"}},"mediaQueries":["main"],"target":{"selector":".social-link","originalId":"4cad311c-f4b5-1237-0190-af3b97389135","appliesTo":"CLASS"},"targets":[{"selector":".social-link","originalId":"4cad311c-f4b5-1237-0190-af3b97389135","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675713636786},"e-287":{"id":"e-287","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-286"}},"mediaQueries":["main"],"target":{"selector":".social-link","originalId":"4cad311c-f4b5-1237-0190-af3b97389135","appliesTo":"CLASS"},"targets":[{"selector":".social-link","originalId":"4cad311c-f4b5-1237-0190-af3b97389135","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675713636788},"e-292":{"id":"e-292","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-57","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-293"}},"mediaQueries":["main"],"target":{"id":"09258679-ff30-aef8-e743-2dd7c0e9ffb6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"09258679-ff30-aef8-e743-2dd7c0e9ffb6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675727606606},"e-293":{"id":"e-293","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-58","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-292"}},"mediaQueries":["main"],"target":{"id":"09258679-ff30-aef8-e743-2dd7c0e9ffb6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"09258679-ff30-aef8-e743-2dd7c0e9ffb6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675727606608},"e-299":{"id":"e-299","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-300"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b1c5fcfd-0252-d7d0-8e90-c90df2f6a59e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b1c5fcfd-0252-d7d0-8e90-c90df2f6a59e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675740820652},"e-300":{"id":"e-300","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-49","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-299"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b1c5fcfd-0252-d7d0-8e90-c90df2f6a59e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b1c5fcfd-0252-d7d0-8e90-c90df2f6a59e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675740820655},"e-322":{"id":"e-322","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-323"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1e1c0c42-e1d5-74ea-c873-5843634d5088","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1e1c0c42-e1d5-74ea-c873-5843634d5088","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1675801725062},"e-328":{"id":"e-328","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-329"}},"mediaQueries":["main"],"target":{"id":"3d886c63-bfa8-c8c9-b537-cf01dc530c54","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3d886c63-bfa8-c8c9-b537-cf01dc530c54","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675803215391},"e-329":{"id":"e-329","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-328"}},"mediaQueries":["main"],"target":{"id":"3d886c63-bfa8-c8c9-b537-cf01dc530c54","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3d886c63-bfa8-c8c9-b537-cf01dc530c54","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675803215394},"e-361":{"id":"e-361","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-74","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64b189fa-cb73-af81-24f3-59973f9af4e1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64b189fa-cb73-af81-24f3-59973f9af4e1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-74-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1675888741254},"e-363":{"id":"e-363","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-75","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-364"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64b189fa-cb73-af81-24f3-59973f9af4fc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64b189fa-cb73-af81-24f3-59973f9af4fc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1675890090467},"e-365":{"id":"e-365","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-75","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-366"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64b189fa-cb73-af81-24f3-59973f9af4e9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64b189fa-cb73-af81-24f3-59973f9af4e9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":35,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1675890090467},"e-369":{"id":"e-369","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-76","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-370"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64b189fa-cb73-af81-24f3-59973f9af4f7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64b189fa-cb73-af81-24f3-59973f9af4f7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1675890090467},"e-421":{"id":"e-421","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-90","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-422"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button.is-circle","originalId":"e5e6da75-9972-84be-61b1-fadd3b2ce2ce","appliesTo":"CLASS"},"targets":[{"selector":".button.is-circle","originalId":"e5e6da75-9972-84be-61b1-fadd3b2ce2ce","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676231756597},"e-422":{"id":"e-422","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-91","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-421"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button.is-circle","originalId":"e5e6da75-9972-84be-61b1-fadd3b2ce2ce","appliesTo":"CLASS"},"targets":[{"selector":".button.is-circle","originalId":"e5e6da75-9972-84be-61b1-fadd3b2ce2ce","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676231756601},"e-423":{"id":"e-423","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-424"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e7ac2076-65b2-2c77-bb57-ce2a53e39551","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e7ac2076-65b2-2c77-bb57-ce2a53e39551","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676232313105},"e-424":{"id":"e-424","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-423"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e7ac2076-65b2-2c77-bb57-ce2a53e39551","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e7ac2076-65b2-2c77-bb57-ce2a53e39551","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676232313108},"e-427":{"id":"e-427","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-93","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-428"}},"mediaQueries":["main"],"target":{"selector":".home-service-link","originalId":"6862f11d-9825-6b19-fa77-096aa25676f8","appliesTo":"CLASS"},"targets":[{"id":"6862f11d-9825-6b19-fa77-096aa25676f8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676233904786},"e-428":{"id":"e-428","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-94","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-427"}},"mediaQueries":["main"],"target":{"selector":".home-service-link","originalId":"6862f11d-9825-6b19-fa77-096aa25676f8","appliesTo":"CLASS"},"targets":[{"id":"6862f11d-9825-6b19-fa77-096aa25676f8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676233904786},"e-441":{"id":"e-441","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-105","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-442"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6862f11d-9825-6b19-fa77-096aa25676f6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6862f11d-9825-6b19-fa77-096aa25676f6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":35,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1676234102300},"e-443":{"id":"e-443","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-84","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"be0089f2-2d76-e959-4e62-48dd5b72a050","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"be0089f2-2d76-e959-4e62-48dd5b72a050","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-84-p","smoothing":94,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1676243937690},"e-444":{"id":"e-444","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-84","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cf28d11-aa44-d451-10f4-fab861942aa2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cf28d11-aa44-d451-10f4-fab861942aa2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-84-p","smoothing":94,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1676244568574},"e-445":{"id":"e-445","name":"","animationType":"custom","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-107","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-446"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".testimonial-slide","originalId":"2cf28d11-aa44-d451-10f4-fab861942aa8","appliesTo":"CLASS"},"targets":[{"selector":".testimonial-slide","originalId":"2cf28d11-aa44-d451-10f4-fab861942aa8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676244904105},"e-446":{"id":"e-446","name":"","animationType":"custom","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-108","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-445"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".testimonial-slide","originalId":"2cf28d11-aa44-d451-10f4-fab861942aa8","appliesTo":"CLASS"},"targets":[{"selector":".testimonial-slide","originalId":"2cf28d11-aa44-d451-10f4-fab861942aa8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676244904108},"e-454":{"id":"e-454","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-109","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-455"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".service-tag","originalId":"648482ba6bff1a3a6f0c11a0|3f8df311-d7f0-c004-daad-b09a878285e8","appliesTo":"CLASS"},"targets":[{"selector":".service-tag","originalId":"648482ba6bff1a3a6f0c11a0|3f8df311-d7f0-c004-daad-b09a878285e8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1676311491516},"e-483":{"id":"e-483","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-484"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3df9e124-f997-7632-effe-05a7a8316e22","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3df9e124-f997-7632-effe-05a7a8316e22","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1676313993939},"e-485":{"id":"e-485","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-486"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e6e4b14c-7a9c-6140-b06c-c17305d1fed6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e6e4b14c-7a9c-6140-b06c-c17305d1fed6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":35,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1676314123620},"e-487":{"id":"e-487","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-110","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-488"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cf28d11-aa44-d451-10f4-fab861942aae","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cf28d11-aa44-d451-10f4-fab861942aae","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676318274885},"e-488":{"id":"e-488","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-111","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-487"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cf28d11-aa44-d451-10f4-fab861942aae","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cf28d11-aa44-d451-10f4-fab861942aae","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676318274887},"e-489":{"id":"e-489","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-112","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-490"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cf28d11-aa44-d451-10f4-fab861942ab4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cf28d11-aa44-d451-10f4-fab861942ab4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676318345550},"e-490":{"id":"e-490","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-113","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-489"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cf28d11-aa44-d451-10f4-fab861942ab4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cf28d11-aa44-d451-10f4-fab861942ab4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676318345552},"e-493":{"id":"e-493","name":"","animationType":"custom","eventTypeId":"PAGE_FINISH","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-114","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-492"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676330080685}},"actionLists":{"a-2":{"id":"a-2","title":"Into view content","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":0,"unit":""}},{"id":"a-2-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":0,"unit":""}},{"id":"a-2-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":0,"unit":""}},{"id":"a-2-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"value":0,"unit":""}},{"id":"a-2-n-19","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"value":0,"unit":""}},{"id":"a-2-n-22","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-23","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}},{"id":"a-2-n-24","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-25","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}},{"id":"a-2-n-26","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-27","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-2-n-21","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":150,"target":{"useEventTarget":true,"id":"648482ba6bff1a3a6f0c1191|4cfc427b-ecb5-8046-2f51-353cd0e4bf6e"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-2-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":1,"unit":""}},{"id":"a-2-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":130,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":1,"unit":""}},{"id":"a-2-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":130,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":260,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":1,"unit":""}},{"id":"a-2-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":260,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":390,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"value":1,"unit":""}},{"id":"a-2-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":390,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-17","actionTypeId":"STYLE_OPACITY","config":{"delay":520,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"value":1,"unit":""}},{"id":"a-2-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":520,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-28","actionTypeId":"STYLE_OPACITY","config":{"delay":650,"easing":"","duration":300,"target":{},"value":1,"unit":""}},{"id":"a-2-n-29","actionTypeId":"TRANSFORM_MOVE","config":{"delay":650,"easing":"outExpo","duration":1200,"target":{},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-31","actionTypeId":"TRANSFORM_MOVE","config":{"delay":780,"easing":"outExpo","duration":1200,"target":{},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-30","actionTypeId":"STYLE_OPACITY","config":{"delay":780,"easing":"","duration":300,"target":{},"value":1,"unit":""}},{"id":"a-2-n-33","actionTypeId":"TRANSFORM_MOVE","config":{"delay":910,"easing":"outExpo","duration":1200,"target":{},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-32","actionTypeId":"STYLE_OPACITY","config":{"delay":910,"easing":"","duration":300,"target":{},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1673805673015},"a-11":{"id":"a-11","title":"Button on hover","actionItemGroups":[{"actionItems":[{"id":"a-11-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-11-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":0,"yValue":0,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-11-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-text","selectorGuids":["025e9afb-9045-df61-7a2a-ab57f0346ef6"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-11-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuint","duration":900,"target":{},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-11-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".button-text","selectorGuids":["025e9afb-9045-df61-7a2a-ab57f0346ef6"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-11-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":100,"yValue":-100,"xUnit":"%","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1673816352122},"a-36":{"id":"a-36","title":"Button out hover","actionItemGroups":[{"actionItems":[{"id":"a-36-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":0,"target":{},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-36-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".button-text","selectorGuids":["025e9afb-9045-df61-7a2a-ab57f0346ef6"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-36-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":0,"yValue":0,"xUnit":"%","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1673816352122},"a-67":{"id":"a-67","title":"Word into view","actionItemGroups":[{"actionItems":[{"id":"a-67-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".word-one","selectorGuids":["dcd76060-c830-58d8-3d30-8d07c47be00b"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-67-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".word-one","selectorGuids":["dcd76060-c830-58d8-3d30-8d07c47be00b"]},"value":0,"unit":""}},{"id":"a-67-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".word-two","selectorGuids":["2577b25b-e118-fb4c-14ff-44c6b28b2418"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-67-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".word-two","selectorGuids":["2577b25b-e118-fb4c-14ff-44c6b28b2418"]},"value":0,"unit":""}},{"id":"a-67-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".word-three","selectorGuids":["6b3f7599-844e-2630-419e-80dcaf1fffd5"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-67-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".word-three","selectorGuids":["6b3f7599-844e-2630-419e-80dcaf1fffd5"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-67-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".word-one","selectorGuids":["dcd76060-c830-58d8-3d30-8d07c47be00b"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-67-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".word-one","selectorGuids":["dcd76060-c830-58d8-3d30-8d07c47be00b"]},"value":1,"unit":""}},{"id":"a-67-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":120,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".word-two","selectorGuids":["2577b25b-e118-fb4c-14ff-44c6b28b2418"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-67-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":120,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".word-two","selectorGuids":["2577b25b-e118-fb4c-14ff-44c6b28b2418"]},"value":1,"unit":""}},{"id":"a-67-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":240,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".word-three","selectorGuids":["6b3f7599-844e-2630-419e-80dcaf1fffd5"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-67-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":240,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".word-three","selectorGuids":["6b3f7599-844e-2630-419e-80dcaf1fffd5"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675801727656},"a-51":{"id":"a-51","title":"About image into view","actionItemGroups":[{"actionItems":[{"id":"a-51-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".about-image-holder","selectorGuids":["917243ba-4881-1afd-73cf-544029766503"]},"xValue":0.6,"yValue":0.6,"locked":true}},{"id":"a-51-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".about-image-holder","selectorGuids":["917243ba-4881-1afd-73cf-544029766503"]},"yValue":50,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-51-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".about-image-holder","selectorGuids":["917243ba-4881-1afd-73cf-544029766503"]},"value":0,"unit":""}},{"id":"a-51-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1.4,"yValue":1.4,"locked":true}}]},{"actionItems":[{"id":"a-51-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".about-image-holder","selectorGuids":["917243ba-4881-1afd-73cf-544029766503"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-51-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":2000,"target":{"useEventTarget":"CHILDREN","selector":".about-image-holder","selectorGuids":["917243ba-4881-1afd-73cf-544029766503"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-51-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".about-image-holder","selectorGuids":["917243ba-4881-1afd-73cf-544029766503"]},"value":1,"unit":""}},{"id":"a-51-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675634328017},"a-57":{"id":"a-57","title":"Service on hover","actionItemGroups":[{"actionItems":[{"id":"a-57-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-57-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-column-shade","selectorGuids":["82c9232c-9891-89fb-0ad4-d8c3be8863ac"]},"value":0,"unit":""}},{"id":"a-57-n-11","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-column-shade","selectorGuids":["82c9232c-9891-89fb-0ad4-d8c3be8863ac"]},"xValue":0.9,"yValue":0.95,"locked":false}},{"id":"a-57-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-item-image","selectorGuids":["4d90f3ff-a4af-d698-f3e8-2c788c70fe18"]},"value":0,"unit":""}},{"id":"a-57-n-6","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1.25,"yValue":1.25,"locked":true}},{"id":"a-57-n-5","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-item-image","selectorGuids":["4d90f3ff-a4af-d698-f3e8-2c788c70fe18"]},"xValue":0.75,"yValue":0.75,"locked":true}},{"id":"a-57-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-57-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-57-n-12","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".service-column-shade","selectorGuids":["82c9232c-9891-89fb-0ad4-d8c3be8863ac"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-57-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".service-column-shade","selectorGuids":["82c9232c-9891-89fb-0ad4-d8c3be8863ac"]},"value":1,"unit":""}},{"id":"a-57-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":50,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-57-n-7","actionTypeId":"TRANSFORM_SCALE","config":{"delay":100,"easing":"outExpo","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-57-n-8","actionTypeId":"TRANSFORM_SCALE","config":{"delay":100,"easing":"outExpo","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".service-item-image","selectorGuids":["4d90f3ff-a4af-d698-f3e8-2c788c70fe18"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-57-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".service-item-image","selectorGuids":["4d90f3ff-a4af-d698-f3e8-2c788c70fe18"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675727608971},"a-58":{"id":"a-58","title":"Service out hover","actionItemGroups":[{"actionItems":[{"id":"a-58-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-58-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".service-column-shade","selectorGuids":["82c9232c-9891-89fb-0ad4-d8c3be8863ac"]},"value":0,"unit":""}},{"id":"a-58-n-6","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".service-column-shade","selectorGuids":["82c9232c-9891-89fb-0ad4-d8c3be8863ac"]},"xValue":0.9,"yValue":0.95,"locked":false}},{"id":"a-58-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".service-item-image","selectorGuids":["4d90f3ff-a4af-d698-f3e8-2c788c70fe18"]},"value":0,"unit":""}},{"id":"a-58-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":50,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-58-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":50,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1.25,"yValue":1.25,"locked":true}},{"id":"a-58-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":50,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".service-item-image","selectorGuids":["4d90f3ff-a4af-d698-f3e8-2c788c70fe18"]},"xValue":0.75,"yValue":0.75,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1675727608971},"a-49":{"id":"a-49","title":"Out view content","actionItemGroups":[{"actionItems":[{"id":"a-49-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-49-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":0,"unit":""}},{"id":"a-49-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":60,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":0,"unit":""}},{"id":"a-49-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":60,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-49-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":120,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":0,"unit":""}},{"id":"a-49-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":120,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-49-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":180,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-49-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":180,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"value":0,"unit":""}},{"id":"a-49-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":240,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"value":0,"unit":""}},{"id":"a-49-n-21","actionTypeId":"TRANSFORM_MOVE","config":{"delay":240,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1673805673015},"a-74":{"id":"a-74","title":"Paralax background","continuousParameterGroups":[{"id":"a-74-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-74-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1.1,"yValue":1.1,"locked":true}},{"id":"a-74-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".timeline-left-block","selectorGuids":["3e861fac-4744-32b8-d8a8-575e9692d14b"]},"yValue":35,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-74-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"yValue":-10,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-74-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"yValue":10,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-74-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1.08,"yValue":1.08,"locked":true}},{"id":"a-74-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".timeline-left-block","selectorGuids":["3e861fac-4744-32b8-d8a8-575e9692d14b"]},"yValue":-35,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}]}],"createdOn":1675888657619},"a-75":{"id":"a-75","title":"Into view portfolio list","actionItemGroups":[{"actionItems":[{"id":"a-75-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-75-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":0,"unit":""}},{"id":"a-75-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-75-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":0,"unit":""}},{"id":"a-75-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-75-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":0,"unit":""}},{"id":"a-75-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-75-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"value":0,"unit":""}},{"id":"a-75-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-75-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-75-n-17","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":150,"target":{"useEventTarget":true,"id":"648482ba6bff1a3a6f0c1195|4cfc427b-ecb5-8046-2f51-353cd0e4bf6e"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-75-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-75-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":1,"unit":""}},{"id":"a-75-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":130,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":1,"unit":""}},{"id":"a-75-n-21","actionTypeId":"TRANSFORM_MOVE","config":{"delay":130,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-75-n-22","actionTypeId":"STYLE_OPACITY","config":{"delay":260,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":1,"unit":""}},{"id":"a-75-n-23","actionTypeId":"TRANSFORM_MOVE","config":{"delay":260,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-75-n-24","actionTypeId":"STYLE_OPACITY","config":{"delay":390,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"value":1,"unit":""}},{"id":"a-75-n-25","actionTypeId":"TRANSFORM_MOVE","config":{"delay":390,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-75-n-26","actionTypeId":"STYLE_OPACITY","config":{"delay":520,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"value":1,"unit":""}},{"id":"a-75-n-27","actionTypeId":"TRANSFORM_MOVE","config":{"delay":520,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1673805673015},"a-76":{"id":"a-76","title":"Timeline image in view","actionItemGroups":[{"actionItems":[{"id":"a-76-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".story-image","selectorGuids":["0c803d17-0ff9-b8de-7873-972ea7df89e0"]},"xValue":0.8,"yValue":0.8,"locked":true}},{"id":"a-76-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64b189fa-cb73-af81-24f3-59973f9af4f7"},"yValue":30,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-76-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".story-image","selectorGuids":["0c803d17-0ff9-b8de-7873-972ea7df89e0"]},"value":0,"unit":""}},{"id":"a-76-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1.2,"yValue":1.2,"locked":true}}]},{"actionItems":[{"id":"a-76-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".story-image","selectorGuids":["0c803d17-0ff9-b8de-7873-972ea7df89e0"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-76-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".story-image","selectorGuids":["0c803d17-0ff9-b8de-7873-972ea7df89e0"]},"value":1,"unit":""}},{"id":"a-76-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1600,"target":{"useEventTarget":true,"id":"64b189fa-cb73-af81-24f3-59973f9af4f7"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-76-n-8","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":1600,"target":{"useEventTarget":"CHILDREN","selector":".story-image","selectorGuids":["0c803d17-0ff9-b8de-7873-972ea7df89e0"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-76-n-9","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":1600,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675888015810},"a-90":{"id":"a-90","title":"Arrow link on hover","actionItemGroups":[{"actionItems":[{"id":"a-90-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":0,"yValue":0,"xUnit":"%","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-90-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":100,"yValue":100,"xUnit":"%","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1673816352122},"a-91":{"id":"a-91","title":"Arrow link out hover","actionItemGroups":[{"actionItems":[{"id":"a-91-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":0,"yValue":0,"xUnit":"%","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1673816352122},"a-93":{"id":"a-93","title":"Service link on hover","actionItemGroups":[{"actionItems":[{"id":"a-93-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-93-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-service-image","selectorGuids":["516e5d18-a264-47fb-9c1e-a14ba29a2a5d"]},"value":0,"unit":""}},{"id":"a-93-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1.4,"yValue":1.4,"locked":true}},{"id":"a-93-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-service-image","selectorGuids":["516e5d18-a264-47fb-9c1e-a14ba29a2a5d"]},"xValue":0.6,"yValue":0.6,"locked":true}},{"id":"a-93-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-93-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-93-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":80,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-93-n-8","actionTypeId":"TRANSFORM_SCALE","config":{"delay":80,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-93-n-9","actionTypeId":"TRANSFORM_SCALE","config":{"delay":80,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".home-service-image","selectorGuids":["516e5d18-a264-47fb-9c1e-a14ba29a2a5d"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-93-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":80,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".home-service-image","selectorGuids":["516e5d18-a264-47fb-9c1e-a14ba29a2a5d"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675967110626},"a-94":{"id":"a-94","title":"Service link out hover","actionItemGroups":[{"actionItems":[{"id":"a-94-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-94-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".home-service-image","selectorGuids":["516e5d18-a264-47fb-9c1e-a14ba29a2a5d"]},"value":0,"unit":""}},{"id":"a-94-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1.4,"yValue":1.4,"locked":true}},{"id":"a-94-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".home-service-image","selectorGuids":["516e5d18-a264-47fb-9c1e-a14ba29a2a5d"]},"xValue":0.6,"yValue":0.6,"locked":true}},{"id":"a-94-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":80,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1675967110626},"a-105":{"id":"a-105","title":"Into view service list","actionItemGroups":[{"actionItems":[{"id":"a-105-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-105-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":0,"unit":""}},{"id":"a-105-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-105-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":0,"unit":""}},{"id":"a-105-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-105-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":0,"unit":""}},{"id":"a-105-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-105-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"value":0,"unit":""}},{"id":"a-105-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-105-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-105-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1100,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-105-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":1,"unit":""}},{"id":"a-105-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":130,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":1,"unit":""}},{"id":"a-105-n-21","actionTypeId":"TRANSFORM_MOVE","config":{"delay":130,"easing":"outExpo","duration":1100,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-105-n-22","actionTypeId":"STYLE_OPACITY","config":{"delay":260,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":1,"unit":""}},{"id":"a-105-n-23","actionTypeId":"TRANSFORM_MOVE","config":{"delay":260,"easing":"outExpo","duration":1100,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-105-n-24","actionTypeId":"STYLE_OPACITY","config":{"delay":390,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"value":1,"unit":""}},{"id":"a-105-n-25","actionTypeId":"TRANSFORM_MOVE","config":{"delay":390,"easing":"outExpo","duration":1100,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-105-n-26","actionTypeId":"STYLE_OPACITY","config":{"delay":520,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"value":1,"unit":""}},{"id":"a-105-n-27","actionTypeId":"TRANSFORM_MOVE","config":{"delay":520,"easing":"outExpo","duration":1100,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1673805673015},"a-84":{"id":"a-84","title":"Section bkg","continuousParameterGroups":[{"id":"a-84-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-84-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".featured-background","selectorGuids":["f152caeb-9ab7-c7e0-afb1-b7358d143433"]},"xValue":0.9,"yValue":0.8,"locked":false}},{"id":"a-84-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1.1,"yValue":1.2,"locked":false}},{"id":"a-84-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"be0089f2-2d76-e959-4e62-48dd5b72a050"},"value":0,"unit":""}}]},{"keyframe":20,"actionItems":[{"id":"a-84-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"be0089f2-2d76-e959-4e62-48dd5b72a050"},"value":1,"unit":""}}]},{"keyframe":35,"actionItems":[{"id":"a-84-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".featured-background","selectorGuids":["f152caeb-9ab7-c7e0-afb1-b7358d143433"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-84-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1,"yValue":1,"locked":true}}]}]}],"createdOn":1676001351788},"a-107":{"id":"a-107","title":"Testimonial slide in view","actionItemGroups":[{"actionItems":[{"id":"a-107-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-107-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-107-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":0,"unit":""}},{"id":"a-107-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-107-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":0,"unit":""}},{"id":"a-107-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-107-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":0,"unit":""}},{"id":"a-107-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-107-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-107-n-16","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-107-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-107-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":1,"unit":""}},{"id":"a-107-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":360,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-107-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":360,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":1,"unit":""}},{"id":"a-107-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":420,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-107-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":420,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1676244907091},"a-108":{"id":"a-108","title":"Testimonial slide out view","actionItemGroups":[{"actionItems":[{"id":"a-108-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":0,"unit":""}},{"id":"a-108-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":-2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-108-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":60,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":-2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-108-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":60,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":0,"unit":""}},{"id":"a-108-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-108-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":120,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":0,"unit":""}},{"id":"a-108-n-16","actionTypeId":"TRANSFORM_MOVE","config":{"delay":120,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":-2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-108-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-108-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-108-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-108-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":0,"unit":""}},{"id":"a-108-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-108-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":0,"unit":""}},{"id":"a-108-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-108-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":0,"unit":""}},{"id":"a-108-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1676244907091},"a-109":{"id":"a-109","title":"Into view skill list","actionItemGroups":[{"actionItems":[{"id":"a-109-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".line-load-1","selectorGuids":["f22685a7-3cfd-793a-83e2-4e9b89877fed"]},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-109-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-109-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":0,"unit":""}},{"id":"a-109-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-109-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-109-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":100,"target":{"useEventTarget":true,"id":"648482ba6bff1a3a6f0c11a0|3f8df311-d7f0-c004-daad-b09a878285e8"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-109-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".line-load-1","selectorGuids":["f22685a7-3cfd-793a-83e2-4e9b89877fed"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-109-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":160,"easing":"outExpo","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-109-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":160,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":1,"unit":""}},{"id":"a-109-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":290,"easing":"outExpo","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-109-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":290,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1676311498398},"a-110":{"id":"a-110","title":"Arrow left on hover","actionItemGroups":[{"actionItems":[{"id":"a-110-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-110-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1676318277469},"a-111":{"id":"a-111","title":"Arrow left out hover","actionItemGroups":[{"actionItems":[{"id":"a-111-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1676318277469},"a-112":{"id":"a-112","title":"Arrow right on hover","actionItemGroups":[{"actionItems":[{"id":"a-112-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-112-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1676318277469},"a-113":{"id":"a-113","title":"Arrow right out hover","actionItemGroups":[{"actionItems":[{"id":"a-113-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["e17cf888-aee9-243d-92b1-81c698b8b4ba"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1676318277469},"a-114":{"id":"a-114","title":"Contact page load","actionItemGroups":[{"actionItems":[{"id":"a-114-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".word-one","selectorGuids":["dcd76060-c830-58d8-3d30-8d07c47be00b"]},"value":0,"unit":""}},{"id":"a-114-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".word-one","selectorGuids":["dcd76060-c830-58d8-3d30-8d07c47be00b"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-114-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".word-two","selectorGuids":["2577b25b-e118-fb4c-14ff-44c6b28b2418"]},"value":0,"unit":""}},{"id":"a-114-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".word-two","selectorGuids":["2577b25b-e118-fb4c-14ff-44c6b28b2418"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-114-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-line-1","selectorGuids":["6377caf7-19be-0bec-68ca-bf17bbb6d378"]},"value":0,"unit":""}},{"id":"a-114-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-line-1","selectorGuids":["6377caf7-19be-0bec-68ca-bf17bbb6d378"]},"xValue":-100,"yValue":null,"xUnit":"%","yUnit":"rem","zUnit":"PX"}},{"id":"a-114-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"value":0,"unit":""}},{"id":"a-114-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-114-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"value":0,"unit":""}},{"id":"a-114-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-114-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-4","selectorGuids":["2d42d1a8-7b7e-fbb5-a561-f9c28dbbb21b"]},"value":0,"unit":""}},{"id":"a-114-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-4","selectorGuids":["2d42d1a8-7b7e-fbb5-a561-f9c28dbbb21b"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-114-n-26","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".word-three","selectorGuids":["6b3f7599-844e-2630-419e-80dcaf1fffd5"]},"value":0,"unit":""}},{"id":"a-114-n-27","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".word-three","selectorGuids":["6b3f7599-844e-2630-419e-80dcaf1fffd5"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-114-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1900,"target":{"selector":".contact-hero","selectorGuids":["f27702d9-cf4d-f452-ffdc-583a677eb87a"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-114-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".word-one","selectorGuids":["dcd76060-c830-58d8-3d30-8d07c47be00b"]},"value":1,"unit":""}},{"id":"a-114-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1200,"target":{"selector":".word-one","selectorGuids":["dcd76060-c830-58d8-3d30-8d07c47be00b"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-114-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":120,"easing":"","duration":300,"target":{"selector":".word-two","selectorGuids":["2577b25b-e118-fb4c-14ff-44c6b28b2418"]},"value":1,"unit":""}},{"id":"a-114-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":120,"easing":"outExpo","duration":1200,"target":{"selector":".word-two","selectorGuids":["2577b25b-e118-fb4c-14ff-44c6b28b2418"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-114-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":280,"easing":"","duration":300,"target":{"selector":".load-line-1","selectorGuids":["6377caf7-19be-0bec-68ca-bf17bbb6d378"]},"value":1,"unit":""}},{"id":"a-114-n-19","actionTypeId":"TRANSFORM_MOVE","config":{"delay":280,"easing":"outExpo","duration":1600,"target":{"selector":".load-line-1","selectorGuids":["6377caf7-19be-0bec-68ca-bf17bbb6d378"]},"xValue":0,"yValue":null,"xUnit":"%","yUnit":"rem","zUnit":"PX"}},{"id":"a-114-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"","duration":300,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"value":1,"unit":""}},{"id":"a-114-n-21","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"outExpo","duration":1200,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-114-n-28","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"","duration":300,"target":{"selector":".word-three","selectorGuids":["6b3f7599-844e-2630-419e-80dcaf1fffd5"]},"value":1,"unit":""}},{"id":"a-114-n-29","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"outExpo","duration":1200,"target":{"selector":".word-three","selectorGuids":["6b3f7599-844e-2630-419e-80dcaf1fffd5"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-114-n-22","actionTypeId":"STYLE_OPACITY","config":{"delay":520,"easing":"","duration":300,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"value":1,"unit":""}},{"id":"a-114-n-23","actionTypeId":"TRANSFORM_MOVE","config":{"delay":520,"easing":"outExpo","duration":1200,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-114-n-24","actionTypeId":"STYLE_OPACITY","config":{"delay":640,"easing":"","duration":300,"target":{"selector":".load-4","selectorGuids":["2d42d1a8-7b7e-fbb5-a561-f9c28dbbb21b"]},"value":1,"unit":""}},{"id":"a-114-n-25","actionTypeId":"TRANSFORM_MOVE","config":{"delay":640,"easing":"outExpo","duration":1200,"target":{"selector":".load-4","selectorGuids":["2d42d1a8-7b7e-fbb5-a561-f9c28dbbb21b"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675799583070}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function HomeProjects({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "home-projects")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "container-large")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "padding-top", "padding-xxlarge")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "margin-bottom", "margin-medium")}
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
                className={_utils.cx(_styles, "home-works-top")}
                id={_utils.cx(
                  _styles,
                  "w-node-c26f9503-d4f7-753c-aed7-325887d699b2-87d699ad"
                )}
                tag="div"
              >
                <_Builtin.Block
                  data-w-id="c26f9503-d4f7-753c-aed7-325887d699b3"
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
                        {"Explore"}
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
                      <_Builtin.Span className={_utils.cx(_styles, "word-two")}>
                        {"Our"}
                      </_Builtin.Span>{" "}
                      <_Builtin.Span
                        className={_utils.cx(_styles, "word-three")}
                      >
                        {"Work"}
                      </_Builtin.Span>
                    </_Builtin.Heading>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "hoe-works-description")}
                  id={_utils.cx(
                    _styles,
                    "w-node-c26f9503-d4f7-753c-aed7-325887d699bf-87d699ad"
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
                        "We started out in 2014 to make interior design more accessible and affordable for everyone."
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
              "padding-small"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "collection-list-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "home-work-grid")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "home-work-item")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "home-work-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
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
                        className={_utils.cx(_styles, "home-work-content")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "tag-grid")}
                          id={_utils.cx(
                            _styles,
                            "w-node-c26f9503-d4f7-753c-aed7-325887d699ca-87d699ad"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "into-view-2")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "tag-item")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "clip")}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "button-text-one"
                                  )}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-tiny",
                                      "text-style-allcaps"
                                    )}
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"22'"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-tiny",
                                      "text-style-allcaps"
                                    )}
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"'"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "button-text-one",
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
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"22'"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-tiny",
                                      "text-style-allcaps"
                                    )}
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"'"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "into-view-3")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "tag-item",
                                "tag-button"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "clip")}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "button-text-two"
                                  )}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-tiny",
                                      "text-style-allcaps"
                                    )}
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"OFFICE"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "button-text-two",
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
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"OFFICE"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "projects-item-title")}
                          id={_utils.cx(
                            _styles,
                            "w-node-c26f9503-d4f7-753c-aed7-325887d699dd-87d699ad"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "into-view-4")}
                            tag="div"
                          >
                            <_Builtin.Heading
                              className={_utils.cx(_styles, "heading-style-h3")}
                              tag="h1"
                            >
                              {"Beacon grand"}
                            </_Builtin.Heading>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "home-work-image")}
                          id={_utils.cx(
                            _styles,
                            "w-node-c26f9503-d4f7-753c-aed7-325887d699e0-87d699ad"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "home-work-hover")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "home-work-height")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "image-overlay")}
                                tag="div"
                              />
                              <_Builtin.Image
                                className={_utils.cx(_styles, "image-fill")}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                src="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c12cc_Home%20mockup%2004.webp"
                              />
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "into-view-5")}
                          id={_utils.cx(
                            _styles,
                            "w-node-c26f9503-d4f7-753c-aed7-325887d699e5-87d699ad"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "clip")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button-icon")}
                              tag="div"
                            >
                              <_Builtin.Image
                                className={_utils.cx(
                                  _styles,
                                  "icon-1x1-medium"
                                )}
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
                                className={_utils.cx(
                                  _styles,
                                  "icon-1x1-medium"
                                )}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                src="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c125c_Right%20arrow%20slant%20-%20dark.svg"
                              />
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "line-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "inside-line")}
                      tag="div"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "home-work-item")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "home-work-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
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
                        className={_utils.cx(_styles, "home-work-content")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "tag-grid")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_89a50d38-9456-7c1c-ae68-cdc1de5814e4-87d699ad"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "into-view-2")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "tag-item")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "clip")}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "button-text-one"
                                  )}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-tiny",
                                      "text-style-allcaps"
                                    )}
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"22'"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-tiny",
                                      "text-style-allcaps"
                                    )}
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"'"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "button-text-one",
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
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"22'"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-tiny",
                                      "text-style-allcaps"
                                    )}
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"'"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "into-view-3")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "tag-item",
                                "tag-button"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "clip")}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "button-text-two"
                                  )}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-tiny",
                                      "text-style-allcaps"
                                    )}
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"OFFICE"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "button-text-two",
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
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"OFFICE"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "projects-item-title")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_89a50d38-9456-7c1c-ae68-cdc1de5814fb-87d699ad"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "into-view-4")}
                            tag="div"
                          >
                            <_Builtin.Heading
                              className={_utils.cx(_styles, "heading-style-h3")}
                              tag="h1"
                            >
                              {"BELMOND CARUSO"}
                            </_Builtin.Heading>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "home-work-image")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_89a50d38-9456-7c1c-ae68-cdc1de5814ff-87d699ad"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "home-work-hover")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "home-work-height")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "image-overlay")}
                                tag="div"
                              />
                              <_Builtin.Image
                                className={_utils.cx(_styles, "image-fill")}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                src="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c12a9_Home%20039.webp"
                              />
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "into-view-5")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_89a50d38-9456-7c1c-ae68-cdc1de581504-87d699ad"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "clip")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button-icon")}
                              tag="div"
                            >
                              <_Builtin.Image
                                className={_utils.cx(
                                  _styles,
                                  "icon-1x1-medium"
                                )}
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
                                className={_utils.cx(
                                  _styles,
                                  "icon-1x1-medium"
                                )}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                src="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c125c_Right%20arrow%20slant%20-%20dark.svg"
                              />
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "line-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "inside-line")}
                      tag="div"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "home-work-item")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "home-work-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
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
                        className={_utils.cx(_styles, "home-work-content")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "tag-grid")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_88afff64-8a97-0900-23e5-bad91360013b-87d699ad"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "into-view-2")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "tag-item")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "clip")}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "button-text-one"
                                  )}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-tiny",
                                      "text-style-allcaps"
                                    )}
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"22'"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-tiny",
                                      "text-style-allcaps"
                                    )}
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"'"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "button-text-one",
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
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"22'"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-tiny",
                                      "text-style-allcaps"
                                    )}
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"'"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "into-view-3")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "tag-item",
                                "tag-button"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "clip")}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "button-text-two"
                                  )}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-tiny",
                                      "text-style-allcaps"
                                    )}
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"OFFICE"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "button-text-two",
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
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"OFFICE"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "projects-item-title")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_88afff64-8a97-0900-23e5-bad913600152-87d699ad"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "into-view-4")}
                            tag="div"
                          >
                            <_Builtin.Heading
                              className={_utils.cx(_styles, "heading-style-h3")}
                              tag="h1"
                            >
                              {"UMAID PALACE"}
                            </_Builtin.Heading>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "home-work-image")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_88afff64-8a97-0900-23e5-bad913600156-87d699ad"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "home-work-hover")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "home-work-height")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "image-overlay")}
                                tag="div"
                              />
                              <_Builtin.Image
                                className={_utils.cx(_styles, "image-fill")}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                src="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c129a_Home%20014.webp"
                              />
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "into-view-5")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_88afff64-8a97-0900-23e5-bad91360015b-87d699ad"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "clip")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button-icon")}
                              tag="div"
                            >
                              <_Builtin.Image
                                className={_utils.cx(
                                  _styles,
                                  "icon-1x1-medium"
                                )}
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
                                className={_utils.cx(
                                  _styles,
                                  "icon-1x1-medium"
                                )}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                src="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c125c_Right%20arrow%20slant%20-%20dark.svg"
                              />
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "line-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "inside-line")}
                      tag="div"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "home-work-item")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "home-work-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
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
                        className={_utils.cx(_styles, "home-work-content")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "tag-grid")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_496de4cc-de07-5d8e-b404-ebecbe490bcf-87d699ad"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "into-view-2")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "tag-item")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "clip")}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "button-text-one"
                                  )}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-tiny",
                                      "text-style-allcaps"
                                    )}
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"22'"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-tiny",
                                      "text-style-allcaps"
                                    )}
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"'"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "button-text-one",
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
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"22'"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-tiny",
                                      "text-style-allcaps"
                                    )}
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"'"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "into-view-3")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "tag-item",
                                "tag-button"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "clip")}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "button-text-two"
                                  )}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-tiny",
                                      "text-style-allcaps"
                                    )}
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"OFFICE"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "button-text-two",
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
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"OFFICE"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "projects-item-title")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_496de4cc-de07-5d8e-b404-ebecbe490be6-87d699ad"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "into-view-4")}
                            tag="div"
                          >
                            <_Builtin.Heading
                              className={_utils.cx(_styles, "heading-style-h3")}
                              tag="h1"
                            >
                              {"MOSCONE CENTER"}
                            </_Builtin.Heading>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "home-work-image")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_496de4cc-de07-5d8e-b404-ebecbe490bea-87d699ad"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "home-work-hover")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "home-work-height")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "image-overlay")}
                                tag="div"
                              />
                              <_Builtin.Image
                                className={_utils.cx(_styles, "image-fill")}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                src="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c129d_Home%20018.webp"
                              />
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "into-view-5")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_496de4cc-de07-5d8e-b404-ebecbe490bef-87d699ad"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "clip")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button-icon")}
                              tag="div"
                            >
                              <_Builtin.Image
                                className={_utils.cx(
                                  _styles,
                                  "icon-1x1-medium"
                                )}
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
                                className={_utils.cx(
                                  _styles,
                                  "icon-1x1-medium"
                                )}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                src="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c125c_Right%20arrow%20slant%20-%20dark.svg"
                              />
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "line-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "inside-line")}
                      tag="div"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "home-work-item")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "home-work-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
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
                        className={_utils.cx(_styles, "home-work-content")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "tag-grid")}
                          id={_utils.cx(
                            _styles,
                            "w-node-bf65024e-4f45-c151-d42d-2c1fc2f54e8b-87d699ad"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "into-view-2")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "tag-item")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "clip")}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "button-text-one"
                                  )}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-tiny",
                                      "text-style-allcaps"
                                    )}
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"22'"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-tiny",
                                      "text-style-allcaps"
                                    )}
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"'"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "button-text-one",
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
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"22'"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-tiny",
                                      "text-style-allcaps"
                                    )}
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"'"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "into-view-3")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "tag-item",
                                "tag-button"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "clip")}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "button-text-two"
                                  )}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-tiny",
                                      "text-style-allcaps"
                                    )}
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"OFFICE"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "button-text-two",
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
                                    dyn={{
                                      bind: {},
                                    }}
                                    tag="div"
                                  >
                                    {"OFFICE"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "projects-item-title")}
                          id={_utils.cx(
                            _styles,
                            "w-node-bf65024e-4f45-c151-d42d-2c1fc2f54ea2-87d699ad"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "into-view-4")}
                            tag="div"
                          >
                            <_Builtin.Heading
                              className={_utils.cx(_styles, "heading-style-h3")}
                              tag="h1"
                            >
                              {"ST. REGIS BAL"}
                            </_Builtin.Heading>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "home-work-image")}
                          id={_utils.cx(
                            _styles,
                            "w-node-bf65024e-4f45-c151-d42d-2c1fc2f54ea6-87d699ad"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "home-work-hover")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "home-work-height")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "image-overlay")}
                                tag="div"
                              />
                              <_Builtin.Image
                                className={_utils.cx(_styles, "image-fill")}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                src="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c12ae_Home%20027.webp"
                              />
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "into-view-5")}
                          id={_utils.cx(
                            _styles,
                            "w-node-bf65024e-4f45-c151-d42d-2c1fc2f54eab-87d699ad"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "clip")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button-icon")}
                              tag="div"
                            >
                              <_Builtin.Image
                                className={_utils.cx(
                                  _styles,
                                  "icon-1x1-medium"
                                )}
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
                                className={_utils.cx(
                                  _styles,
                                  "icon-1x1-medium"
                                )}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                src="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c125c_Right%20arrow%20slant%20-%20dark.svg"
                              />
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "line-wrapper")}
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
      </_Builtin.Block>
    </_Component>
  );
}
