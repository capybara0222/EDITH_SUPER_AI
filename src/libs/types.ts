export interface UserContextTypes {
  userProfile: UserProfile | undefined;
  userData: UserData | undefined;
  activities: Activity[] | undefined;
}

export interface UserProfile {
  fullname: string;
  username?: string;
}

export interface UserData {
  user_id: string;
  level: number;
  points: number;
  referralCount: number;
}

export interface Activity {
  rewarded_user_id: string;
  type: string;
  referral_code: string;
  points: number;
  created_at: string;
}