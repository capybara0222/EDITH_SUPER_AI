import { useEffect, useState } from "react";
import axios from "axios";
import { retrieveLaunchParams } from "@telegram-apps/sdk";

const Dashboard = () => {
  const { initData } = retrieveLaunchParams();
  // const userId = extractUserId(initData);
  const [offset, setOffset] = useState(0);
  const radius = 40;
  const stroke = 8;
  const circumference = 2 * Math.PI * radius;

  const fetchUser = async () => {

    if (initData && initData.user) {
      console.log(initData.user);
      await axios
        .post("https://backend.url/api/user", {
          user_id: initData.user.id,
          refer_code: "string",
        })
        .then((response) => console.log("Success", response.data))
        .catch((error) => console.log("Error", error));
    } else {
      console.log("User data is not available");
    }
  };

  useEffect(() => {
    const newOffset = (60 / 100) * circumference;
    setOffset(newOffset);
    fetchUser();
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center h-20 font-aeonik">
        <div className="flex items-center justify-between w-full max-w-screen-md gap-2 px-5 py-4 border-b-2 border-borderMain bg-bgMain">
          <div className="shrink-0">
            <img
              src="/avatar.png"
              alt="Agent Smith"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex flex-col items-start justify-between flex-1 h-full min-w-[130px]">
            <div className="flex gap-1.5 items-start w-full shrink-0">
              <span className="text-sm font-bold leading-none text-fontMain">
                Agent Smith
              </span>
              <div className="flex">
                <img src="/left.png" className="w-auto h-5" />
                <span className="font-medium text-sm text-[#FFAE4B] leading-none">
                  24
                </span>
                <img src="/right.png" className="w-auto h-5" />
              </div>
            </div>
            <div className="flex items-center justify-start w-full gap-2">
              <div className="relative w-full max-w-[150px] bg-[#FFFFFF29] h-1.5 rounded-full">
                <div className="absolute w-[66.6%] top-0 left-0 h-1.5 bg-[white] rounded-full"></div>
              </div>
              <div className="flex items-center shrink-0">
                <span className="text-xs text-fontMain">2,000</span>
                <span className="text-xs text-[#C5C5C5]">/3000</span>
              </div>
            </div>
          </div>
          <button className="w-8 h-8 border-[#3a3a3a] bg-[#202020] flex items-center justify-center shrink-0">
            <img src="/setting.png" className="w-4 h-4" />
          </button>
        </div>
      </header>
      <main className="w-full min-h-screen bg-bgMain font-aeonik">
        <div className="flex flex-col p-5">
          <div className="flex flex-col gap-6 pt-3 mt-20 text-left pb-9">
            <h3 className="text-base text-white text-medium">Statistics</h3>
            <div className="grid grid-cols-2 gap-[5px]">
              <div className="border-[#FFFFFF14] border rounded-xl p-3 flex flex-col justify-between items-start h-[77px] bg-gradient-to-bl from-[#131313] via-[#181818] to-[#404040] relative">
                <p className="text-sm text-[#878787] leading-none">
                  Total Points
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-[white] text-xl leading-none">
                    2000
                  </span>
                  <img src="/coin.png" className="w-5 h-5" />
                </div>
              </div>
              <div className="border-[#FFFFFF14] border rounded-xl p-3 flex flex-col justify-between items-start h-[77px] bg-gradient-to-br from-[#131313] via-[#131313] to-[#404040] relative">
                <p className="text-sm text-[#878787] leading-none">
                  Referrals Count
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-[white] text-xl leading-none">
                    52
                  </span>
                </div>
              </div>
              <div className="border-[#FFFFFF14] border rounded-xl flex justify-between items-start h-[77px] bg-gradient-to-bl from-[#131313] via-[#131313] to-[#404040] relative">
                <div className="flex flex-col justify-between h-full p-3">
                  <p className="text-sm text-[#878787] leading-none text-nowrap">
                    Current Level
                  </p>
                  <p className="font-bold text-[white] text-xl leading-none">
                    24
                  </p>
                </div>
                <div className="p-3">
                  <div className="relative w-[53px] h-[53px]">
                    <svg
                      className="absolute transform"
                      width="53"
                      height="53"
                      viewBox="0 0 100 100"
                    >
                      {/* Background Circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="#FFFFFF36"
                        strokeWidth={stroke}
                        strokeLinecap="round"
                      />
                      {/* Foreground Circle (Animated) */}
                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="white"
                        strokeWidth={stroke}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - offset}
                        className="transition-all duration-500 ease-out"
                      />
                    </svg>
                    <div className="absolute text-xs font-bold text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      {60}%
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[#FFFFFF14] border rounded-xl flex justify-between items-start h-[77px] bg-gradient-to-br from-[#131313] via-[#131313] to-[#404040] relative">
                <div className="flex flex-col justify-between h-full p-3">
                  <p className="text-sm text-[#878787] leading-none text-nowrap">
                    Rank Status
                  </p>
                  <p className="font-bold text-[white] text-xl leading-none">
                    Elite lll
                  </p>
                </div>
                <div className="pr-3">
                  <img src="/medal.png" className="w-[60px] h-auto" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 pt-3 mb-20 text-left pb-9">
            <h3 className="text-base text-white text-medium">
              Latest Activity
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              <div className="border-[#262626] border rounded-[20px] p-4 flex justify-between items-start h-19 gap-3 bg-[#101010] relative before:absolute before:inset-0 before:p-[1px] before:rounded-[20px] before:bg-gradient-to-r before:from-[#202020] before:to-[#272727] before:-z-10 before:content-['']">
                <div className="p-[1px] bg-gradient-to-t from-white to-transparent rounded-full">
                  <div className="relative p-6 rounded-full bg-gradient-to-t from-[#585858] to-[#101010]">
                    <div className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <span className="font-bold leading-none text-white ext-base ">
                        52
                      </span>
                      <span className="font-medium leading-none text-white text-[11px]">
                        Points
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-between flex-1 h-full">
                  <span className="text-base font-medium text-white">
                    Referral
                  </span>
                  <div className="flex items-center justify-start gap-1">
                    <p className="text-xs text-[#878787] ">Completed</p>
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-[#07D7C2]"></div>
                  </div>
                </div>
                <div className="flex flex-col justify-start">
                  <p className="text-xs text-[#FFFFFF88]">18th Dec, 12:08 PM</p>
                </div>
              </div>
              <div className="border-[#262626] border rounded-[20px] p-4 flex justify-between items-start h-19 gap-3 bg-[#101010] relative before:absolute before:inset-0 before:p-[1px] before:rounded-[20px] before:bg-gradient-to-r before:from-[#202020] before:to-[#272727] before:-z-10 before:content-['']">
                <div className="p-[1px] bg-gradient-to-t from-white to-transparent rounded-full">
                  <div className="relative p-6 rounded-full bg-gradient-to-t from-[#585858] to-[#101010]">
                    <div className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <span className="text-base font-bold leading-none text-white ">
                        52
                      </span>
                      <span className="font-medium leading-none text-white text-[11px]">
                        Points
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-between flex-1 h-full">
                  <span className="text-base font-medium text-white">
                    Referral
                  </span>
                  <div className="flex items-center justify-start gap-1">
                    <p className="text-xs text-[#878787] ">In progress</p>
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-[#FFA83E]"></div>
                  </div>
                </div>
                <div className="flex flex-col justify-start">
                  <p className="text-xs text-[#FFFFFF88]">18th Dec, 12:08 PM</p>
                </div>
              </div>
              <div className="border-[#262626] border rounded-[20px] p-4 flex justify-between items-start h-19 gap-3 bg-[#101010] relative before:absolute before:inset-0 before:p-[1px] before:rounded-[20px] before:bg-gradient-to-r before:from-[#202020] before:to-[#272727] before:-z-10 before:content-['']">
                <div className="p-[1px] bg-gradient-to-t from-white to-transparent rounded-full">
                  <div className="relative p-6 rounded-full bg-gradient-to-t from-[#585858] to-[#101010]">
                    <div className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <span className="font-bold leading-none text-white ext-base ">
                        52
                      </span>
                      <span className="font-medium leading-none text-white text-[11px]">
                        Points
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-between flex-1 h-full">
                  <span className="text-base font-medium text-white">
                    Referral
                  </span>
                  <div className="flex items-center justify-start gap-1">
                    <p className="text-xs text-[#878787] ">In progress</p>
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-[#FFA83E]"></div>
                  </div>
                </div>
                <div className="flex flex-col justify-start">
                  <p className="text-xs text-[#FFFFFF88]">18th Dec, 12:08 PM</p>
                </div>
              </div>
              <div className="border-[#262626] border rounded-[20px] p-4 flex justify-between items-start h-19 gap-3 bg-[#101010] relative before:absolute before:inset-0 before:p-[1px] before:rounded-[20px] before:bg-gradient-to-r before:from-[#202020] before:to-[#272727] before:-z-10 before:content-['']">
                <div className="p-[1px] bg-gradient-to-t from-white to-transparent rounded-full">
                  <div className="relative p-6 rounded-full bg-gradient-to-t from-[#585858] to-[#101010]">
                    <div className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <span className="font-bold leading-none text-white ext-base ">
                        52
                      </span>
                      <span className="font-medium leading-none text-white text-[11px]">
                        Points
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-between flex-1 h-full">
                  <span className="text-base font-medium text-white">
                    Referral
                  </span>
                  <div className="flex items-center justify-start gap-1">
                    <p className="text-xs text-[#878787] ">Completed</p>
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-[#07D7C2]"></div>
                  </div>
                </div>
                <div className="flex flex-col justify-start">
                  <p className="text-xs text-[#FFFFFF88]">18th Dec, 12:08 PM</p>
                </div>
              </div>
              <div className="border-[#262626] border rounded-[20px] p-4 flex justify-between items-start h-19 gap-3 bg-[#101010] relative before:absolute before:inset-0 before:p-[1px] before:rounded-[20px] before:bg-gradient-to-r before:from-[#202020] before:to-[#272727] before:-z-10 before:content-['']">
                <div className="p-[1px] bg-gradient-to-t from-white to-transparent rounded-full">
                  <div className="relative p-6 rounded-full bg-gradient-to-t from-[#585858] to-[#101010]">
                    <div className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <span className="font-bold leading-none text-white ext-base ">
                        52
                      </span>
                      <span className="font-medium leading-none text-white text-[11px]">
                        Points
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-between flex-1 h-full">
                  <span className="text-base font-medium text-white">
                    Referral
                  </span>
                  <div className="flex items-center justify-start gap-1">
                    <p className="text-xs text-[#878787] ">Completed</p>
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-[#07D7C2]"></div>
                  </div>
                </div>
                <div className="flex flex-col justify-start">
                  <p className="text-xs text-[#FFFFFF88]">18th Dec, 12:08 PM</p>
                </div>
              </div>
              <div className="border-[#262626] border rounded-[20px] p-4 flex justify-between items-start h-19 gap-3 bg-[#101010] relative before:absolute before:inset-0 before:p-[1px] before:rounded-[20px] before:bg-gradient-to-r before:from-[#202020] before:to-[#272727] before:-z-10 before:content-['']">
                <div className="p-[1px] bg-gradient-to-t from-white to-transparent rounded-full">
                  <div className="relative p-6 rounded-full bg-gradient-to-t from-[#585858] to-[#101010]">
                    <div className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <span className="font-bold leading-none text-white ext-base ">
                        52
                      </span>
                      <span className="font-medium leading-none text-white text-[11px]">
                        Points
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-between flex-1 h-full">
                  <span className="text-base font-medium text-white">
                    Referral
                  </span>
                  <div className="flex items-center justify-start gap-1">
                    <p className="text-xs text-[#878787] ">Completed</p>
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-[#07D7C2]"></div>
                  </div>
                </div>
                <div className="flex flex-col justify-start">
                  <p className="text-xs text-[#FFFFFF88]">18th Dec, 12:08 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="fixed bottom-0 left-0 right-0 flex justify-center h-20 font-aeonik">
        <div className="w-full max-w-screen-md px-5 border-t-2 border-borderMain bg-[#131313] flex items-center justify-between">
          <div className="relative">
            <button className="flex flex-col items-center justify-center gap-1 p-5 border-none outline-none focus:outline-none group">
              <img
                src="/dashboard.png"
                className="w-auto h-[18px]"
              />
              <span className="text-[#93969D] text-xs group-hover:text-white bg-transparent">
                Dashboard
              </span>
            </button>
            <div className="absolute top-0">
              <img src="/tab.png" className="h-[] w-[80px]" />
            </div>
          </div>
          <button className="flex flex-col items-center justify-center gap-1 px-5 border-none outline-none focus:outline-none group">
            <img src="/friends.png" className="" />
            <span className="text-[#93969D] text-xs group-hover:text-white">Friends</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-1 px-5 border-none outline-none focus:outline-none group">
            <img src="/task.png" className="" />
            <span className="text-[#93969D] text-xs group-hover:text-white">Tasks & Earn</span>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Dashboard;
