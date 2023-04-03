import "./hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <img
        className="hero-bg"
        src={require("../images/hero-food-bg.jpg")}
        alt="food-hero"
      />
      <div className="quotes-food">
        <h2>"You don't need a silver fork to eat good food."</h2>
        <h2>Paul Prudhomme</h2>
      </div>
    </div>
  );
}
