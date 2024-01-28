import "./mycontainer.css";
//
import { Header, Followers, Overview } from "@/components";

export default function MyContainer() {
  return (
    <>
      <div className=" max-w-[78rem]  px-[2rem] md:px-[1rem]  m-auto">
        <Header />
        <main>
          <Followers />
          <Overview />
        </main>
      </div>
    </>
  );
}
