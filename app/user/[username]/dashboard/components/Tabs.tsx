"use client";
import React, { PropsWithRef, useCallback } from "react";

function Tabs({
  tabsData,
  className,
  colorUnderline,
  tabsRef,
  useActiveTabProps,
  setIsLoading,
}: PropsWithRef<TabsPropsType>): React.JSX.Element {
  const { activeTab, setActiveTab, tabUnderlineProps } = useActiveTabProps;

  const handleClick = useCallback(
    (idx: number, tab: TabType) => {
      setIsLoading(true);
      setActiveTab({ ...activeTab, index: idx, label: tab.label });
    },
    [activeTab],
  );

  return (
    <nav className={`relative my-4 md:my-8 lg:my-12 xl:my-16 ${className}`}>
      <ul className="flex w-full flex-row justify-between rounded border-b border-white/25 bg-neutral-500/10 shadow">
        {tabsData.map((tab, idx) => {
          return (
            <li key={idx} className="w-1/3">
              <button
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
                className={`flex w-full flex-row items-center justify-center pb-3 pt-2 text-xs capitalize md:text-base lg:text-lg ${
                  activeTab.index === idx ? "text-white" : "text-white/50"
                }`}
                onClick={() => handleClick(idx, tab)}
              >
                <span>{tab.icon}</span>
                <span className={`${tab.icon ? "hidden md:flex" : ""}`}>
                  {tab.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <span
        className={`absolute bottom-0 block h-1 w-1/3 rounded ${colorUnderline} transition-all duration-300`}
        style={{
          left: tabUnderlineProps.position,
          width: tabUnderlineProps.width,
        }}
      />
    </nav>
  );
}

export default Tabs;
