"use client";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useState } from "react";
import Link from "next/link";

export default function Drawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250, height: "100dvh" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      className="bg-black text-white"
    >
      <ul className="list-none mt-[4rem]">
        <li className="flex flex-col mx-5 opacity-100">
          <Link href="#AboutMe" className="no-underline text-white">
            <span className="text-purple-400">01.</span> About
          </Link>
        </li>
        <li className="mx-5">
          <Link href="#Experience" className="no-underline text-white">
            <span className="text-purple-400">02.</span> Experience
          </Link>
        </li>
        <li className="mx-5">
          <span className="text-purple-400">03.</span> Work
        </li>
        <li className="mx-5">
          <span className="text-purple-400">04.</span> Contact
        </li>
      </ul>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <MuiDrawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </MuiDrawer>
    </div>
  );
}
