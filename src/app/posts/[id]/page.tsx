"use client";

import { useParams } from "next/navigation";

export default function PostsPage() {
  const { id } = useParams();

  return (
    <>
      <h1>Posts: {id}</h1>
    </>
  );
};
