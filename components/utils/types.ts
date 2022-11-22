import { IconType } from "react-icons";

export interface ProjectType {
  Icon: IconType;
  title: string;
  desc: string;
  website: string;
  code: string | null;
  image: string;
  showWeb: boolean;
}