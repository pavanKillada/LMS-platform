'use client'
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { BiSearch } from "react-icons/bi";

type Props = {};

const Hero: FC<Props> = (props) => {
  return (
    <div className="w-full flex flex-col align-middle 1000px:flex-row items-center">
      <div className=" flex flex-col justify-start items-center 1000px:top-[unset] 1000px:mb-[100px] 1500px:h-[700px] 1500px:w-[700px] 1100px:h-[600px] 1100px:w-[600px] h-[auto] w-[100vw] 1000px:flex-row 1000px:flex-grow 1000px:justify-around 1000px:mt-[100px] mt-[20px] ">
        <div className="items-center aspect-square flex rounded-full 1000px:max-w-[40vw] p-16 hero_animations ">
          <Image
            src={require("../../../public/assets/banner-img-1.png")}
            alt="hero banner image"
            className="object-contain w-full h-full"
          />
        </div>
        <div className=" flex flex-col items-center text-center 1000px:mt-[0px] 1000px:items-start 1000px:text-left w-full mb-16 1000px:w-[40vw]">
          <h2 className="dark:text-white text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[50px] font-[600] font-Josefin py-2 1300px:text-[65px] 1000px:leading-[75px] ">
            Improve Your Online Learning Experience Better Instantly
          </h2>
          <br />
          <p className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text=[18px] 1000px:w-[78%]">
            We have 40k+ Online courses & 500k+ registered students. Find your
            desired Courses from them.
          </p>
          <br />
          <br />
          <div className="1500px:w-[70%] 1100px:w-[78%] w-[90%] h-[50px] max-w-[500px] bg-transparent relative">
            <input
              type="search"
              placeholder="Search Courses..."
              className="bd-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-[500] font-Josefin"
            />
            <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]">
                <BiSearch className="text-white" size={30} />
            </div>
          </div>
          <br />
          <br />
          <div className="1500px:w-[60%] 1100px:w-[78%] w-[90%] flex justify-center items-center">
          <Image
            src={require("../../../public/assets/client-3.jpg")}
            alt=""
            className="rounded-full"
          />
          <Image
            src={require("../../../public/assets/client-2.jpg")}
            alt=""
            className="rounded-full ml-[-20px]"
          />
          <Image
            src={require("../../../public/assets/client-1.jpg")}
            alt=""
            className="rounded-full ml-[-20px]"
          />
          <p className="font-Josefin ml-2 dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600]">
            500k+ People already trusted us.{" "}
            <Link href={"/courses"} className="dark:text-[#46e256] text-[crimson]">
                View Courses
            </Link>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
