import "./overviewpreviewer.css";
//
import Image from "next/image";

export default function OverviewPreviewer({ name, img, num, state }) {
  let conditionalState =
    state[0].src.slice(19, 29) == "/icon-down"
      ? "text-red-500"
      : "text-green-500";
  return (
    <>
      <div className="OverviewPreviewer">
        <div className="OverviewPreviewer-s1 ">
          <span className="font-bold">{name}</span>
          <Image src={img} alt="logo" />
        </div>
        {/*  */}
        <div className="OverviewPreviewer-s2">
          <div className="OverviewPreviewer-s2-num">{num}</div>
          <div className="OverviewPreviewer-s2-state ">
            <Image src={state[0]} alt="logo" className=" mb-1 mr-1" />
            <div className={`${conditionalState} `}>{state[1]}</div>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
}
