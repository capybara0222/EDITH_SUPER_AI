import { PiCheckSquare, PiCopyFill } from "react-icons/pi"
import { useUser } from "../context/userContext"
import Activity from "../components/Activity";
import { useEffect, useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Friends = () => {
  const { userActivities, userData } = useUser();
  const [referralCode, setReferralCode] = useState<string>("");
  const [copyStatus, setCopyStatus] = useState<boolean>(false);

  const handleCopyClick = async () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000);
  }

  useEffect(() =>
    setReferralCode(`https://t.me/edithsuperai_bot?startapp=${userActivities?.referralCode}`)
    , [userActivities?.referralCode])

  return (
    <main className="w-full min-h-screen bg-bgMain font-aeonik text-[#878787] homeBackground">
      <div className="flex flex-col p-5">
        <div className="flex flex-col gap-6 pt-3 text-left pb-9">
          <h3 className="text-base text-[#FCFCFC] text-medium">Referral Statistics</h3>
          <div className="flex flex-col w-full gap-6 p-3 border border-[#FFFFFF14] bg-[#FFFFFF12] rounded-xl">
            <div className="grid grid-cols-3 gap-[5px]">
              <div className="flex flex-col w-full gap-2 p-3 border border-[#262626] rounded-xl bg-[#010101]">
                <span className="text-xs">Total Referrals</span>
                <span className="text-xl font-bold text-[#FFFFFF]">
                  {userActivities?.referralCount || 0}
                </span>
              </div>
              <div className="flex flex-col w-full gap-2 p-3 border border-[#262626] rounded-xl bg-[#010101]">
                <span className="text-xs">Total Earned</span>
                <div className="flex items-center justify-start gap-2">
                  <span className="text-xl font-bold text-[#FFFFFF]">
                    {userData?.points || 0}
                  </span>
                  <img src="/ether.png" className="w-[18px] h-[18px]" />
                </div>
              </div>
              <div className="flex flex-col w-full gap-2 p-3 border border-[#262626] rounded-xl bg-[#010101]">
                <span className="text-xs">Success Rate</span>
                <span className="text-xl font-bold text-[#FFFFFF]">100%</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs">Your referral link</span>
              <div className="flex items-center justify-between gap-2">
                <div className="relative flex-1 ">
                  <input
                    type="text"
                    className="border border-[#FFFFFF36] p-1.5 w-full rounded-lg bg-[#FFFFFF]/15 h-[30px] text-xs text-[#FFFFFF]/50 pr-7"
                    value={referralCode}
                    disabled
                  />
                  <CopyToClipboard text={referralCode} onCopy={handleCopyClick}>
                    <button
                      className="h-[18px] w-[18px] border border-[#FFFFFF1F] bg-[#FFFFFF1F] absolute top-1/2 -translate-y-1/2 right-1.5 flex items-center justify-center rounded-[4px] hover:border-[#FFFFFF1F] focus:outline-none"
                      onClick={handleCopyClick}
                    >
                      {copyStatus ? <PiCheckSquare className="text-xs text-[#FFFFFF]" /> : <PiCopyFill className="text-xs text-[#FFFFFF]" />}
                    </button>
                  </CopyToClipboard>
                </div>
                {/* <button className="bg-[#FFFFFF] border border-[#FFFFFF]/20 text-[#010101] font-medium text-sm h-7 w-[65px] hover:border-[#FFFFFF]/20 focus:outline-none">
                  Share
                </button> */}
              </div>
              <div className="flex items-center justify-start text-xs">
                Get&nbsp;
                <span className="text-[#FFFFFF] text-xs font-medium">100</span>
                &nbsp;
                <img src="/ether.png" className="h-[11px] w-[11px]" />
                &nbsp;for each invited user
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 pt-3 mb-20 text-left pb-9">
          <h3 className="text-base text-[#FFFFFF] text-medium">
            My Referrals
          </h3>
          <div className="p-[1px] rounded-[20px] bg-gradient-to-b from-[#202020] to-[#272727]">
            <div className="bg-[#101010] rounded-[19px]">
              <div className="border-b border-[#272727] p-4 flex justify-between items-center">
                <div className="basis-[47%] text-sm text-left">
                  User
                </div>
                <div className="basis-[40%] text-sm text-left">
                  Status
                </div>
                <div className="flex-1 text-sm text-left">
                  Rewards
                </div>
              </div>
              <div className="flex flex-col items-stretch gap-4 p-4">
                {
                  userActivities?.activities.map((item, index) =>
                    <Activity key={index} item={item} />
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Friends