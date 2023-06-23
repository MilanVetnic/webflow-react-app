import * as React from "react";
import * as Types from "./types";

declare function TeamCard(props: {
  as?: React.ElementType;
  teamPosition?: React.ReactNode;
  portrait?: Types.Asset.Image;
}): React.JSX.Element;
