import "./mycontainer.css";
//
import { Header, TopBg, Followers, Overview } from "@/components";

export default function MyContainer() {
  return (
    <>
      <div className=" w-[100vw]">
        <TopBg />
        <div className="w-[80vw] m-auto">
          <Header />
          <Followers />
        </div>
      </div>
    </>
  );
}
