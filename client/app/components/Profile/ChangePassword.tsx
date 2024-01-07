"use client";
import React, { FC, useEffect, useState } from "react";
import { styles } from "../../styles/style";
import { useUpdatePasswordMutation } from "../../../redux/features/user/userApi";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

type Props = {};

const ChangePassword: FC<Props> = (props) => {
  const [oldPassword, setOldPassword] = useState("");
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [updatePassword, { isSuccess, error }] = useUpdatePasswordMutation();

  const passwordChangeHandler = async (e: any) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Password do not match");
    } else {
      await updatePassword({ oldPassword, newPassword });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Password Updated Successfully!");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, error]);

  return (
    <div className="w-full pl-7 px-2 800px:px-5 800px:pl-0">
      <h1 className="block text-[25px] 800px:text-[30px] font-Poppins text-center font-[500] text-black dark:text-[#fff] pb-2">
        Change Password
      </h1>
      <div className="w-full">
        {/* eslint-disable-next-line jsx-a11y/role-supports-aria-props */}
        <form
          aria-required
          className="flex flex-col items-center"
          onSubmit={passwordChangeHandler}
        >
          <div className="w-[100%] 800px:w-[60%] mt-5 ">
            <label
              htmlFor="old-pass"
              className="block font-Poppins text-black dark:text-[#fff]"
            >
              Old Password
            </label>
            <div
              className={`w-full relative border flex items-center ${styles.input}`}
            >
              <input
                type={!showOld ? "password" : "text"}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                id="old-pass"
                placeholder="Enter your old password"
                className="border-none w-full h-full bg-transparent outline-none"
              />
              {!showOld ? (
                <AiOutlineEyeInvisible
                  className="aboslute bottom-3 right-2 z-1 cursor-pointer"
                  size={20}
                  onClick={() => setShowOld(true)}
                />
              ) : (
                <AiOutlineEye
                  className="aboslute bottom-3 right-2 z-1 cursor-pointer"
                  size={20}
                  onClick={() => setShowOld(false)}
                />
              )}
            </div>
          </div>
          <div className="w-[100%] 800px:w-[60%] mt-5 ">
            <label
              htmlFor="new-pass"
              className="block font-Poppins text-black dark:text-[#fff]"
            >
              New Password
            </label>
            <div
              className={`w-full relative border flex items-center ${styles.input}`}
            >
              <input
                type={!showNew ? "password" : "text"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                id="new-pass"
                placeholder="Enter your new password"
                className="border-none w-full h-full bg-transparent outline-none"
              />
              {!showNew ? (
                <AiOutlineEyeInvisible
                  className="aboslute bottom-3 right-2 z-1 cursor-pointer"
                  size={20}
                  onClick={() => setShowNew(true)}
                />
              ) : (
                <AiOutlineEye
                  className="aboslute bottom-3 right-2 z-1 cursor-pointer"
                  size={20}
                  onClick={() => setShowNew(false)}
                />
              )}
            </div>
          </div>
          <div className="w-[100%] 800px:w-[60%] mt-5 ">
            <label
              htmlFor="confirm-pass"
              className="block font-Poppins text-black dark:text-[#fff]"
            >
              Confirm Password
            </label>
            <div
              className={`w-full relative border flex items-center ${styles.input}`}
            >
              <input
                type={!showConfirm ? "password" : "text"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                id="confirm-pass"
                placeholder="Confirm your new password"
                className="border-none w-full h-full bg-transparent outline-none"
              />
              {!showConfirm ? (
                <AiOutlineEyeInvisible
                  className="aboslute bottom-3 right-2 z-1 cursor-pointer"
                  size={20}
                  onClick={() => setShowConfirm(true)}
                />
              ) : (
                <AiOutlineEye
                  className="aboslute bottom-3 right-2 z-1 cursor-pointer"
                  size={20}
                  onClick={() => setShowConfirm(false)}
                />
              )}
            </div>
            <input
              type="submit"
              className={`w-full h-[40px] border font-Poppins border-[#37a39a] text-center text-black dark:text-[#fff] rounded-[3px] mt-8 cursor-pointer`}
              required
              value="Update"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
