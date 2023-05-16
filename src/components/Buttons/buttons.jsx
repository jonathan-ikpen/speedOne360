import "../../index.css";
import { Link } from "react-router-dom";

const HomeBtn = ({ url, name, new_class }) => {
  const default_class =
    "max-w-[280px] w-[100%] whitespace-nowrap border-solid border-[1px] text-[18px] text-white font-medium font-rubik tracking-[.02em] leading-7 rounded-[8px] py-[16px] px-[31px] ";

  return (
    <button
      className={default_class + new_class}
      onClick={() => {
        location.href = url;
      }}
    >
      {name}
    </button>
  );
};

const LoginBtn = ({ name, url, title, color = "" }) => {
  const loginBtnStyle = {
    color: color,
  };
  return (
    <a
      href={url}
      className="text-[18px] font-medium whitespace-nowrap hover:text-black-7 bg-[#2e2e2e] rounded-[8px] p-[4px] w-[70px] flex items-center justify-center"
      title={title}
      style={loginBtnStyle}
    >
      {name}
    </a>
  );
};

const LinkedBtn = ({ url, name, new_class }) => {
  const default_class =
    "max-w-[280px] w-[100%] whitespace-nowrap border-solid border-[1px] text-[18px] text-white font-medium font-rubik tracking-[.02em] leading-7 rounded-[8px] py-[16px] px-[31px] ";

  return (
    <Link className={default_class + new_class} to={url}>
      {name}
    </Link>
  );
};

export { HomeBtn, LoginBtn, LinkedBtn };
