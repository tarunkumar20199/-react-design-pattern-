// import { UserInfo } from "../layout-design-pattern/user-Info";
// import { logProps } from "./check-props";
// import { includeUser } from "./include-user";
import { UserInfoForm } from "./user-form";

// const UserInfoWrapper = includeUser(UserInfo, "3");
export const HigherOrderComponent = () => {
  return <UserInfoForm />;
};
