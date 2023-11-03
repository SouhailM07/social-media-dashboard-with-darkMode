import "./mycontainer.css";
//
import { Header, TopBg, Followers, Overview } from "@/components";

export default function MyContainer() {
  return (
    <>
      <div className=" w-[100%] ">
        <TopBg />
        <div className="md:w-[90%] w-[88%] m-auto">
          <Header />
          <Followers />
          <Overview />
        </div>
      </div>
    </>
  );
}
