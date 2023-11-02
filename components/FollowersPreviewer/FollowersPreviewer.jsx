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
      <div className="dark:bg-d_card bg-l_CardBG mb-2 pb-[1rem] flex flex-col items-center rounded-lg justify-around  w-[17rem] h-[15.5rem]">
        <div
          className={`${line} h-[0.3rem] relative bottom-[0.8rem] w-full rounded-tr-xl rounded-tl-xl`}
        ></div>
        <div className="flex items-center">
          <Image src={img} className="mr-3" alt="logo" /> <span>{name}</span>
        </div>
        <h3 className="flex flex-col items-center">
          <div
            className="dark:text-white text-[3.8rem] font-bold"
            style={{ lineHeight: "4rem" }}
          >
            {num}
          </div>
          <span style={{ letterSpacing: "4px" }}>{underNum}</span>
        </h3>
        <div className="flex items-center">
          <Image src={state[0]} className="mr-1" alt="logo" />{" "}
          <div className={`${conditionalState} font-bold`}>
            {state[1]} Today
          </div>
        </div>
      </div>
    </>
  );
}
