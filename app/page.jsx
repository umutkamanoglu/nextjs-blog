import AllPosts from "@/components/blog/AllPosts";
import HomePageTopPosts from "@/components/blog/HomePageTopPosts";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomePageTopPosts />
      <AllPosts />
    </>
  );
}
