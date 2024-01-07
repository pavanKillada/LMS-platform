import { redirect } from "next/navigation";
import React from "react";
import UserAuth from "./userAuth";

interface ProtectedProps{
    children: React.ReactNode;
}

export default function Protected({children}:ProtectedProps){
    const isAuthenticated = UserAuth();
    return isAuthenticated ? children : redirect("/");
}