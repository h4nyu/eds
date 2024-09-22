import React from "react";
import Link, { LinkProps } from "next/link";
import useSWR, { useSWRConfig } from "swr";

export const Header = (props: {}) => {
  const [isActive, setIsActive] = React.useState(false);
  const toggle = () => {
    setIsActive(!isActive);
  };
  return (
    <nav className="navbar is-dark" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item">App</a>
        <div
          className="navbar-burger burger"
          data-target="navMenubd-example"
          onClick={() => toggle()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={isActive ? "navbar-menu is-active" : "navbar-menu"}
        id="navMenubd-example"
      >
        <div className="navbar-start">
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
        </div>
      </div>
    </nav>
  );
};
export default Header;
