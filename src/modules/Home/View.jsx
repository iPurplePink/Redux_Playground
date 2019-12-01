import React from "react";

const Home = props => {
  console.log("props home", props);

  const handleClick = () => {
    props.services.setIsLoggedIn(!props.isLoggedIn);
  };

  return (
    <div>
      <h1>WELCOME HOME</h1>
      <button onClick={handleClick}>LOG IN</button>
    </div>
  );
};

export default Home;
