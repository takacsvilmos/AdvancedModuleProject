import { createContext } from "react";

export const ProfilePanelContext=createContext({
    isOpen: false,
    doOpen: ()=>{},
    onClose: ()=>{},
})