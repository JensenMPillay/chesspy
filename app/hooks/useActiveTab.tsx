import { useState, useEffect, useDebugValue, PropsWithRef } from "react";

export function useActiveTab({
  tabsRef,
  initialTab = { index: 0, label: "all games" },
}: PropsWithRef<UseActiveTabPropsType>): UseActiveTabType {
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);
  const [tabUnderlineProps, setTabUnderlineProps] =
    useState<tabUnderlinePropsType>({ position: 0, width: 0 });

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTab.index];
      setTabUnderlineProps({
        ...tabUnderlineProps,
        position: currentTab?.offsetLeft ?? 0,
        width: currentTab?.clientWidth ?? 0,
      });
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTab]);

  useDebugValue(activeTab ?? "Loading...");

  return {
    activeTab,
    setActiveTab,
    tabUnderlineProps,
  };
}
