import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-b-0 border-l-0 border-r-0 border-gray-800 p-4 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/70024383?v=4&size=64"
            alt="user-avatar"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11">
          <h5>Saadat Badgujar</h5>
          <p>If you want to make the wrong decision, ask everyone.</p>
          <div className="flex justify-around mt-3 text-lg items-center">
            <div className="">
              <BiMessageRounded />
            </div>
            <div className="">
              <FaRetweet />
            </div>
            <div className="">
              <AiOutlineHeart />
            </div>
            <div className="">
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
