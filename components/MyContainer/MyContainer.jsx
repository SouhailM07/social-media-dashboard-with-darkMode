import "./mycontainer.css";
//
import { Header, TopBg, Followers, Overview } from "@/components";

export default function MyContainer() {
  return (
    <>
      <div className=" w-[100%] ">
        <TopBg />
        <div className=" max-w-[80rem] px-[2rem] border-2 border-red-500 m-auto">
          <Header />
          <Followers />
          <Overview />
        </div>
      </div>
    </>
  );
}
