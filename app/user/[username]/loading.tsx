import Button from "@/app/utils/components/Button";
import Container from "@/app/layout/Container";
import { StatsIcon } from "@/app/utils/components/Icons";
import React from "react";

function Loading() {
  return (
    <Container className="w-full md:w-3/4">
      <div className="flex w-full flex-col items-center justify-center md:flex-row">
        <span className="w-1/4 scale-100 rounded-md bg-neutral-700/25 p-12 md:p-16 lg:p-20 xl:p-24" />
        <div className="md:my-none my-2 flex w-2/3 flex-col items-center justify-around md:mx-2 lg:mx-4 xl:mx-6">
          <span className="my-4 flex w-1/2 scale-100 items-center justify-center rounded-md bg-neutral-700/25 p-5 md:my-2 lg:my-4 xl:my-6" />

          <ul className="my-1 flex w-full flex-col items-center justify-center md:my-2 md:flex-row md:flex-wrap md:justify-around lg:my-4 xl:my-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <li
                key={index}
                className="flex w-1/3 flex-col items-center justify-center"
              >
                <span className="my-1 w-1/6 scale-100 rounded-md bg-neutral-700/25 p-5" />
                <span className="my-1 w-1/3 scale-100 rounded-md bg-neutral-700/25 p-5" />
              </li>
            ))}
          </ul>
          <Button name="Dashboard" className="w-full">
            <StatsIcon className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Loading;

export function InfoCardLoading({ width }: { width: string }) {
  return (
    <span className={`animate-pulse rounded bg-neutral-800 shadow ${width}`}>
      <span className={`m-2 flex w-full flex-row items-center justify-around`}>
        <span className="w-1/6 scale-75 rounded bg-neutral-700/25 p-5" />
        <span className="w-4/6 scale-100 rounded-md bg-neutral-700/25 p-5" />
      </span>
    </span>
  );
}

export function GamesChartLoading() {
  const positions: string[] = ["start", "center", "end"];
  return (
    <article className="flex w-3/4 animate-pulse flex-row items-center justify-center">
      {positions.map((position, index) => (
        <div
          key={index}
          className={`flex w-1/3 flex-col items-${position} justify-center`}
        >
          <span
            className={`flex w-full flex-row items-center justify-${position}`}
          >
            <span className="w-1/12 scale-75 rounded bg-neutral-700/25 p-4" />
            <span className="w-2/12 scale-100 rounded-md bg-neutral-700/25 p-4" />
          </span>
          <span className="my-1 h-2 w-full bg-neutral-700/25 p-2" />
          <span className="w-1/6 scale-75 rounded bg-neutral-700/25 p-4" />
        </div>
      ))}
    </article>
  );
}

export function StatusBoardLoading() {
  return (
    <article className="flex w-full flex-col items-center justify-center rounded bg-neutral-500/10 shadow">
      <ul className="flex w-full animate-pulse flex-col items-center justify-between md:flex-row">
        {Array.from({ length: 3 }).map((_, index) => (
          <ul key={index} className="flex w-1/3 flex-col items-center p-2">
            <li
              key={index}
              className="flex w-full flex-row items-center justify-center"
            >
              <span className="w-1/12 scale-75 rounded bg-neutral-700/25 p-3" />
              <span className="w-2/12 scale-100 rounded-md bg-neutral-700/25 p-3" />
            </li>
            <li
              key={index + 1}
              className="flex w-full flex-col items-center md:w-1/2"
            >
              {Array.from({ length: 4 }).map((_, index) => (
                <span
                  className="my-1 w-3/4 rounded-md bg-neutral-700/25 p-2"
                  key={index}
                />
              ))}
            </li>
          </ul>
        ))}
      </ul>
    </article>
  );
}
