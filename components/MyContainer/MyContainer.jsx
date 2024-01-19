import "./mycontainer.css";
//
import { Header, TopBg, Followers, Overview } from "@/components";

export default function MyContainer() {
  return (
    <>
      <div className=" w-[100%] ">
        <TopBg />
        <div className=" max-w-[78rem]  px-[2rem] md:px-[1rem]  m-auto">
          <Header />
          <Followers />
          <Overview />
        </div>
      </div>
    </>
  );
}
