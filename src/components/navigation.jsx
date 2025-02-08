import "./navigation.css";

const Nav = ({ setActivePage }) => {
  return (
    <main className="mainbar">
      <div className="navbar">
        <div className="brnd-div">
          <img src="https://raw.githubusercontent.com/pranavharak/City-Explorer/refs/heads/main/public/images/logo1.png" className="logoimg" alt="Logo" />
          <h2>City Explorer</h2>
        </div>
        <ul>
          <li onClick={() => setActivePage("home")}>Home</li>
          <li onClick={() => setActivePage("tour")}>Tour</li>
          <li onClick={() => setActivePage("contact")}>Contact Us</li>
        </ul>
      </div>
    </main>
  );
};

export default Nav;
