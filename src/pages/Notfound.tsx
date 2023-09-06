import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-2xl">404 error!!!!</h2>
      <button
        id="backToHomeButton"
        className="bg-green-400 text-white font-bold rounded border-2 p-2"
        onClick={() => navigate("/")}
      >
        Go bach Home
      </button>
    </div>
  );
}
