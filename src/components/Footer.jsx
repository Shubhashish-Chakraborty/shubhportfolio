"use client";
import React from "react";
import Twitter from "./ui/Twitter";
import Instagram from "./ui/Instagram";
import Github from "./ui/Github";
import Linkedin from "./ui/Linkedin";
import { Upwork } from "@/icons/Upwork";

const Footer = () => {
  const handleTwitterRedirecting = () => {
    window.open("https://x.com/__Shubhashish__", "_blank");
  };

  const handleInstagramRedirecting = () => {
    window.open("https://www.instagram.com/___shubhashish___", "_blank");
  };

  const handleLinkedinRedirecting = () => {
    window.open("https://www.linkedin.com/in/Shubhashish-Chakraborty/", "_blank");
  };

  const handleGithubRedirecting = () => {
    window.open("https://github.com/Shubhashish-Chakraborty/", "_blank");
  };

  const handleUpworkRedirecting = () => {
    window.open("https://www.upwork.com/freelancers/~018880ca3d0d892eac", "_blank");
  };

  return (
    <footer className="h-[49px] lg:h-[50px] border-white border-t font-fira-code text-gray-custom flex justify-between items-center">
      <div className="flex items-center h-full">
        <div className="pr-6 pl-6 lg:border-white lg:border-r h-full flex items-center cursor-pointer">
          find-me:
        </div>
        <div
          className="pr-6 pl-6 lg:border-white lg:border-r h-full flex items-center cursor-pointer hover:text-white-custom"
          onClick={handleTwitterRedirecting}
        >
          <button>
            <Twitter/>
          </button>
        </div>
        <div
          className="pr-6 pl-6 lg:border-white lg:border-r h-full lg:flex items-center cursor-pointer hover:text-white-custom hidden "
          onClick={handleInstagramRedirecting}
        >
          <button>
            <Instagram />
          </button>
        </div>
        <div
          className="pr-6 pl-6 lg:border-white lg:border-r h-full flex items-center cursor-pointer hover:text-white-custom"
          onClick={handleLinkedinRedirecting}
        >
          <button>
            <Linkedin />
          </button>
        </div>
        <div
          className="pr-6 pl-6 lg:border-white lg:border-r h-full flex items-center cursor-pointer hover:text-white-custom"
          onClick={handleUpworkRedirecting}
        >
          <button>
            <Upwork size={27}/>
          </button>
        </div>
      </div>
      <div
        className="cursor-pointer pl-6 pr-6 lg:border-white lg:border-l h-full flex items-center hover:text-white-custom"
        onClick={handleGithubRedirecting}
      >
        <Github />
      </div>
    </footer>
  );
};

export default Footer;
