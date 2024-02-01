import React from "react";
import { json } from "react-router-dom";

class UserClass extends React.Component {
  // loading a class based component means creating a instance of the class and giving it some props
  // in class best place to create state variable is inside the constructor

  constructor(props) {
    super(props);
    // console.log(props);

    // it is a state variable consisting of big objects, that can contains all the state variable inside this object.
    this.state = {
      info: {
        name: "Dummy",
        location: "Default",
      },
    };
    // console.log(this.props.name+" Child Constructor");
  }
  async componentDidMount() {
    // console.log(this.props.name+" Child component Did Mount");
    const data = await fetch("https://api.github.com/users/itz-ankit01");
    const json = await data.json();
    console.log(json);

    this.setState({
      info: json,
    });
  }

  componentDidUpdate(){
    // console.log("Component Did Update");
  }

  // it will called just before when u move to different page like about us to contact us page
  componentWillUnmount(){
    console.log("Component will unmount called");
  }
  render() {
    // destructor

    const { name, location, avatar_url } = this.state.info;

    // console.log(this.props.name+" Child Render");
    return (
      <div className="user-card">
        <img src={avatar_url} className="user-img" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: ankitsharma0004d@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;

/**
 * - Parent Constructor
 * - Parent Render
 *
 *   - First Class constructor
 *   - First Class Render
 *
 *   - Second Class Constructor
 *   - Second Class Render
 *
 *   < DOM UPDATED IN SINGLE BATCH >
 *
 *   - First componentDidMount
 *   - Second componentDidMount
 *
 * - Parent ComponentDidMount
 *
 */

// Doc link of react lifeCycle: [https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/]
