import * as React from "react";
import * as Types from "./types";

declare function ServiceColumn(props: {
  as?: React.ElementType;
  hoverImage?: Types.Asset.Image;
  numberFirst?: React.ReactNode;
  numberSecond?: React.ReactNode;
  serviceName?: React.ReactNode;
}): React.JSX.Element;
