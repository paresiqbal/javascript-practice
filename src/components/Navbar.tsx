import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const [user] = useAuthState(auth);

  // logout fucntion
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="text-3xl font-semibold py-4 shadow-md flex justify-between px-10">
      <div className="flex gap-5">
        <Link to={"/"}>Home</Link>

        {!user ? (
          <Link to={"/login"}>Login</Link>
        ) : (
          <Link to={"/post"}>Post</Link>
        )}
      </div>
      <div className="flex items-center gap-2">
        {user && (
          <>
            <p>{user?.displayName}</p>
            <img src={user?.photoURL || ""} className="w-8 h-8 rounded-full" />
            <button
              onClick={logout}
              className="bg-gray-700 text-lg text-white px-2 rounded-md"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
