import "./mycontainer.css";
//
import { Header, TopBg, Followers, Overview } from "@/components";

export default function MyContainer() {
  return (
    <>
      <div className=" w-[100%]">
        <TopBg />
        <div className="w-[80%] m-auto">
          <Header />
          <Followers />
          <Overview />
        </div>
      </div>
    </>
  );
}
