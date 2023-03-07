import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

interface CreateFormData {
  title: string;
  description: string;
}

export default function Form() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  // skema posting dan requirement
  const schema = yup.object().shape({
    title: yup.string().required("You must add a title."),
    description: yup.string().required("You must add a description."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  });

  // push form to collection
  const postRef = collection(db, "posts");

  const onCreatePost = async (data: CreateFormData) => {
    await addDoc(postRef, {
      ...data, // speading all data in data (title & description)
      username: user?.displayName,
      userId: user?.uid,
    });

    navigate("/");
  };

  return (
    <div className="flex flex-col bg-gray-900 p-10 rounded-md">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onCreatePost)}
      >
        <input type="text" placeholder="Title" {...register("title")} />
        <p>{errors.title?.message}</p>
        <textarea
          placeholder="What is in your mine"
          {...register("description")}
        />
        <p>{errors.description?.message}</p>
        <input type="submit" className="bg-cyan-500 text-white" />
      </form>
    </div>
  );
}
