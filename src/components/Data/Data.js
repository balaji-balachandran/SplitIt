// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
  } from "@iconscout/react-unicons";
  
  // Analytics Cards imports
  import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
  
  // Sidebar Data
  export const SidebarData = [
    {
      icon: UilEstate,
      heading: "Scan",
      link: "/process",
    },
    {
      icon: UilUsersAlt,
      heading: "Contacts",
      link: "/contacts",
    },
    {
        icon: UilClipboardAlt,
        heading: "Pay Bills",
        link: "/pay",
    },
  ];
  
  // Analytics Cards Data
  export const cardsData = [
    {
      title: "Vendor:",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #c484f3",
      },
      value: "Fish & Chips Restaurant",
      png: UilMoneyWithdrawal,
    },
    {
      title: "Total Price:",
      color: {
        backGround: "linear-gradient(180deg, #f6b8fc 0%, #eca7f2 100%)",
        boxShadow: "0px 10px 20px 0px #f6b8fc",
      },
      value: "$31.12",
      png: UilUsdSquare,
    },
    {
      title: "Pending:",
      color: {
        backGround: "linear-gradient(180deg, #a7bdf2 0%, #9bb5f2 100%)",
        boxShadow: "0px 10px 20px 0px #9bb5f2",
      },
      value: "$21.77",
    //   png: UilClipboardAlt,
      png: UilUsdSquare,
    },
  ];