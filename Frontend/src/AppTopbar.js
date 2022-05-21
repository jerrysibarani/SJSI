import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

export const AppTopbar = (props) => {
    return (
        <div className="layout-topbar">
            <Link to="/" className="layout-topbar-logo">
                <img src={props.layoutColorMode === "light" ? "assets/layout/images/logo.png" : "assets/layout/images/logo.png"} alt="logo" />
                <span>FrederickDumaLawOffice</span>
            </Link>
            <button type="button" className="p-link  layout-menu-button layout-topbar-button" onClick={props.onToggleMenuClick}>
                <i className="pi pi-bars" />
            </button>
            <button type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={props.onMobileTopbarMenuClick}>
                <i className="pi pi-ellipsis-v" />
            </button>

            {/* <MatxMenu
                        menuButton={
                            <UserMenu>
                                <Hidden xsDown>
                                    <Span>
                                        Hi <strong>{user.name}</strong>
                                    </Span>
                                </Hidden>
                                <Avatar
                                    src={user.avatar}
                                    sx={{ cursor: 'pointer' }}
                                />
                            </UserMenu>
                        }
                    >
                        <StyledItem>
                            <Link to="/">
                                <Icon> home </Icon>
                                <Span> Home </Span>
                            </Link>
                        </StyledItem>
                        <StyledItem>
                            <Link to="/page-layouts/user-profile">
                                <Icon> person </Icon>
                                <Span> Profile </Span>
                            </Link>
                        </StyledItem>
                        <StyledItem>
                            <Icon> settings </Icon>
                            <Span> Settings </Span>
                        </StyledItem>
                        <StyledItem onClick={logout}>
                            <Icon> power_settings_new </Icon>
                            <Span> Logout </Span>
                        </StyledItem>
                    </MatxMenu> */}

            <ul className={classNames("layout-topbar-menu lg:flex origin-top", { "layout-topbar-menu-mobile-active": props.mobileTopbarMenuActive })}>
                <li>
                    <button className="p-link layout-topbar-button" onClick={props.onMobileSubTopbarMenuClick}>
                        <i className="pi pi-user" />
                        <span>Profile</span>
                    </button>
                </li>
            </ul>

        </div>
    );
};
