import * as React from "react";
import { useIXEvent } from "../interactions";
import { cj, useClickOut, KEY_CODES } from "../utils";
import { Link } from "./Basic";
import { NavbarContext } from "./Navbar";
function getLinksList(root) {
  return root.querySelectorAll(".w-dropdown-list .w-dropdown-link");
}
const DropdownContext = React.createContext({
  root: undefined,
  isOpen: false,
  toggleOpen: () => {},
  setFocusedLink: () => {},
});
export function DropdownWrapper(props) {
  const root = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [focusedLink, setFocusedLink] = React.useState(-1);
  const toggleOpen = () => {
    setFocusedLink(-1);
    setIsOpen((isOpen) => !isOpen);
  };
  const closeDropdown = React.useCallback(() => setIsOpen(false), [setIsOpen]);
  useClickOut(root, closeDropdown);
  useIXEvent(root.current, isOpen);
  React.useEffect(() => {
    if (root.current) {
      const links = getLinksList(root.current);
      links[focusedLink ?? 0]?.focus();
    }
  }, [focusedLink]);
  return (
    <DropdownContext.Provider
      value={{
        root,
        isOpen,
        toggleOpen,
        setFocusedLink,
      }}
    >
      <Dropdown {...props} />
    </DropdownContext.Provider>
  );
}
function Dropdown({ tag = "div", className = "", ...props }) {
  const { root, setFocusedLink } = React.useContext(DropdownContext);
  const { isOpen: isNavbarOpen } = React.useContext(NavbarContext);
  const handleFocus = (e) => {
    const linkList = root.current ? Array.from(getLinksList(root.current)) : [];
    const linkAmount = linkList.length;
    switch (e.key) {
      case KEY_CODES.ARROW_LEFT:
      case KEY_CODES.ARROW_UP: {
        e.preventDefault();
        setFocusedLink((prev) => Math.max(prev - 1, 0));
        break;
      }
      case KEY_CODES.ARROW_RIGHT:
      case KEY_CODES.ARROW_DOWN: {
        e.preventDefault();
        setFocusedLink((prev) => Math.min(prev + 1, linkAmount - 1));
        break;
      }
      case KEY_CODES.HOME: {
        e.preventDefault();
        setFocusedLink(0);
        break;
      }
      case KEY_CODES.END: {
        e.preventDefault();
        setFocusedLink(linkAmount - 1);
        break;
      }
      case KEY_CODES.TAB: {
        setTimeout(() => {
          setFocusedLink(
            linkList.findIndex((link) => link === document.activeElement)
          );
        }, 0);
        break;
      }
      case KEY_CODES.SPACE: {
        e.preventDefault();
        break;
      }
      default: {
        return;
      }
    }
  };
  return React.createElement(tag, {
    ...props,
    ref: root,
    onKeyDown: handleFocus,
    className: cj(
      className,
      "w-dropdown",
      isNavbarOpen && "w--nav-dropdown-open"
    ),
  });
}
export function DropdownToggle({ tag = "div", className = "", ...props }) {
  const { isOpen, toggleOpen } = React.useContext(DropdownContext);
  const { isOpen: isNavbarOpen } = React.useContext(NavbarContext);
  return React.createElement(tag, {
    ...props,
    "aria-haspopup": "menu",
    "aria-expanded": isOpen,
    className: cj(
      className,
      "w-dropdown-toggle",
      isNavbarOpen && "w--nav-dropdown-toggle-open"
    ),
    onClick: toggleOpen,
    onKeyDown: (e) => {
      if (e.key === KEY_CODES.ENTER || e.key === KEY_CODES.SPACE) {
        toggleOpen();
        e.stopPropagation();
        return e.preventDefault();
      }
    },
    role: "button",
    tabIndex: 0,
  });
}
export function DropdownList({ tag = "nav", className = "", ...props }) {
  const { isOpen } = React.useContext(DropdownContext);
  const { isOpen: isNavbarOpen } = React.useContext(NavbarContext);
  return React.createElement(tag, {
    ...props,
    className: cj(
      className,
      "w-dropdown-list",
      isOpen && "w--open",
      isNavbarOpen && "w--nav-dropdown-list-open"
    ),
  });
}
export function DropdownLink({ className = "", ...props }) {
  const { isOpen: isNavbarOpen } = React.useContext(NavbarContext);
  return React.createElement(Link, {
    ...props,
    className: cj(
      className,
      "w-dropdown-link",
      isNavbarOpen && "w--nav-link-open"
    ),
    tabIndex: 0,
  });
}
