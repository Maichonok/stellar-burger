export type User = Readonly<{
  email: string;
  password: string;
  name: string;
}>;

export interface UserInfo {
  success: boolean;
  accessToken: string;
  refreshToken: string;
  user: {
    email: string;
    name: string;
  };
}
