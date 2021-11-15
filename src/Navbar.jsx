const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="NavBarMain">
        Restaurant Group Compensation Information
      </div>
      <div className="NavItemContainer">
        <div className="NavBarItem">
          <a href="#1">City</a>
        </div>
        <div className="NavBarItem">
          <a href="#2">City + Field</a>
        </div>
        <div className="NavBarItem">
          <a href="#3">Department</a>
        </div>
        <div className="NavBarItem">
          <a href="#4">Gender</a>
        </div>
        <div className="NavBarItem">
          <a href="#5">Start Date</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
