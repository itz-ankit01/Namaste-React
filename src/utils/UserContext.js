// UserContext is like Global type object for react that can be used anywhere liked Login Information
import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Default User",
});

export default UserContext;