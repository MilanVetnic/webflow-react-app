import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./HomeServices.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-7":{"id":"e-7","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".home-service-grid","originalId":"b399721e-ea5d-569e-8c44-9a8d43254b07","appliesTo":"CLASS"},"targets":[{"selector":".home-service-grid","originalId":"b399721e-ea5d-569e-8c44-9a8d43254b07","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":60,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1673805670556},"e-262":{"id":"e-262","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-263"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".about-image-item","originalId":"e6e4b14c-7a9c-6140-b06c-c17305d1fec7","appliesTo":"CLASS"},"targets":[{"selector":".about-image-item","originalId":"e6e4b14c-7a9c-6140-b06c-c17305d1fec7","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1675634325694},"e-292":{"id":"e-292","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-57","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-293"}},"mediaQueries":["main"],"target":{"id":"09258679-ff30-aef8-e743-2dd7c0e9ffb6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"09258679-ff30-aef8-e743-2dd7c0e9ffb6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675727606606},"e-293":{"id":"e-293","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-58","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-292"}},"mediaQueries":["main"],"target":{"id":"09258679-ff30-aef8-e743-2dd7c0e9ffb6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"09258679-ff30-aef8-e743-2dd7c0e9ffb6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675727606608},"e-299":{"id":"e-299","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-300"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b1c5fcfd-0252-d7d0-8e90-c90df2f6a59e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b1c5fcfd-0252-d7d0-8e90-c90df2f6a59e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675740820652},"e-300":{"id":"e-300","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-49","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-299"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b1c5fcfd-0252-d7d0-8e90-c90df2f6a59e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b1c5fcfd-0252-d7d0-8e90-c90df2f6a59e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675740820655},"e-315":{"id":"e-315","name":"","animationType":"custom","eventTypeId":"PAGE_FINISH","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-65","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-314"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675798693851},"e-361":{"id":"e-361","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-74","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64b189fa-cb73-af81-24f3-59973f9af4e1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64b189fa-cb73-af81-24f3-59973f9af4e1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-74-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1675888741254},"e-363":{"id":"e-363","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-75","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-364"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64b189fa-cb73-af81-24f3-59973f9af4fc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64b189fa-cb73-af81-24f3-59973f9af4fc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1675890090467},"e-365":{"id":"e-365","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-75","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-366"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64b189fa-cb73-af81-24f3-59973f9af4e9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64b189fa-cb73-af81-24f3-59973f9af4e9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":35,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1675890090467},"e-369":{"id":"e-369","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-76","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-370"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64b189fa-cb73-af81-24f3-59973f9af4f7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64b189fa-cb73-af81-24f3-59973f9af4f7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1675890090467},"e-413":{"id":"e-413","name":"","animationType":"custom","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-85","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"6862f11d-9825-6b19-fa77-096aa25676f6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6862f11d-9825-6b19-fa77-096aa25676f6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-85-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":93,"restingState":50},{"continuousParameterGroupId":"a-85-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":93,"restingState":50}],"createdOn":1676064716895},"e-427":{"id":"e-427","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-93","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-428"}},"mediaQueries":["main"],"target":{"selector":".home-service-link","originalId":"6862f11d-9825-6b19-fa77-096aa25676f8","appliesTo":"CLASS"},"targets":[{"id":"6862f11d-9825-6b19-fa77-096aa25676f8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676233904786},"e-428":{"id":"e-428","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-94","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-427"}},"mediaQueries":["main"],"target":{"selector":".home-service-link","originalId":"6862f11d-9825-6b19-fa77-096aa25676f8","appliesTo":"CLASS"},"targets":[{"id":"6862f11d-9825-6b19-fa77-096aa25676f8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676233904786},"e-441":{"id":"e-441","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-105","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-442"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6862f11d-9825-6b19-fa77-096aa25676f6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6862f11d-9825-6b19-fa77-096aa25676f6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":35,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1676234102300},"e-443":{"id":"e-443","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-84","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"be0089f2-2d76-e959-4e62-48dd5b72a050","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"be0089f2-2d76-e959-4e62-48dd5b72a050","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-84-p","smoothing":94,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1676243937690},"e-444":{"id":"e-444","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-84","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cf28d11-aa44-d451-10f4-fab861942aa2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cf28d11-aa44-d451-10f4-fab861942aa2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-84-p","smoothing":94,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1676244568574},"e-445":{"id":"e-445","name":"","animationType":"custom","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-107","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-446"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".testimonial-slide","originalId":"2cf28d11-aa44-d451-10f4-fab861942aa8","appliesTo":"CLASS"},"targets":[{"selector":".testimonial-slide","originalId":"2cf28d11-aa44-d451-10f4-fab861942aa8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676244904105},"e-446":{"id":"e-446","name":"","animationType":"custom","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-108","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-445"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".testimonial-slide","originalId":"2cf28d11-aa44-d451-10f4-fab861942aa8","appliesTo":"CLASS"},"targets":[{"selector":".testimonial-slide","originalId":"2cf28d11-aa44-d451-10f4-fab861942aa8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676244904108},"e-454":{"id":"e-454","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-109","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-455"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".service-tag","originalId":"6495b1cced3cbc7f8e52d3d0|3f8df311-d7f0-c004-daad-b09a878285e8","appliesTo":"CLASS"},"targets":[{"selector":".service-tag","originalId":"6495b1cced3cbc7f8e52d3d0|3f8df311-d7f0-c004-daad-b09a878285e8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1676311491516}},"actionLists":{"a-2":{"id":"a-2","title":"Into view content","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":0,"unit":""}},{"id":"a-2-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":0,"unit":""}},{"id":"a-2-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":0,"unit":""}},{"id":"a-2-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"value":0,"unit":""}},{"id":"a-2-n-19","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"value":0,"unit":""}},{"id":"a-2-n-22","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-23","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}},{"id":"a-2-n-24","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-25","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}},{"id":"a-2-n-26","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-27","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-2-n-21","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":150,"target":{"useEventTarget":true,"id":"6495b1cced3cbc7f8e52d3c4|4cfc427b-ecb5-8046-2f51-353cd0e4bf6e"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-2-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":1,"unit":""}},{"id":"a-2-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":130,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":1,"unit":""}},{"id":"a-2-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":130,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":260,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":1,"unit":""}},{"id":"a-2-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":260,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":390,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"value":1,"unit":""}},{"id":"a-2-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":390,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-17","actionTypeId":"STYLE_OPACITY","config":{"delay":520,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"value":1,"unit":""}},{"id":"a-2-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":520,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-28","actionTypeId":"STYLE_OPACITY","config":{"delay":650,"easing":"","duration":300,"target":{},"value":1,"unit":""}},{"id":"a-2-n-29","actionTypeId":"TRANSFORM_MOVE","config":{"delay":650,"easing":"outExpo","duration":1200,"target":{},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-31","actionTypeId":"TRANSFORM_MOVE","config":{"delay":780,"easing":"outExpo","duration":1200,"target":{},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-30","actionTypeId":"STYLE_OPACITY","config":{"delay":780,"easing":"","duration":300,"target":{},"value":1,"unit":""}},{"id":"a-2-n-33","actionTypeId":"TRANSFORM_MOVE","config":{"delay":910,"easing":"outExpo","duration":1200,"target":{},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-32","actionTypeId":"STYLE_OPACITY","config":{"delay":910,"easing":"","duration":300,"target":{},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1673805673015},"a-51":{"id":"a-51","title":"About image into view","actionItemGroups":[{"actionItems":[{"id":"a-51-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".about-image-holder","selectorGuids":["917243ba-4881-1afd-73cf-544029766503"]},"xValue":0.6,"yValue":0.6,"locked":true}},{"id":"a-51-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".about-image-holder","selectorGuids":["917243ba-4881-1afd-73cf-544029766503"]},"yValue":50,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-51-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".about-image-holder","selectorGuids":["917243ba-4881-1afd-73cf-544029766503"]},"value":0,"unit":""}},{"id":"a-51-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1.4,"yValue":1.4,"locked":true}}]},{"actionItems":[{"id":"a-51-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".about-image-holder","selectorGuids":["917243ba-4881-1afd-73cf-544029766503"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-51-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":2000,"target":{"useEventTarget":"CHILDREN","selector":".about-image-holder","selectorGuids":["917243ba-4881-1afd-73cf-544029766503"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-51-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".about-image-holder","selectorGuids":["917243ba-4881-1afd-73cf-544029766503"]},"value":1,"unit":""}},{"id":"a-51-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675634328017},"a-57":{"id":"a-57","title":"Service on hover","actionItemGroups":[{"actionItems":[{"id":"a-57-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-57-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-column-shade","selectorGuids":["82c9232c-9891-89fb-0ad4-d8c3be8863ac"]},"value":0,"unit":""}},{"id":"a-57-n-11","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-column-shade","selectorGuids":["82c9232c-9891-89fb-0ad4-d8c3be8863ac"]},"xValue":0.9,"yValue":0.95,"locked":false}},{"id":"a-57-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-item-image","selectorGuids":["4d90f3ff-a4af-d698-f3e8-2c788c70fe18"]},"value":0,"unit":""}},{"id":"a-57-n-6","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1.25,"yValue":1.25,"locked":true}},{"id":"a-57-n-5","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-item-image","selectorGuids":["4d90f3ff-a4af-d698-f3e8-2c788c70fe18"]},"xValue":0.75,"yValue":0.75,"locked":true}},{"id":"a-57-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-57-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-57-n-12","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".service-column-shade","selectorGuids":["82c9232c-9891-89fb-0ad4-d8c3be8863ac"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-57-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".service-column-shade","selectorGuids":["82c9232c-9891-89fb-0ad4-d8c3be8863ac"]},"value":1,"unit":""}},{"id":"a-57-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":50,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-57-n-7","actionTypeId":"TRANSFORM_SCALE","config":{"delay":100,"easing":"outExpo","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-57-n-8","actionTypeId":"TRANSFORM_SCALE","config":{"delay":100,"easing":"outExpo","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".service-item-image","selectorGuids":["4d90f3ff-a4af-d698-f3e8-2c788c70fe18"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-57-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".service-item-image","selectorGuids":["4d90f3ff-a4af-d698-f3e8-2c788c70fe18"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675727608971},"a-58":{"id":"a-58","title":"Service out hover","actionItemGroups":[{"actionItems":[{"id":"a-58-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-58-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".service-column-shade","selectorGuids":["82c9232c-9891-89fb-0ad4-d8c3be8863ac"]},"value":0,"unit":""}},{"id":"a-58-n-6","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".service-column-shade","selectorGuids":["82c9232c-9891-89fb-0ad4-d8c3be8863ac"]},"xValue":0.9,"yValue":0.95,"locked":false}},{"id":"a-58-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".service-item-image","selectorGuids":["4d90f3ff-a4af-d698-f3e8-2c788c70fe18"]},"value":0,"unit":""}},{"id":"a-58-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":50,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-58-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":50,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1.25,"yValue":1.25,"locked":true}},{"id":"a-58-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":50,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".service-item-image","selectorGuids":["4d90f3ff-a4af-d698-f3e8-2c788c70fe18"]},"xValue":0.75,"yValue":0.75,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1675727608971},"a-49":{"id":"a-49","title":"Out view content","actionItemGroups":[{"actionItems":[{"id":"a-49-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-49-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":0,"unit":""}},{"id":"a-49-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":60,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":0,"unit":""}},{"id":"a-49-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":60,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-49-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":120,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":0,"unit":""}},{"id":"a-49-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":120,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-49-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":180,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-49-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":180,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"value":0,"unit":""}},{"id":"a-49-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":240,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"value":0,"unit":""}},{"id":"a-49-n-21","actionTypeId":"TRANSFORM_MOVE","config":{"delay":240,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1673805673015},"a-65":{"id":"a-65","title":"Home page load","actionItemGroups":[{"actionItems":[{"id":"a-65-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-word-one","selectorGuids":["94ace7c4-6605-720b-91a3-f0cee2764284"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-65-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"value":0,"unit":""}},{"id":"a-65-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-65-n-17","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-1","selectorGuids":["e7363d9f-0ac4-e7c2-a5ef-014e1b052439"]},"value":0,"unit":""}},{"id":"a-65-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-1","selectorGuids":["e7363d9f-0ac4-e7c2-a5ef-014e1b052439"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-65-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-word-two","selectorGuids":["a8ab4ccf-58be-c637-798d-6b0ee6ff7ff5"]},"value":0,"unit":""}},{"id":"a-65-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-word-one","selectorGuids":["94ace7c4-6605-720b-91a3-f0cee2764284"]},"value":0,"unit":""}},{"id":"a-65-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-word-three","selectorGuids":["24ea85f2-3ded-b6e1-22fd-da03e5452999"]},"value":0,"unit":""}},{"id":"a-65-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-word-three","selectorGuids":["24ea85f2-3ded-b6e1-22fd-da03e5452999"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-65-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-word-two","selectorGuids":["a8ab4ccf-58be-c637-798d-6b0ee6ff7ff5"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-65-n-24","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"value":0,"unit":""}},{"id":"a-65-n-25","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-65-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1800,"target":{"selector":".main-wrapper","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27150"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-65-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1000,"target":{"selector":".hero-word-one","selectorGuids":["94ace7c4-6605-720b-91a3-f0cee2764284"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-65-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".hero-word-one","selectorGuids":["94ace7c4-6605-720b-91a3-f0cee2764284"]},"value":1,"unit":""}},{"id":"a-65-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"outExpo","duration":1000,"target":{"selector":".hero-word-two","selectorGuids":["a8ab4ccf-58be-c637-798d-6b0ee6ff7ff5"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-65-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"","duration":300,"target":{"selector":".hero-word-two","selectorGuids":["a8ab4ccf-58be-c637-798d-6b0ee6ff7ff5"]},"value":1,"unit":""}},{"id":"a-65-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"outExpo","duration":1000,"target":{"selector":".hero-word-three","selectorGuids":["24ea85f2-3ded-b6e1-22fd-da03e5452999"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-65-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"","duration":300,"target":{"selector":".hero-word-three","selectorGuids":["24ea85f2-3ded-b6e1-22fd-da03e5452999"]},"value":1,"unit":""}},{"id":"a-65-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"outExpo","duration":1000,"target":{"selector":".load-1","selectorGuids":["e7363d9f-0ac4-e7c2-a5ef-014e1b052439"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-65-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"","duration":300,"target":{"selector":".load-1","selectorGuids":["e7363d9f-0ac4-e7c2-a5ef-014e1b052439"]},"value":1,"unit":""}},{"id":"a-65-n-20","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"outExpo","duration":1000,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-65-n-21","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"","duration":300,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"value":1,"unit":""}},{"id":"a-65-n-22","actionTypeId":"TRANSFORM_MOVE","config":{"delay":500,"easing":"outExpo","duration":1000,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-65-n-23","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"","duration":300,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675798698900},"a-69":{"id":"a-69","title":"Work page load","actionItemGroups":[{"actionItems":[{"id":"a-69-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-1","selectorGuids":["e7363d9f-0ac4-e7c2-a5ef-014e1b052439"]},"value":0,"unit":""}},{"id":"a-69-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-1","selectorGuids":["e7363d9f-0ac4-e7c2-a5ef-014e1b052439"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-69-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"value":0,"unit":""}},{"id":"a-69-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-69-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"value":0,"unit":""}},{"id":"a-69-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-69-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-4","selectorGuids":["2d42d1a8-7b7e-fbb5-a561-f9c28dbbb21b"]},"value":0,"unit":""}},{"id":"a-69-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-4","selectorGuids":["2d42d1a8-7b7e-fbb5-a561-f9c28dbbb21b"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-69-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}},{"id":"a-69-n-19","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-69-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1900,"target":{},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-69-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".load-1","selectorGuids":["e7363d9f-0ac4-e7c2-a5ef-014e1b052439"]},"value":1,"unit":""}},{"id":"a-69-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1200,"target":{"selector":".load-1","selectorGuids":["e7363d9f-0ac4-e7c2-a5ef-014e1b052439"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-69-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":120,"easing":"","duration":300,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"value":1,"unit":""}},{"id":"a-69-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":120,"easing":"outExpo","duration":1200,"target":{"selector":".load-2","selectorGuids":["fa3cfe82-c0bf-fbc6-1a4f-5d6f50ca92a8"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-69-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":240,"easing":"","duration":300,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"value":1,"unit":""}},{"id":"a-69-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":240,"easing":"outExpo","duration":1200,"target":{"selector":".load-3","selectorGuids":["37b7b52f-4cc1-274b-7f01-9ead617ac027"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-69-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":360,"easing":"","duration":300,"target":{"selector":".load-4","selectorGuids":["2d42d1a8-7b7e-fbb5-a561-f9c28dbbb21b"]},"value":1,"unit":""}},{"id":"a-69-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":360,"easing":"outExpo","duration":1200,"target":{"selector":".load-4","selectorGuids":["2d42d1a8-7b7e-fbb5-a561-f9c28dbbb21b"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-69-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":480,"easing":"","duration":300,"target":{},"value":1,"unit":""}},{"id":"a-69-n-21","actionTypeId":"TRANSFORM_MOVE","config":{"delay":480,"easing":"outExpo","duration":1200,"target":{},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675799583070},"a-74":{"id":"a-74","title":"Paralax background","continuousParameterGroups":[{"id":"a-74-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-74-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1.1,"yValue":1.1,"locked":true}},{"id":"a-74-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".timeline-left-block","selectorGuids":["3e861fac-4744-32b8-d8a8-575e9692d14b"]},"yValue":35,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-74-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"yValue":-10,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-74-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"yValue":10,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-74-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1.08,"yValue":1.08,"locked":true}},{"id":"a-74-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".timeline-left-block","selectorGuids":["3e861fac-4744-32b8-d8a8-575e9692d14b"]},"yValue":-35,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}]}],"createdOn":1675888657619},"a-75":{"id":"a-75","title":"Into view portfolio list","actionItemGroups":[{"actionItems":[{"id":"a-75-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-75-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":0,"unit":""}},{"id":"a-75-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-75-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":0,"unit":""}},{"id":"a-75-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-75-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":0,"unit":""}},{"id":"a-75-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-75-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"value":0,"unit":""}},{"id":"a-75-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-75-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-75-n-17","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":150,"target":{"useEventTarget":true,"id":"6495b1cced3cbc7f8e52d3c8|4cfc427b-ecb5-8046-2f51-353cd0e4bf6e"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-75-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-75-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":1,"unit":""}},{"id":"a-75-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":130,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":1,"unit":""}},{"id":"a-75-n-21","actionTypeId":"TRANSFORM_MOVE","config":{"delay":130,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-75-n-22","actionTypeId":"STYLE_OPACITY","config":{"delay":260,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":1,"unit":""}},{"id":"a-75-n-23","actionTypeId":"TRANSFORM_MOVE","config":{"delay":260,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-75-n-24","actionTypeId":"STYLE_OPACITY","config":{"delay":390,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"value":1,"unit":""}},{"id":"a-75-n-25","actionTypeId":"TRANSFORM_MOVE","config":{"delay":390,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-75-n-26","actionTypeId":"STYLE_OPACITY","config":{"delay":520,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"value":1,"unit":""}},{"id":"a-75-n-27","actionTypeId":"TRANSFORM_MOVE","config":{"delay":520,"easing":"outExpo","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1673805673015},"a-76":{"id":"a-76","title":"Timeline image in view","actionItemGroups":[{"actionItems":[{"id":"a-76-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".story-image","selectorGuids":["0c803d17-0ff9-b8de-7873-972ea7df89e0"]},"xValue":0.8,"yValue":0.8,"locked":true}},{"id":"a-76-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64b189fa-cb73-af81-24f3-59973f9af4f7"},"yValue":30,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-76-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".story-image","selectorGuids":["0c803d17-0ff9-b8de-7873-972ea7df89e0"]},"value":0,"unit":""}},{"id":"a-76-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1.2,"yValue":1.2,"locked":true}}]},{"actionItems":[{"id":"a-76-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".story-image","selectorGuids":["0c803d17-0ff9-b8de-7873-972ea7df89e0"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-76-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".story-image","selectorGuids":["0c803d17-0ff9-b8de-7873-972ea7df89e0"]},"value":1,"unit":""}},{"id":"a-76-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1600,"target":{"useEventTarget":true,"id":"64b189fa-cb73-af81-24f3-59973f9af4f7"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-76-n-8","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":1600,"target":{"useEventTarget":"CHILDREN","selector":".story-image","selectorGuids":["0c803d17-0ff9-b8de-7873-972ea7df89e0"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-76-n-9","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":1600,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675888015810},"a-85":{"id":"a-85","title":"Mouse over service links","continuousParameterGroups":[{"id":"a-85-p","type":"MOUSE_X","parameterLabel":"Mouse X","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-85-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".home-service-hover","selectorGuids":["0b68f6d0-496f-bd04-1d98-43585a11640f"]},"xValue":60,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-85-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".home-service-hover","selectorGuids":["0b68f6d0-496f-bd04-1d98-43585a11640f"]},"zValue":15,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"keyframe":100,"actionItems":[{"id":"a-85-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".home-service-hover","selectorGuids":["0b68f6d0-496f-bd04-1d98-43585a11640f"]},"xValue":-60,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-85-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".home-service-hover","selectorGuids":["0b68f6d0-496f-bd04-1d98-43585a11640f"]},"zValue":-15,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}]},{"id":"a-85-p-2","type":"MOUSE_Y","parameterLabel":"Mouse Y","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-85-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".home-service-hover","selectorGuids":["0b68f6d0-496f-bd04-1d98-43585a11640f"]},"yValue":-30,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-85-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".home-service-hover","selectorGuids":["0b68f6d0-496f-bd04-1d98-43585a11640f"]},"yValue":30,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}]}],"createdOn":1676064719366},"a-93":{"id":"a-93","title":"Service link on hover","actionItemGroups":[{"actionItems":[{"id":"a-93-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-93-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-service-image","selectorGuids":["516e5d18-a264-47fb-9c1e-a14ba29a2a5d"]},"value":0,"unit":""}},{"id":"a-93-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1.4,"yValue":1.4,"locked":true}},{"id":"a-93-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-service-image","selectorGuids":["516e5d18-a264-47fb-9c1e-a14ba29a2a5d"]},"xValue":0.6,"yValue":0.6,"locked":true}},{"id":"a-93-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-93-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-93-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":80,"easing":"outExpo","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-93-n-8","actionTypeId":"TRANSFORM_SCALE","config":{"delay":80,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-93-n-9","actionTypeId":"TRANSFORM_SCALE","config":{"delay":80,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".home-service-image","selectorGuids":["516e5d18-a264-47fb-9c1e-a14ba29a2a5d"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-93-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":80,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".home-service-image","selectorGuids":["516e5d18-a264-47fb-9c1e-a14ba29a2a5d"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675967110626},"a-94":{"id":"a-94","title":"Service link out hover","actionItemGroups":[{"actionItems":[{"id":"a-94-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-94-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".home-service-image","selectorGuids":["516e5d18-a264-47fb-9c1e-a14ba29a2a5d"]},"value":0,"unit":""}},{"id":"a-94-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1.4,"yValue":1.4,"locked":true}},{"id":"a-94-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".home-service-image","selectorGuids":["516e5d18-a264-47fb-9c1e-a14ba29a2a5d"]},"xValue":0.6,"yValue":0.6,"locked":true}},{"id":"a-94-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":80,"easing":"outExpo","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1675967110626},"a-105":{"id":"a-105","title":"Into view service list","actionItemGroups":[{"actionItems":[{"id":"a-105-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-105-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":0,"unit":""}},{"id":"a-105-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-105-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":0,"unit":""}},{"id":"a-105-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-105-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":0,"unit":""}},{"id":"a-105-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-105-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"value":0,"unit":""}},{"id":"a-105-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-105-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-105-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1100,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-105-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":1,"unit":""}},{"id":"a-105-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":130,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":1,"unit":""}},{"id":"a-105-n-21","actionTypeId":"TRANSFORM_MOVE","config":{"delay":130,"easing":"outExpo","duration":1100,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-105-n-22","actionTypeId":"STYLE_OPACITY","config":{"delay":260,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":1,"unit":""}},{"id":"a-105-n-23","actionTypeId":"TRANSFORM_MOVE","config":{"delay":260,"easing":"outExpo","duration":1100,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-105-n-24","actionTypeId":"STYLE_OPACITY","config":{"delay":390,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"value":1,"unit":""}},{"id":"a-105-n-25","actionTypeId":"TRANSFORM_MOVE","config":{"delay":390,"easing":"outExpo","duration":1100,"target":{"useEventTarget":"CHILDREN","selector":".into-view-4","selectorGuids":["81241fa9-6320-3eb5-6a28-d45990b4b84c"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-105-n-26","actionTypeId":"STYLE_OPACITY","config":{"delay":520,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"value":1,"unit":""}},{"id":"a-105-n-27","actionTypeId":"TRANSFORM_MOVE","config":{"delay":520,"easing":"outExpo","duration":1100,"target":{"useEventTarget":"CHILDREN","selector":".into-view-5","selectorGuids":["4a629a2e-09f7-0684-820e-ebfe8bf3a332"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1673805673015},"a-84":{"id":"a-84","title":"Section bkg","continuousParameterGroups":[{"id":"a-84-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-84-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".featured-background","selectorGuids":["f152caeb-9ab7-c7e0-afb1-b7358d143433"]},"xValue":0.9,"yValue":0.8,"locked":false}},{"id":"a-84-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1.1,"yValue":1.2,"locked":false}},{"id":"a-84-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"be0089f2-2d76-e959-4e62-48dd5b72a050"},"value":0,"unit":""}}]},{"keyframe":20,"actionItems":[{"id":"a-84-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"be0089f2-2d76-e959-4e62-48dd5b72a050"},"value":1,"unit":""}}]},{"keyframe":35,"actionItems":[{"id":"a-84-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".featured-background","selectorGuids":["f152caeb-9ab7-c7e0-afb1-b7358d143433"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-84-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-fill","selectorGuids":["b93a5a66-4884-6510-d1b3-524d8e70b1cf"]},"xValue":1,"yValue":1,"locked":true}}]}]}],"createdOn":1676001351788},"a-107":{"id":"a-107","title":"Testimonial slide in view","actionItemGroups":[{"actionItems":[{"id":"a-107-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-107-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-107-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":0,"unit":""}},{"id":"a-107-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-107-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":0,"unit":""}},{"id":"a-107-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-107-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":0,"unit":""}},{"id":"a-107-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-107-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-107-n-16","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-107-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-107-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":1,"unit":""}},{"id":"a-107-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":360,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-107-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":360,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":1,"unit":""}},{"id":"a-107-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":420,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-107-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":420,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1676244907091},"a-108":{"id":"a-108","title":"Testimonial slide out view","actionItemGroups":[{"actionItems":[{"id":"a-108-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":0,"unit":""}},{"id":"a-108-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":-2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-108-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":60,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":-2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-108-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":60,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":0,"unit":""}},{"id":"a-108-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-108-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":120,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":0,"unit":""}},{"id":"a-108-n-16","actionTypeId":"TRANSFORM_MOVE","config":{"delay":120,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":-2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-108-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"outExpo","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-108-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-108-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-one","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","9010168a-f3fd-8790-06b5-42e74e770a82"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-108-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".into-view-1","selectorGuids":["90ec96d3-2ae3-c397-b0ea-69fb61acd945"]},"value":0,"unit":""}},{"id":"a-108-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-108-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":0,"unit":""}},{"id":"a-108-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-108-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":0,"unit":""}},{"id":"a-108-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".service-number.number-two","selectorGuids":["586737d7-721f-bdcd-b4c2-1c4632b29324","4bba82a1-161c-3e1a-0bdf-dfc0f4e802dd"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1676244907091},"a-109":{"id":"a-109","title":"Into view skill list","actionItemGroups":[{"actionItems":[{"id":"a-109-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".line-load-1","selectorGuids":["f22685a7-3cfd-793a-83e2-4e9b89877fed"]},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-109-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-109-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":0,"unit":""}},{"id":"a-109-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-109-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-109-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":100,"target":{"useEventTarget":true,"id":"6495b1cced3cbc7f8e52d3d0|3f8df311-d7f0-c004-daad-b09a878285e8"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-109-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".line-load-1","selectorGuids":["f22685a7-3cfd-793a-83e2-4e9b89877fed"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-109-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":160,"easing":"outExpo","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-109-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":160,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-2","selectorGuids":["df97e0ad-7b3c-b41c-f020-3d27bfa5a38d"]},"value":1,"unit":""}},{"id":"a-109-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":290,"easing":"outExpo","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-109-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":290,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".into-view-3","selectorGuids":["c2023d43-0f73-4acf-e772-835a63014a77"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1676311498398}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function HomeServices({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "home-services")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "padding-top")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "padding-horizontal", "padding-small")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "home-service-base")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "home-service-intro")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "margin-bottom",
                  "margin-xxsmall"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "load-1")}
                  tag="div"
                >
                  <_Builtin.Paragraph
                    className={_utils.cx(_styles, "text-size-large")}
                  >
                    {"Our design specialties"}
                  </_Builtin.Paragraph>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom", "margin-xsmall")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "load-1")}
                  tag="div"
                >
                  <_Builtin.Paragraph
                    className={_utils.cx(
                      _styles,
                      "text-size-regular",
                      "text-color-grey",
                      "text-align-center"
                    )}
                  >
                    {"We design spaces that are both beautiful and functional."}
                  </_Builtin.Paragraph>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "service-link-grid")}
              data-w-id="6862f11d-9825-6b19-fa77-096aa25676f6"
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "service-link-block")}
                id={_utils.cx(
                  _styles,
                  "w-node-_6862f11d-9825-6b19-fa77-096aa25676f7-a25676e9"
                )}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "home-service-link")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6862f11d-9825-6b19-fa77-096aa25676f8-a25676e9"
                  )}
                  data-w-id="6862f11d-9825-6b19-fa77-096aa25676f8"
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "home-service-text")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "home-service-left")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "clip")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "into-view-1")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "clip")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "service-numbers")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "service-number",
                                  "number-one"
                                )}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(_styles, "number-text")}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-small",
                                      "text-color-grey"
                                    )}
                                    id={_utils.cx(
                                      _styles,
                                      "w-node-_6862f11d-9825-6b19-fa77-096aa2567701-a25676e9"
                                    )}
                                    tag="div"
                                  >
                                    {"0"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "number-text",
                                    "number-bottom"
                                  )}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-small",
                                      "text-color-grey"
                                    )}
                                    tag="div"
                                  >
                                    {"0"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "service-number",
                                  "number-two"
                                )}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(_styles, "number-text")}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-small",
                                      "text-color-grey"
                                    )}
                                    tag="div"
                                  >
                                    {"1"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "number-text",
                                    "number-bottom"
                                  )}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-small",
                                      "text-color-grey"
                                    )}
                                    tag="div"
                                  >
                                    {"1"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "clip")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "into-view-1")}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(
                            _styles,
                            "heading-style-h2",
                            "text-style-allcaps"
                          )}
                          tag="h2"
                        >
                          {"Residential"}
                        </_Builtin.Heading>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "home-service-hover")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "home-service-image")}
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
                      <_Builtin.Block
                        className={_utils.cx(_styles, "home-service-height")}
                        tag="div"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "service-link-block")}
                id={_utils.cx(
                  _styles,
                  "w-node-_6862f11d-9825-6b19-fa77-096aa2567716-a25676e9"
                )}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "home-service-link")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6862f11d-9825-6b19-fa77-096aa2567717-a25676e9"
                  )}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "home-service-text")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "home-service-left")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "clip")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "into-view-2")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "clip")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "service-numbers")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "service-number",
                                  "number-one"
                                )}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(_styles, "number-text")}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-small",
                                      "text-color-grey"
                                    )}
                                    id={_utils.cx(
                                      _styles,
                                      "w-node-_6862f11d-9825-6b19-fa77-096aa2567720-a25676e9"
                                    )}
                                    tag="div"
                                  >
                                    {"0"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "number-text",
                                    "number-bottom"
                                  )}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-small",
                                      "text-color-grey"
                                    )}
                                    tag="div"
                                  >
                                    {"0"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "service-number",
                                  "number-two"
                                )}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(_styles, "number-text")}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-small",
                                      "text-color-grey"
                                    )}
                                    tag="div"
                                  >
                                    {"2"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "number-text",
                                    "number-bottom"
                                  )}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-small",
                                      "text-color-grey"
                                    )}
                                    tag="div"
                                  >
                                    {"2"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "clip")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "into-view-2")}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(
                            _styles,
                            "heading-style-h2",
                            "text-style-allcaps"
                          )}
                          tag="h2"
                        >
                          {"Hospitality"}
                        </_Builtin.Heading>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "home-service-hover")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "home-service-image")}
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
                        src="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c12cd_Home%20mockup%2006.webp"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "home-service-height")}
                        tag="div"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "service-link-block")}
                id={_utils.cx(
                  _styles,
                  "w-node-_6862f11d-9825-6b19-fa77-096aa2567735-a25676e9"
                )}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "home-service-link")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6862f11d-9825-6b19-fa77-096aa2567736-a25676e9"
                  )}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "home-service-text")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "home-service-left")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "clip")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "into-view-3")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "clip")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "service-numbers")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "service-number",
                                  "number-one"
                                )}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(_styles, "number-text")}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-small",
                                      "text-color-grey"
                                    )}
                                    id={_utils.cx(
                                      _styles,
                                      "w-node-_6862f11d-9825-6b19-fa77-096aa256773f-a25676e9"
                                    )}
                                    tag="div"
                                  >
                                    {"0"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "number-text",
                                    "number-bottom"
                                  )}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-small",
                                      "text-color-grey"
                                    )}
                                    tag="div"
                                  >
                                    {"0"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "service-number",
                                  "number-two"
                                )}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(_styles, "number-text")}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-small",
                                      "text-color-grey"
                                    )}
                                    tag="div"
                                  >
                                    {"3"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "number-text",
                                    "number-bottom"
                                  )}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-small",
                                      "text-color-grey"
                                    )}
                                    tag="div"
                                  >
                                    {"3"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "clip")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "into-view-3")}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(
                            _styles,
                            "heading-style-h2",
                            "text-style-allcaps"
                          )}
                          tag="h2"
                        >
                          {"Corporate"}
                        </_Builtin.Heading>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "home-service-hover")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "home-service-image")}
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
                        src="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c12b5_Home%20056.webp"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "home-service-height")}
                        tag="div"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "service-link-block")}
                id={_utils.cx(
                  _styles,
                  "w-node-_6862f11d-9825-6b19-fa77-096aa2567754-a25676e9"
                )}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "home-service-link")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6862f11d-9825-6b19-fa77-096aa2567755-a25676e9"
                  )}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "home-service-text")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "home-service-left")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "clip")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "into-view-4")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "clip")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "service-numbers")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "service-number",
                                  "number-one"
                                )}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(_styles, "number-text")}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-small",
                                      "text-color-grey"
                                    )}
                                    id={_utils.cx(
                                      _styles,
                                      "w-node-_6862f11d-9825-6b19-fa77-096aa256775e-a25676e9"
                                    )}
                                    tag="div"
                                  >
                                    {"0"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "number-text",
                                    "number-bottom"
                                  )}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-small",
                                      "text-color-grey"
                                    )}
                                    tag="div"
                                  >
                                    {"0"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "service-number",
                                  "number-two"
                                )}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(_styles, "number-text")}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-small",
                                      "text-color-grey"
                                    )}
                                    tag="div"
                                  >
                                    {"4"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "number-text",
                                    "number-bottom"
                                  )}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-size-small",
                                      "text-color-grey"
                                    )}
                                    tag="div"
                                  >
                                    {"4"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "clip")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "into-view-4")}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(
                            _styles,
                            "heading-style-h2",
                            "text-style-allcaps"
                          )}
                          tag="h2"
                        >
                          {"Exhibition"}
                        </_Builtin.Heading>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "home-service-hover")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "home-service-image")}
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
                        src="https://uploads-ssl.webflow.com/648482ba6bff1a3a6f0c115b/648482ba6bff1a3a6f0c12a2_Home%20016.webp"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "home-service-height")}
                        tag="div"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
