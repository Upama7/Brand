import Category from "@/components/Category";
import Region from "@/components/Region";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Category />
      <hr className="my-10 " />
      <Region />
    </main>
  );
}
