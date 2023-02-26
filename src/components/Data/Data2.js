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

// Analytics Cards Data
export const cardsData = [
    {
      title: "Latest Invoice:",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #c484f3",
      },
      value: "Yatin",
      png: UilMoneyWithdrawal,
    },
    {
      title: "Amount Owed:",
      color: {
        backGround: "linear-gradient(180deg, #f6b8fc 0%, #eca7f2 100%)",
        boxShadow: "0px 10px 20px 0px #f6b8fc",
      },
      value: "$9.35",
      png: UilUsdSquare,
    },
    {
      title: "Pending Bills:",
      color: {
        backGround: "linear-gradient(180deg, #a7bdf2 0%, #9bb5f2 100%)",
        boxShadow: "0px 10px 20px 0px #9bb5f2",
      },
      value: "1",
      png: UilClipboardAlt,
    },
  ];