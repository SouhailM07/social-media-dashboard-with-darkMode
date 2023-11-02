import "./followers.css";
//
import { FollowersPreviewer } from "@/components";
//
import upState from "@/public/icon-up.svg";
import downState from "@/public/icon-down.svg";
import facebookLogo from "@/public/icon-facebook.svg";
import twitterLogo from "@/public/icon-twitter.svg";
import youtubeLogo from "@/public/icon-youtube.svg";
import instagramLogo from "@/public/icon-instagram.svg";

export default function Followers() {
  let arrOfFollowers = [
    {
      line: "bg-blue-500",
      img: facebookLogo,
      name: "@nathanf",
      num: "1987",
      underNum: "FOLLOWERS",
      state: [upState, "12"],
    },
    {
      line: "bg-blue-500",
      img: twitterLogo,
      name: "@nathanf",
      num: "1044",
      underNum: "FOLLOWERS",
      state: [upState, "99"],
    },
    {
      line: "bg-gradient-to-r from-[#fdc468] to-[#df4996]",
      img: instagramLogo,
      name: "@realnathanf",
      num: "11k",
      underNum: "FOLLOWERS",
      state: [upState, "1099"],
    },
    {
      line: "bg-YouTube",
      img: youtubeLogo,
      name: "Nathan F.",
      num: "8239",
      underNum: "SUBSCRIBERS",
      state: [downState, "144"],
    },
  ];
  return (
    <>
      <article>
        <h3 className="mb-[3rem] text-d_text font-normal text-[1.2rem]">
          Total Followers: 23,004
        </h3>
        <div className="flex justify-between flex-wrap">
          {arrOfFollowers.map((e, i) => {
            return (
              <FollowersPreviewer
                key={i}
                img={e.img}
                line={e.line}
                name={e.name}
                num={e.num}
                underNum={e.underNum}
                state={e.state}
              />
            );
          })}
        </div>
      </article>
    </>
  );
}
