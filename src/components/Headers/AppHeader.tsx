import React, { FC, ReactNode, ReactElement } from "react";
import { NavLink } from "react-router-dom";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyle from "./AppHeader.module.css";

const Appheader: FC = () => {
  const Header: FC<{ children: ReactNode }> = (props) => {
    return (
      <header className={`${headerStyle.header}`}>{props.children}</header>
    );
  };
  const Menu: FC<{ children: ReactNode }> = (props) => {
    return <nav className={`${headerStyle.navbar}`}>{props.children}</nav>;
  };
  const MenuList: FC<{ children: ReactNode }> = (props) => {
    return (
      <ul className={`${headerStyle.menu}`}>
        <li className={headerStyle.menuList}>{props.children}</li>
      </ul>
    );
  };
  const MenuItem: FC<{
    itemStyle: string;
    exact?: boolean;
    link: string;
    icon: ReactNode;
    text?: string;
    styleText?: string;
  }> = (props) => {
    return (
      <div className={props.itemStyle}>
        <NavLink
          exact={props.exact}
          activeClassName={headerStyle.linkActive}
          to={props.link}
          className={`${headerStyle.link} text_color_inactive`}
        >
          {props.icon}
          <p className={props.styleText}>{props.text}</p>
        </NavLink>
      </div>
    );
  };
  return (
    <Header>
      <Menu>
        <MenuList>
          <MenuItem
            text="Конструктор"
            exact
            link={"/"}
            icon={<BurgerIcon type="secondary" />}
            itemStyle={`${headerStyle.menuItems} mt-4 mb-4 pl-1 pt-4 pb-4 pr-5 mr-2`}
            styleText={`text text_type_main-default pl-2`}
          />
          <MenuItem
            text="Лента заказов"
            link={"/feed"}
            icon={<ListIcon type="secondary" />}
            itemStyle={`${headerStyle.menuItems} mt-4 mb-4 pl-5 pt-4 pb-4 pr-3`}
            styleText={`text text_type_main-default pl-2`}
          />
        </MenuList>
        <MenuItem
          link={"/"}
          icon={<Logo />}
          itemStyle={`${headerStyle.logo}`}
        />
        <MenuItem
          text="Личный кабинет"
          link={"/profile"}
          icon={<ProfileIcon type="secondary" />}
          itemStyle={`${headerStyle.menuItems} mt-4 mb-4 pl-5 pt-4 pb-4`}
          styleText={`text text_type_main-default pl-2`}
        />
      </Menu>
    </Header>
  );
};

export default Appheader;
