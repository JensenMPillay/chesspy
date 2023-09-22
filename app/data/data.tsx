import React from "react";
import {
  BlitzIcon,
  BulletIcon,
  DrawIcon,
  LogoIcon,
  LoseIcon,
  RapidIcon,
  WinIcon,
} from "../utils/components/Icons";

export const STATUS = ["wins", "draws", "losses"];

export const GAME_STATUS = [
  "win",
  "checkmated",
  "agreed",
  "repetition",
  "timeout",
  "resigned",
  "stalemate",
  "lose",
  "insufficient",
  "50move",
  "abandoned",
  "timevsinsufficient",
];

export const GAME_WIN_STATUS = ["win"];

export const GAME_DRAW_STATUS = [
  "agreed",
  "repetition",
  "stalemate",
  "insufficient",
  "50move",
  "timevsinsufficient",
];

export const GAME_LOSE_STATUS = [
  "checkmated",
  "timeout",
  "resigned",
  "lose",
  "abandoned",
];

export const VARIANTS_TAB_DATA: TabType[] = [
  {
    index: 0,
    icon: <LogoIcon className="h-6 w-6" />,
    label: "all games",
  },
  {
    index: 1,
    icon: <RapidIcon className="h-6 w-6" />,
    label: "rapid",
  },
  {
    index: 2,
    icon: <BlitzIcon className="h-6 w-6" />,
    label: "blitz",
  },
  {
    index: 3,
    icon: <BulletIcon className="h-6 w-6" />,
    label: "bullet",
  },
];

export const COLORS_TAB_DATA: TabType[] = [
  {
    index: 0,
    label: "all games",
  },
  {
    index: 1,
    label: "white",
  },
  {
    index: 2,
    label: "black",
  },
];

export const STATUS_TAB_DATA: TabType[] = [
  {
    index: 0,
    icon: <WinIcon className="h-3 w-3" color="text-green-600/75" />,
    label: "wins by",
    details: [
      { designation: "resignation" },
      { designation: "checkmate" },
      { designation: "timeout" },
      { designation: "abandon" },
    ],
  },
  {
    index: 1,
    icon: <DrawIcon className="h-4 w-4" color="text-white/50" />,
    label: "draws by",
    details: [
      { designation: "agreement" },
      { designation: "threefold repetition" },
      { designation: "stalemate" },
      { designation: "insufficient material" },
    ],
  },
  {
    index: 2,
    icon: <LoseIcon className="h-3 w-3" color="text-red-600/75" />,
    label: "losses by",
    details: [
      { designation: "resignation" },
      { designation: "checkmate" },
      { designation: "timeout" },
      { designation: "abandon" },
    ],
  },
];
