import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import PostHome from "./PostHome";

export interface Post {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
}

export default function Home() {
  const postRef = collection(db, "posts");
  const [postList, setPostList] = useState<Post[] | null>(null);

  const getPost = async () => {
    const data = await getDocs(postRef);
    setPostList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    );
  };

  // runing once
  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="p-10 text-2xl text-gray-700">
      <h1 className="pb-10">Home</h1>
      <div className="flex flex-col gap-2">
        {postList?.map((post) => (
          <PostHome post={post} />
        ))}
      </div>
    </div>
  );
}
