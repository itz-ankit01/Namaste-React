import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent component Did Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>This About Page</h1>
        {/* <User name = {"Ankit Agnihotri (function) "} location={"Gaya (function) "} email={"ankitsharma0004d@gmail.com (function) "} /> */}
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {/* take callback */}
            {({ loggedInUser }) => <h1 className="text-xl">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass
          name={"Ankit Agnihotri (Classs)"}
          location={"Gaya (class) "}
        />
        {/* <UserClass
          name={"Second (Classs)"}
          location={"Gaya (class) "}
          email={"ankitsharma0004d@gmail.com(class) "}
        /> */}
      </div>
    );
  }
}

export default About;
