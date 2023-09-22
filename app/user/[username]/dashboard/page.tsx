import { getUserData, isUserNotFound } from "@/app/utils/fetchData";
import DashBoard from "./DashBoard";
import NotFoundUser from "../../../utils/components/NotFoundUser";

export default async function Page({
  params: { username },
}: {
  params: { username: string };
}): Promise<React.JSX.Element | undefined> {
  const userData = await getUserData(username);

  // Handle Not Found
  if (isUserNotFound(userData)) return <NotFoundUser username={username} />;
  return <DashBoard username={username} />;
}
