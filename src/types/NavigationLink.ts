import React from "react";

/**
 * Interface that defines a NavLink
 * @remark The path property is marked with ts-ignored because the type is not explicitly exported from the library for unknown reasons
 */
export interface NavigationLink {
  /** The label to show */
  label?: string;
  /** The icon to show */
  icon?: React.ReactNode;
  /** The path to redirect to */
  // @ts-ignore
  path?: LocationDescriptor | ((location: Location) => LocationDescriptor);
}
