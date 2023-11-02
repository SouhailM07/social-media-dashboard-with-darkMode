import "./overview.css";
//
import { OverviewPreviewer } from "@/components";
//
import upState from "@/public/icon-up.svg";
import downState from "@/public/icon-down.svg";
import facebookLogo from "@/public/icon-facebook.svg";
import twitterLogo from "@/public/icon-twitter.svg";
import youtubeLogo from "@/public/icon-youtube.svg";
import instagramLogo from "@/public/icon-instagram.svg";

export default function Overview() {
  let arrOfOverviews = [
    {
      name: "Page Views",
      img: facebookLogo,
      num: "87",
      state: [upState, "3%"],
    },
    {
      name: "Likes",
      img: facebookLogo,
      num: "52",
      state: [downState, "2%"],
    },
    {
      name: "Likes",
      img: instagramLogo,
      num: "5462",
      state: [upState, "2257%"],
    },
    {
      name: "Profile Views",
      img: instagramLogo,
      num: "52k",
      state: [upState, "1375%"],
    },
    {
      name: "Retweets",
      img: twitterLogo,
      num: "117",
      state: [upState, "303%"],
    },
    {
      name: "Likes",
      img: twitterLogo,
      num: "507",
      state: [upState, "553%"],
    },
    {
      name: "Likes",
      img: youtubeLogo,
      num: "107",
      state: [downState, "19%"],
    },
    {
      name: "Total Views",
      img: youtubeLogo,
      num: "1407",
      state: [downState, "12%"],
    },
  ];
  return (
    <>
      <div className="mt-[3rem]">
        <h2 className="dark:text-white text-[2rem] font-bold mb-[2rem]">
          Overview - Today
        </h2>
        <div className="flex justify-between flex-wrap">
          {arrOfOverviews.map((e, i) => {
            return (
              <OverviewPreviewer
                key={i}
                img={e.img}
                name={e.name}
                state={e.state}
                num={e.num}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
