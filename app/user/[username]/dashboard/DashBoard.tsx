"use client";
import React, { useState, useEffect, useRef } from "react";
import Container from "../../../layout/Container";
import Tabs from "./components/Tabs";
import {
  COLORS_TAB_DATA,
  STATUS_TAB_DATA,
  VARIANTS_TAB_DATA,
} from "../../../data/data";
import CardContainer from "../../../layout/cardContainer";
import InfoCard from "./components/InfoCard";
import GamesChart from "./components/GamesChart";
import StatusBoard from "./components/StatusBoard";
import Title from "@/app/utils/components/Title";
import { useActiveTab } from "@/app/hooks/useActiveTab";
import NotFoundUser from "@/app/utils/components/NotFoundUser";
import { fetchGamesData, fetchStatsData } from "@/app/utils/fetchData";
import CurrentRating from "./components/CurrentRating";
import HighestRating from "./components/HighestRating";
import TotalGames from "./components/TotalGames";
import AvgOppRating from "./components/AvgOppRating";
import HighOppRating from "./components/HighOppRating";
import AvgWinsOppRating from "./components/AvgWinsOppRating";
import AvgDrawsOppRating from "./components/AvgDrawsOppRating";
import AvgLossesOppRating from "./components/AvgLossesOppRating";
import { getStatusGames } from "@/app/utils/formatData";
import {
  GamesChartLoading,
  InfoCardLoading,
  StatusBoardLoading,
} from "../loading";

function DashBoard({ username }: { username: string }): React.JSX.Element {
  // Loader
  const [isLoading, setIsLoading] = useState(true);
  // Stats Rating
  const [ratingData, setRatingData] = useState<VariantStatsType | null>(null);
  // Games Data
  const [gamesData, setGamesData] = useState<GameType[]>([]);
  // Games Data W/D/L
  const [statusGamesData, setStatusGamesData] = useState<StatusGamesType>({
    wins: [],
    draws: [],
    losses: [],
  });
  // Variant Tabs
  const variantTabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  // Color Tabs
  const colorTabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const variantTabProps = useActiveTab({
    tabsRef: variantTabsRef,
    initialTab: VARIANTS_TAB_DATA[0],
  });
  const variant = variantTabProps.activeTab.label;

  const colorTabProps = useActiveTab({
    tabsRef: colorTabsRef,
    initialTab: COLORS_TAB_DATA[0],
  });
  const color = colorTabProps.activeTab.label;

  useEffect(() => {
    const getGamesData = async (
      username: string,
      variant: string,
      color: string,
    ) => {
      // Stats
      const statsRating = await fetchStatsData(username, variant);
      setRatingData(statsRating);
      // Games
      const games = await fetchGamesData(username, variant, color);
      setGamesData(games);
      // Status Games
      const statusGames = await getStatusGames(username, games);
      setStatusGamesData(statusGames);
      // Loader
      setIsLoading(false);
    };
    getGamesData(username, variant, color);
  }, [variant, color]);

  // Handle Not Found
  if (gamesData && "code" in gamesData && ratingData && "code" in ratingData)
    return <NotFoundUser username={username} />;

  return (
    <Container className="w-11/12">
      <Title>Dashboard</Title>
      <Tabs
        tabsData={VARIANTS_TAB_DATA}
        className="w-full"
        colorUnderline="bg-primary"
        tabsRef={variantTabsRef}
        useActiveTabProps={variantTabProps}
        setIsLoading={setIsLoading}
      />
      <CardContainer>
        <InfoCard title="current rating" width="w-1/2">
          {isLoading ? (
            <InfoCardLoading width="w-full md:w-1/2 lg:w-1/3 xl:w-1/4" />
          ) : (
            ratingData && <CurrentRating ratingData={ratingData} />
          )}
        </InfoCard>
        <InfoCard title="highest rating" width="w-1/2">
          {isLoading ? (
            <InfoCardLoading width="w-full md:w-1/2 lg:w-1/3 xl:w-1/4" />
          ) : (
            ratingData && <HighestRating ratingData={ratingData} />
          )}
        </InfoCard>
      </CardContainer>
      <Tabs
        tabsData={COLORS_TAB_DATA}
        className="w-full"
        colorUnderline="bg-white/75"
        tabsRef={colorTabsRef}
        useActiveTabProps={colorTabProps}
        setIsLoading={setIsLoading}
      />
      <CardContainer>
        <InfoCard title="games" width="w-full">
          {isLoading ? (
            <InfoCardLoading width="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6" />
          ) : (
            <TotalGames gamesData={gamesData} username={username} />
          )}
        </InfoCard>
      </CardContainer>
      <CardContainer>
        {isLoading ? (
          <GamesChartLoading />
        ) : (
          <GamesChart gamesData={gamesData} statusGamesData={statusGamesData} />
        )}
      </CardContainer>
      <CardContainer>
        <InfoCard title="average opponent rating" width="w-1/2">
          {isLoading ? (
            <InfoCardLoading width="w-full md:w-1/2 lg:w-1/3 xl:w-1/4" />
          ) : (
            <AvgOppRating username={username} gamesData={gamesData} />
          )}
        </InfoCard>
        <InfoCard title="highest opponent rating" width="w-1/2">
          {isLoading ? (
            <InfoCardLoading width="w-full md:w-1/2 lg:w-1/3 xl:w-1/4" />
          ) : (
            <HighOppRating username={username} gamesData={gamesData} />
          )}
        </InfoCard>
      </CardContainer>
      <CardContainer>
        <InfoCard title="wins opponent rating" width="w-1/3">
          {isLoading ? (
            <InfoCardLoading width="w-full md:w-1/2 xl:w-1/3" />
          ) : (
            <AvgWinsOppRating
              username={username}
              statusGamesData={statusGamesData}
            />
          )}
        </InfoCard>
        <InfoCard title="draws opponent rating" width="w-1/3">
          {isLoading ? (
            <InfoCardLoading width="w-full md:w-1/2 xl:w-1/3" />
          ) : (
            <AvgDrawsOppRating
              username={username}
              statusGamesData={statusGamesData}
            />
          )}
        </InfoCard>
        <InfoCard title="losses opponent rating" width="w-1/3">
          {isLoading ? (
            <InfoCardLoading width="w-full md:w-1/2 xl:w-1/3" />
          ) : (
            <AvgLossesOppRating
              username={username}
              statusGamesData={statusGamesData}
            />
          )}
        </InfoCard>
      </CardContainer>
      <CardContainer>
        {isLoading ? (
          <StatusBoardLoading />
        ) : (
          <StatusBoard
            username={username}
            statusGamesData={statusGamesData}
            tabsData={STATUS_TAB_DATA}
          />
        )}
      </CardContainer>
    </Container>
  );
}

export default DashBoard;
