import { useEffect, useState } from "react";
import { useUser } from "../context/userContext";
import { levels } from "../libs/levels";
import LatestActivity from "../components/LatestActivity";

const Dashboard = () => {
  const { userProfile, userData, userActivities } = useUser();
  const [offset, setOffset] = useState(0);
  const radius = 40;
  const stroke = 8;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (userData?.level) {
      const totalProgress = userData.max - userData.min;
      const currentProgress = userData.points - userData.min;
      if (totalProgress === 0) {
        return setOffset(0)
      }
      const newOffset = (currentProgress / totalProgress) * circumference;
      setOffset(newOffset);
    } else {
      setOffset(0);
    }
  }, [offset, userData?.points, userData?.max, userData?.min]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center h-20 font-aeonik">
        <div className="flex items-center justify-between w-full max-w-screen-md gap-2 px-5 py-4 border-b-2 border-borderMain bg-bgMain">
          <div className="shrink-0">
            <img
              src="/avatar.png"
              alt={`${userProfile?.fullname || ""}`}
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex flex-col items-start justify-between flex-1 h-full min-w-[130px] py-1">
            <div className="flex gap-1.5 items-start w-full shrink-0">
              <span className="text-sm font-bold leading-none text-fontMain">
                {userProfile?.fullname || ""}
              </span>
              <div className="flex">
                <img src="/left.png" className="w-auto h-5" />
                <span className="font-medium text-sm text-[#FFAE4B] leading-none">
                  {userData?.level || 0}
                </span>
                <img src="/right.png" className="w-auto h-5" />
              </div>
            </div>
            <div className="flex items-center justify-start w-full gap-2">
              <div className="relative w-full max-w-[150px] bg-[#FFFFFF29] h-1.5 rounded-full">
                <div className="absolute top-0 left-0 h-1.5 bg-[#FFFFFF] rounded-full" style={{ width: `${(offset / circumference) * 100}%` }}></div>
              </div>
              <div className="flex items-center shrink-0">
                <span className="text-xs text-fontMain">
                  {
                    userData?.points.toFixed(0).toString() || '0'
                  }&nbsp;
                </span>
                <span className="text-xs text-[#C5C5C5]">
                  {`/ ${userData?.max.toString() || '0'}`}
                </span>
              </div>
            </div>
          </div>
          <button className="w-8 h-8 border-[#3a3a3a] bg-[#202020] flex items-center justify-center shrink-0 focus:outline-none hover:border-[#3a3a3a]">
            <img src="/setting.png" className="w-4 h-4" />
          </button>
        </div>
      </header>
      <main className="w-full min-h-screen bg-bgMain font-aeonik homeBackground">
        <div className="flex flex-col p-5">
          <div className="flex flex-col gap-6 pt-3 mt-20 text-left pb-9">
            <h3 className="text-base text-[#FFFFFF] text-medium">Statistics</h3>
            <div className="grid grid-cols-2 gap-[5px]">
              <div className="border-[#FFFFFF14] border rounded-xl p-3 flex flex-col justify-between items-start h-[77px] bg-[#FFFFFF12]  relative overflow-hidden">
                <p className="text-sm text-[#878787] leading-none">
                  Total Points
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-[#FFFFFF] text-xl leading-none">
                    {userData?.points || 0}
                  </span>
                  <img src="/coin.png" className="w-5 h-5" />
                </div>
                <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-20 h-8 bg-[#FFFFFF] blur-2xl" />
              </div>
              <div className="border-[#FFFFFF14] border rounded-xl p-3 flex flex-col justify-between items-start h-[77px] bg-[#FFFFFF12]  relative overflow-hidden">
                <p className="text-sm text-[#878787] leading-none">
                  Referrals Count
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-[#FFFFFF] text-xl leading-none">
                    {userActivities?.referralCount || 0}
                  </span>
                </div>
                <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-20 h-8 bg-[#FFFFFF] blur-2xl" />
              </div>
              <div className="border-[#FFFFFF14] border rounded-xl flex justify-between items-start h-[77px] bg-[#FFFFFF12]  relative overflow-hidden">
                <div className="flex flex-col justify-between h-full p-3 pr-0">
                  <p className="text-sm text-[#878787] leading-none text-nowrap">
                    Current Level
                  </p>
                  <p className="font-bold text-[#FFFFFF] text-xl leading-none">
                    {userData?.level || 0}
                  </p>
                </div>
                <div className="p-3 pl-0">
                  <div className="relative w-[53px] h-[53px]">
                    <svg
                      className="absolute transform"
                      width="53"
                      height="53"
                      viewBox="0 0 100 100"
                    >
                      {/* Define a Drop Shadow Filter */}
                      <defs>
                        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                          <feDropShadow
                            dx="0"
                            dy="0"
                            stdDeviation="6"
                            floodColor="#FFFFFF" /* Shadow color (semi-transparent black) */
                          />
                        </filter>
                      </defs>
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
                      {/* Foreground Circle (Animated with Shadow) */}
                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth={stroke}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - offset}
                        filter="url(#shadow)" /* Apply shadow filter */
                        className="transition-all duration-500 ease-out"
                      />
                    </svg>
                    <div className="absolute text-xs font-bold text-[#FFFFFF] transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      {((offset / circumference) * 100).toFixed(0)}%
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-20 h-8 bg-[#FFFFFF] blur-2xl" />
              </div>
              <div className="border-[#FFFFFF14] border rounded-xl flex justify-between items-start h-[77px] bg-[#FFFFFF12]  relative overflow-hidden">
                <div className="flex flex-col justify-between h-full p-3">
                  <p className="text-sm text-[#878787] leading-none text-nowrap">
                    Rank Status
                  </p>
                  <p className="font-bold text-[#FFFFFF] text-xl leading-none">
                    {userData?.level ? `${levels[userData.level]?.name}` : `${levels[0].name}`}
                  </p>
                </div>
                <div className="absolute top-0 right-3">
                  <img src={`/levels/${userData?.level ? `${levels[userData.level]?.name}` : `${levels[0].name}`}.png`} className="w-[60px] h-auto" />
                </div>
                <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-20 h-8 bg-[#FFFFFF] blur-2xl" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 pt-3 mb-20 text-left pb-9">
            <h3 className="text-base text-[#FFFFFF] text-medium">
              Latest Activity
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {userActivities?.activities
                .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
                .slice(0, 5)
                .map((item, index) =>
                  <LatestActivity key={index} item={item} />
                )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
