"use client";
import x from "./fonts";
import { GitHub, LinkedIn } from "@mui/icons-material";
import AboutMe from "./components/AboutMe";
import Container from "./components/Container";
import Experience from "./components/Experience";
import Header from "./components/Header";
import HeadingWithBorder from "./components/HeadingWithBorder";
import Hero from "./components/Hero";
import XIcon from "@mui/icons-material/X";
import Link from "next/link";
import { useState } from "react";
import { Alert, Snackbar } from "@mui/material";

export default function Home() {
  const [open, setOpen] = useState(false);

  const [currentFont, setCurrentFont] = useState(x.chilanka);
  const email = "sheikhusamabilal@gmail.com";

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const copyEmail = (e: any) => {
    navigator.clipboard.writeText(email);
    setOpen(true);
  };

  return (
    <div className={`${currentFont} bg-inherit`}>
      <Header />
      <Container>
        <Hero />
        <AboutMe />
        <div id="Experience" className="bg-inherit">
          <HeadingWithBorder heading="02. My Work Experience">
            <Experience />
          </HeadingWithBorder>
        </div>
      </Container>
      <div className="md:flex flex-col fixed bottom-5 left-5 hidden">
        <Link
          href="https://www.linkedin.com/in/ossama19/"
          target="_blank"
          className="text-white"
        >
          <LinkedIn className="mb-4" />
        </Link>
        {/* <XIcon className="mb-4" /> */}
        <Link
          href="https://github.com/Ossama1903"
          target="_blank"
          className="text-white"
        >
          <GitHub className="mb-[9rem]" />
        </Link>
        <hr className="bg-white rotate-90 w-[15rem] ml-[-6.8rem]" />
      </div>
      <div className="md:block fixed bottom-[8rem] right-[-5rem] hidden">
        <p className="rotate-90 text-xs">
          <a
            // href="mailto:sheikhusamabilal@gmail.com"
            onClick={copyEmail}
            className="text-white no-underline cursor-pointer"
          >
            s h e i k h u s a m a b i l a l @ g m a i l . c o m
          </a>
        </p>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Copied to clipboard
        </Alert>
      </Snackbar>
    </div>
  );
}
