import React from "react";
import styles from "./iconcomponent.css";
import classNames from "classnames";
import { IconComment, IconShare, IconHidden, IconSave, IconComplain, IconMenu, IconAnon } from "../icons";

const icons = { "IconComment": IconComment, "IconShare": IconShare, "IconHidden":IconHidden, 
"IconSave":IconSave, "IconComplain":IconComplain, "IconMenu":IconMenu, "IconAnon": IconAnon};

export type TSizes = '12' | '14' | '15' | '16' | '20';

export type TNames = "IconComment" | "IconShare" | "IconHidden" | "IconSave" |"IconComplain" | "IconMenu" | "IconAnon";

interface IIconProps {
  name: TNames;
  size?: TSizes;
}

export function IconComponent({ name, size }: IIconProps) {
  const classes = classNames(styles[`iconSize${size}`]);
  const element = icons[name];
  return <span className={classes}>{element}</span>;
}
