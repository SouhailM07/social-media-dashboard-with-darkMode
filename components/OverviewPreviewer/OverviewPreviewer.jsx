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
      <div className="dark:bg-d_card bg-l_CardBG mb-[1.8rem] rounded-lg w-[17rem] h-[9rem] py-[1.4rem] px-[1.8rem] flex flex-col justify-between">
        <div className="flex justify-between">
          <span>{name}</span>
          <Image src={img} alt="logo" className="h-auto w-auto" />
        </div>
        {/*  */}
        <div className="flex justify-between items-end">
          <div className="text-[2rem] font-bold dark:text-white">{num}</div>
          <div className="flex items-center">
            <Image
              src={state[0]}
              alt="logo"
              className="h-auto w-auto mb-1 mr-1"
            />
            <div
              className={`${conditionalState} font-bold text-[1.2rem] mb-[0.3rem]`}
            >
              {state[1]}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
