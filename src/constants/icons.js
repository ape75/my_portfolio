import { IconBrandReact, IconBrandPython, IconBrandNodejs } from '@tabler/icons-react';
import { BiLogoFlask } from "react-icons/bi";
import { SiPostgresql, SiPytorch, SiJinja, SiPlotly, SiGooglemaps, SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandDjango } from "react-icons/tb";

const icons = {
  react: <IconBrandReact size={18} />,
  python: <IconBrandPython size={18} />,
  nodejs: <IconBrandNodejs size={18} />,
  postgres: <SiPostgresql size={18} strokeWidth={1} />,
  flask: <BiLogoFlask size={22} />,
  jinja: <SiJinja size={18} />,
  pytorch: <SiPytorch size={18} />,
  javascript: <IoLogoJavascript size={18} />,
  plotly: <SiPlotly size={18} />,
  django: <TbBrandDjango size={18} />,
  googleMaps: <SiGooglemaps size={18} />,
  mongodb: <SiMongodb size={18} />,
};

export default icons;