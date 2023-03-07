import { async } from "@firebase/util";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();

  // popup function
  const signGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    navigate("/");
  };

  return (
    <div className="p-10 text-2xl text-white">
      <div className="bg-gray-900 py-60 rounded-md">
        <h1 className="pb-2">Login</h1>
        <p className="pb-2">Sign in with Google</p>
        <button
          onClick={signGoogle}
          className="bg-cyan-500 py-2 px-4 rounded-md"
        >
          Google
        </button>
      </div>
    </div>
  );
}
