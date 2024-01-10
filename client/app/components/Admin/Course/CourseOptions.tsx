"use client";
import React, { FC } from "react";
import { IoMdCheckmark, IoMdRadioButtonOn  } from "react-icons/io";

type Props = {
  active: number;
  setActive: (active: number) => void;
};

const CourseOptions: FC<Props> = ({ active, setActive }) => {
  const options = [
    "Course Information",
    "Course Options",
    "Course Content",
    "Course Preview",
  ];
  return (
    <div>
      {options.map((option: any, index: number) => (
        <div key={index} className="w-full flex py-5">
          <div
            className={`w-[35px] h-[35px] rounded-full flex items-center justify-center ${
              active > index ? "bg-blue-500" : "bg-[#384766]"
            } relative`}
          >
            {active + 1 > index ? <IoMdCheckmark className="text-[25px]" /> : <IoMdRadioButtonOn className="text-[25px]" />}
            {index !== options.length - 1 && (
              <div
                className={`absolute h-[30px] w-1 ${
                  active > index ? "bg-blue-500" : "bg-[#384766]"
                } bottom-[-100%]`}
              ></div>
            )}
          </div>
          <h5 className={`pl-3 text-black dark:text-white font-Poppins text-[20px]`}>
            {option}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default CourseOptions;
