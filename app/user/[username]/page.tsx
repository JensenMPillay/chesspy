import UserCard from "@/app/user/[username]/UserCard";
import NotFoundUser from "../../utils/components/NotFoundUser";
import React from "react";
import { formatUserData } from "@/app/utils/formatData";
import { getUserData, isUserNotFound } from "@/app/utils/fetchData";

export default async function Page({
  params: { username },
}: {
  params: { username: string };
}): Promise<React.JSX.Element | undefined> {
  const userData = await getUserData(username);

  // Handle Not Found
  if (isUserNotFound(userData)) return <NotFoundUser username={username} />;

  // Format
  const userFormatted = formatUserData(userData);

  return userFormatted && <UserCard user={userFormatted} />;
}
