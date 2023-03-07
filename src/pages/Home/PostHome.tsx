import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  deleteDoc,
} from "@firebase/firestore";
import { auth, db } from "../../config/firebase";
import { Post } from "./Home";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

interface Props {
  post: Post;
}

interface Like {
  userId: string;
  likeId: string;
}

export default function PostHome(props: Props) {
  const { post } = props;
  const [user] = useAuthState(auth);
  const likesRef = collection(db, "likes");
  const [likes, setLikes] = useState<Like[] | null>(null);

  // adding like
  const likeDoc = query(likesRef, where("postId", "==", post.id));

  const addLike = async () => {
    try {
      const newDoc = await addDoc(likesRef, {
        userId: user?.uid,
        postId: post.id,
      });
      if (user) {
        setLikes((prev) =>
          prev
            ? [...prev, { userId: user.uid, likeId: newDoc.id }]
            : [{ userId: user.uid, likeId: newDoc.id }]
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getLikes = async () => {
    const data = await getDocs(likeDoc);
    setLikes(
      data.docs.map((doc) => ({ userId: doc.data().userId, likeId: doc.id }))
    );
  };

  const removeLike = async () => {
    try {
      const likeToDeleteQuery = query(
        likesRef,
        where("postId", "==", post.id),
        where("userId", "==", user?.uid)
      );

      const likeToDeleteData = await getDocs(likeToDeleteQuery);
      const likeId = likeToDeleteData.docs[0].id;
      const likeToDelete = doc(db, "likes", likeId);
      await deleteDoc(likeToDelete);
      if (user) {
        setLikes(
          (prev) => prev && prev.filter((like) => like.likeId !== likeId)
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const hasUserLiked = likes?.find((like) => like.userId === user?.uid);

  useEffect(() => {
    getLikes();
  }, []);

  return (
    <div className="bg-gray-700 py-10 px-4 text-white rounded-md">
      <div>
        <h1>@{post.username}</h1>
      </div>
      <div>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
      </div>
      <div>
        <button
          onClick={hasUserLiked ? removeLike : addLike}
          className="bg-cyan-500 rounded-full "
        >
          {hasUserLiked ? <>&#128078;</> : <>&#128077;</>}{" "}
        </button>
        {likes && <p>{likes?.length}</p>}
      </div>
    </div>
  );
}
