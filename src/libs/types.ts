export interface UserContextTypes {
  userProfile: UserProfile | undefined;
  userData: UserData | undefined;
  userActivities: UserActivities | undefined;
}

export interface UserProfile {
  fullname: string;
  username?: string;
  photoUrl?: string;
}

export interface UserData {
  user_id: string;
  level: number;
  max: number;
  min: number;
  points: number;
}

export interface UserActivities {
  activities: Activity[];
  referralCode: string;
  maxReferralDepth: number;
  referralCount: number;
}

export interface Activity {
  rewarded_user_id: string;
  type: string;
  referral_code: string;
  points: number;
  created_at: string;
}