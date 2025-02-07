import "./navigation.css";

const Nav = ({ setActivePage }) => {
  return (
    <main className="mainbar">
      <div className="navbar">
        <img src="/images/logo1.png" className="logoimg" alt="Logo" />
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
