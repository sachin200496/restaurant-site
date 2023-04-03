import "./hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <img
        className="hero-bg"
        src={require("../images/hero-food-bg.jpg")}
        alt="food-hero"
      />
      <h2>Bon Appétit</h2>
    </div>
  );
}
