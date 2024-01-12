import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../../utils/menu.json";
import Sidebar from "./Sidebar";
import Shadow from "./Shadow";
import { Box } from "@mui/material";

const MenuItem = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      id: 1,
      title: "БЭЛЭГ ДУРСГАЛ",
    },
    {
      id: 2,
      title: "ГОО САЙХАН",
    },
    {
      id: 3,
      title: "НООЛУУРАН БҮТЭЭГДЭХҮҮН",
    },
    {
      id: 4,
      title: "ХҮНС",
    },
    {
      id: 5,
      title: "ЭРҮҮЛ МЭНД",
    },
  ];
  return (
    <Box borderTop={1} borderColor={"#c5c6d0"}>
      <Box marginX={"80px"} marginTop={"12px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"start"}
          fontSize={"12px"}
        >
          <Box display={"flex"} alignItems={"start"} gap={"40px"}>
            <Box
              onClick={() => setOpen(true)}
              display={"flex"}
              flexDirection={"column"}
              gap={2}
              alignItems={"center"}
              padding={"8px"}
              width={"max-content"}
              className=" bg-gray-200"
            >
              <img
                src="https://madeinmongolia.asia/assets/frontend/images/icons/category2_icon.gif"
                alt=""
                width={25}
                height={25}
              />
              <span className="text-[11px]">Ангилал</span>
            </Box>

            {links.map((link, index) => (
              <Link
               to=""
                key={index}
                className="hover:border-b-[2px] border-b-mainColor text-[11px] text-[#2c2c2c]"
                
              >
                {link.title}
              </Link>
            ))}
          </Box>

          <Box
            fontSize={"11px"}
            display={"flex"}
            alignItems={"center"}
            gap={"20px"}
          >
            <Link to="" className="hover:border-b-[2px] border-b-mainColor">
              ШИНЭ
            </Link>
            <Link to="" className="hover:border-b-[2px] border-b-mainColor">
              ҮЙЛДВЭРЛЭ
            </Link>
          </Box>
        </Box>

        <Sidebar open={open} setOpen={setOpen} />
        <Shadow open={open} />
      </Box>
    </Box>
  );
};

export default MenuItem;
