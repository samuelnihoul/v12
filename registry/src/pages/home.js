import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <h1>The Smartest CO2 Offset Marketplace</h1>
      <h2>We do CO2 offsets. Your way.</h2>
      <h2>
        You can mitigate the climate crisis from your garage, backyard or even
        fingertips? Sell yours.
      </h2>
      <Link to="Registry">Registry</Link>
    </>
  );
}
