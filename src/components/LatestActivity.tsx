import moment from "moment"
import { Activity } from "../libs/types"

const LatestActivity = ({item}: {item: Activity}) => {
  return (
    <div className="bg-gradient-to-b from-[#202020] to-[#272727] p-[1px] rounded-[20px]">
      <div className="rounded-[19px] bg-[#101010] p-4 flex items-stretch justify-between gap-3">
        <div className="p-[1px] bg-gradient-to-b from-[#101010] to-[#FFFFFF] via-[#444444] rounded-full">
          <div className="relative p-6 rounded-full bg-gradient-to-b from-[#101010] to-[#585858] via-[#1b1b1b]">
            <img src="/points.png" className="absolute h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-9" />
            <div className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <span className="font-bold leading-none text-[#FFFFFF] text-base ">
                {item.points}
              </span>
              <span className="font-medium leading-none text-[#FFFFFF] text-[11px]">
                Points
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between flex-1">
          <span className="text-base font-medium text-[#FFFFFF]">
            Referral
          </span>
          <div className="flex items-center justify-start gap-1">
            <p className="text-xs text-[#878787] ">Completed</p>
            <div className="w-2.5 h-2.5 rounded-full border-2 border-[#07D7C2]"></div>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-xs text-[#FFFFFF88]">{moment(item.created_at).format('Do MMM, h:mm A')}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestActivity