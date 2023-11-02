import "./followerspreviewer.css";
import Image from "next/image";
export default function FollowersPreviewer({
  line,
  img,
  name,
  num,
  underNum,
  state,
}) {
  let conditionalState =
    state[0].src.slice(19, 29) == "/icon-down"
      ? "text-red-500"
      : "text-green-500";
  return (
    <>
      <div className="FollowersPreviewer">
        <div className={`${line} FollowersPreviewer-line`}></div>
        {/*  */}
        <div className="FollowersPreviewer-name">
          <Image src={img} className="mr-3" alt="logo" /> <span>{name}</span>
        </div>
        {/*  */}
        <h3 className="FollowersPreviewer-num">
          <div>{num}</div>
          <span style={{ letterSpacing: "4px" }}>{underNum}</span>
        </h3>
        {/*  */}
        <div className="FollowersPreviewer-state">
          <Image src={state[0]} alt="logo" />
          <div className={`${conditionalState} font-bold`}>
            {state[1]} Today
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
}
