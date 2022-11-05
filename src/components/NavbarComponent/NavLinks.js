import { faAddressBook, faBriefcase, faCircleInfo, faHomeUser } from "@fortawesome/free-solid-svg-icons";

export const menuLinks = [
    {
        title: "Home",
        url: "/",
        icon: faHomeUser,
        cName: "nav-link"
    },

    {
        title: "About",
        url: "/about",
        icon: faCircleInfo,
        cName: "nav-link"
    },

    {
        title: "Service",
        url: "/service",
        icon: faBriefcase,
        cName: "nav-link"
    },

    {
        title: "Contact",
        url: "/contact",
        icon: faAddressBook,
        cName: "nav-link"
    },

    // {
    //     title: "SignUp",
    //     url: "/signup",
    //     icon: null,
    //     cName: "nav-link-mobile"
    // },
];