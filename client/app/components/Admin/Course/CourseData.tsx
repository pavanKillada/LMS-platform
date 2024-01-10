"use client";
import { styles } from "../../../styles/style";
import React, { FC } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { toast } from "react-hot-toast";

type Props = {
  benefits: { title: string }[];
  setBenefits: (benefits: { title: string }[]) => void;
  prerequisites: { title: string }[];
  setPrerequisites: (prerequisites: { title: string }[]) => void;
  active: number;
  setActive: (active: number) => void;
};

const CourseData: FC<Props> = ({
  benefits,
  setBenefits,
  prerequisites,
  setPrerequisites,
  active,
  setActive,
}) => {
  const handleBenefitChange = (index: number, value: any) => {
    const updatedBenefits = [...benefits];
    updatedBenefits[index].title = value;
    setBenefits(updatedBenefits);
  };

  const handleAddBenefits = () => {
    setBenefits([...benefits, { title: "" }]);
  };

  const handlePrerequisiteChange = (index: number, value: any) => {
    const updatedPrerequisites = [...prerequisites];
    updatedPrerequisites[index].title = value;
    setPrerequisites(updatedPrerequisites);
  };

  const handleAddPrerequisites = () => {
    setPrerequisites([...prerequisites, { title: "" }]);
  };

  const handleOptions = () => {
    if (
      benefits[benefits.length - 1]?.title !== "" &&
      prerequisites[prerequisites.length - 1]?.title !== ""
    ) {
      setActive(active + 1);
    } else {
      toast.error("Please fill the fields to proceed next!");
    }
  };

  const prevButton = () => {
    setActive(active - 1);
  };

  const handleRemoveBenefits = (index:number) => {
    const updatedBenefits = [...benefits];
    if(updatedBenefits.length > 1){
        updatedBenefits.splice(index, 1);
        setBenefits(updatedBenefits);
    }else{
        toast.error("At least one benefit must present");
    }
  }

  const handleRemovePrerequisites = (index:number) => {
    const updatedPrerequisites = [...prerequisites];
    if(updatedPrerequisites.length > 1){
        updatedPrerequisites.splice(index, 1);
        setPrerequisites(updatedPrerequisites);
    }else{
        toast.error("At least one prerequisite must present");
    }
  }

  return (
    <div className="w-[80%] m-auto mt-24 block">
      <div>
        <label htmlFor="email" className={`${styles.label} text-[20px]`}>
          What are the benefits for students in this course?
        </label>
        <br />
        {benefits.map((benefit: any, index: number) => (
          <div className="flex w-full items-center justify-start" key={index}>
            <input
              type="text"
              name="Benefit"
              placeholder="You will be able to build a full stack LMS platform..."
              required
              className={`${styles.input} my-2`}
              value={benefit.title}
              onChange={(e) => handleBenefitChange(index, e.target.value)}
            />
            <RemoveCircleIcon className="ml-2 cursor-pointer text-red-400" onClick={() => handleRemoveBenefits(index)} />
          </div>
        ))}
        <AddCircleIcon
          style={{ margin: "10px 0", cursor: "pointer", width: "30px", color: "lightgreen" }}
          onClick={handleAddBenefits}
        />
      </div>
      <div>
        <label htmlFor="email" className={`${styles.label} text-[20px]`}>
          What are the prerequisites for students in this course?
        </label>
        <br />
        {prerequisites.map((prerequisite: any, index: number) => (
          <div className="flex w-full items-center justify-start" key={index}>
            <input
              type="text"
              key={index}
              name="Prerequisite"
              placeholder="You need basic knowledge on MERN Stack"
              required
              className={`${styles.input} my-2`}
              value={prerequisite.title}
              onChange={(e) => handlePrerequisiteChange(index, e.target.value)}
            />
            <RemoveCircleIcon className="ml-2 cursor-pointer text-red-400" onClick={() => handleRemovePrerequisites(index)} />
          </div>
        ))}
        <AddCircleIcon
          style={{ margin: "10px 0", cursor: "pointer", width: "30px", color: "lightgreen" }}
          onClick={handleAddPrerequisites}
        />
      </div>
      <div className="w-full flex items-center justify-between">
        <button
          className="w-full font-Poppins 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-5 cursor-pointer"
          onClick={() => prevButton()}
        >
          Prev
        </button>
        <button
          className="w-full font-Poppins 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-5 cursor-pointer"
          onClick={() => handleOptions()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CourseData;
