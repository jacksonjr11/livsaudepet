import React from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useHistory } from "react-router";
import { config } from "../../config";
import { IHeaderProps } from "./props.types";
import "./styles.scss";

const Header: React.FC<IHeaderProps> = () => {
  const [drawerOpened, setDrawerOpened] = React.useState(false);
  const history = useHistory();

  const handleToggleDrawer = React.useCallback(() => {
    setDrawerOpened((old) => !old);
  }, []);

  const handleOpenCentral = () => {
    window.open(config.CENTRAL_URL);
  };

  const handleMoveToTips = React.useCallback(() => {
    history.push("/tips");
  }, [history]);

  const classes = () => {
    const opened = drawerOpened ? "opened fadein" : "";
    const options = [opened];
    return options.join(" ");
  };

  const items = [
    { name: "Home", route: "/" },
    { name: "Planos", route: "/plans" },
    { name: "Sobre", route: "/about" },
    { name: "Contatos", route: "/contact", id: "Page_footer" },
    { name: "Cobertura", route: "/cover", id: "Page_footer" },
    { name: "Dicas", route: "/tips", action: handleMoveToTips },
    {
      name: "Central do assinante",
      route: "/central",
      action: handleOpenCentral,
    },
  ];

  const handleScrollToPage = React.useCallback((id: string) => {
    const isTips = window.location.pathname === "/tips";
    const move = () => {
      const area = document.getElementById(id);
      setDrawerOpened(false);
      if (area) {
        area.scrollIntoView({ behavior: "smooth" });
      }
    };
    if (isTips) {
      history.push("/");
      setTimeout(() => {
        move();
      }, 100);
    } else {
      move();
    }
  }, [history]);

  return (
    <header id="Landing_Header">
      <button className="menu_bars" onClick={handleToggleDrawer}>
        <HiOutlineMenuAlt1 />
      </button>
      <nav className={classes()}>
        <button className="menu_bars close" onClick={handleToggleDrawer}>
          <IoMdClose />
        </button>
        <ul>
          {items.map((item, index) => (
            <li
              onClick={() =>
                item.action
                  ? item.action()
                  : handleScrollToPage(item.id || item.name)
              }
              key={index}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
