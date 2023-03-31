import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Chives</div>
      <ul className="navlinks">
        <li className="navlink">About</li>
        <li className="navlink">Menu</li>
        <li className="navlink">Contact us</li>
      </ul>
    </div>
  );
}
