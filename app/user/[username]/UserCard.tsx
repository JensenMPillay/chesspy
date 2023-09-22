import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  JoinedIcon,
  LastOnlineIcon,
  StatsIcon,
  WorldIcon,
} from "../../utils/components/Icons";
import Container from "../../layout/Container";
import Button from "../../utils/components/Button";

function UserCard({ user }: { user: UserType }): React.JSX.Element {
  return (
    <Container className="w-full md:w-3/4">
      <div className="flex w-full flex-col items-center justify-center md:flex-row">
        {user?.avatar ? (
          <Image
            src={user?.avatar}
            alt="Avatar User"
            width={240}
            height={240}
            className="md:my-none my-2 w-1/3 max-w-xs rounded-xl md:mx-2 lg:mx-4 xl:mx-6"
          />
        ) : (
          <Image
            src="/assets/chess_icon.webp"
            alt="No Avatar User"
            width={240}
            height={240}
            className="md:my-none my-2 w-1/3 max-w-xs rounded-xl md:mx-2 lg:mx-4 xl:mx-6"
          />
        )}
        <div className="md:my-none my-2 flex w-2/3 flex-col items-center justify-around md:mx-2 lg:mx-4 xl:mx-6">
          <a
            href={user?.url}
            className="transition-all duration-300 hover:text-primary"
          >
            <h2 className="my-4 flex w-full items-center justify-center text-center text-base font-bold md:my-2 md:text-lg lg:my-4 lg:text-xl xl:my-6 xl:text-2xl">
              {user?.username}
            </h2>
          </a>
          <ul className="my-1 flex w-full flex-col items-center justify-center text-xs md:my-2 md:flex-row md:flex-wrap md:justify-around md:text-sm lg:my-4 lg:text-base xl:my-6 xl:text-lg">
            {user?.country && (
              <li
                key="country"
                className="flex flex-col items-center justify-center"
              >
                <WorldIcon className="h-6 w-6" />
                <span className="my-2 flex items-center justify-center text-xs md:text-sm lg:text-base">
                  <Image
                    src={user?.country}
                    alt="Country User"
                    width={24}
                    height={24}
                    className="rounded-xl"
                  />
                </span>
              </li>
            )}
            <li
              key="online"
              className="my-2 flex flex-col items-center justify-center md:my-0"
            >
              <LastOnlineIcon className="h-6 w-6" />
              <span className="my-2  text-xs md:text-sm lg:text-base">
                {user?.last_online}
              </span>
            </li>
            <li
              key="joined"
              className="flex flex-col items-center justify-center"
            >
              <JoinedIcon className="h-6 w-6" />
              <span className="my-2 text-xs md:text-sm lg:text-base">
                {user?.joined}
              </span>
            </li>
          </ul>
          {user?.username && (
            <Link href={`/user/${user?.username}/dashboard`} className="w-full">
              <Button name="Dashboard" className="w-full">
                <StatsIcon className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Container>
  );
}

export default UserCard;
