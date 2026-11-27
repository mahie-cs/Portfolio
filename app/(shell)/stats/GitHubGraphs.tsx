"use client";

import { useIsClient } from "@/hooks/use-is-client";
import GitHubCalendar from "react-github-calendar";
import { siteConfig } from "@/config/site";
import { useTheme } from "next-themes";

const GitHubGraphs = () => {
  const { resolvedTheme } = useTheme();
  const mounted = useIsClient();

  // Standard GitHub green theme
  const theme = {
    dark: [
      "#222a36", // background
      "#0e4429", // level 1
      "#006d32", // level 2
      "#26a641", // level 3
      "#39d353", // level 4
    ],
    light: [
      "#ebedf0", // background
      "#9be9a8", // level 1
      "#40c463", // level 2
      "#30a14e", // level 3
      "#216e39", // level 4
    ],
  };

  if (!mounted) {
    return null; // Return null on server-side and first render on client-side
  }

  return (
    <div className="w-full flex justify-center min-w-0">
      <GitHubCalendar
        username={siteConfig.links.githubUsername}
        errorMessage="Could not fetch GitHub stats"
        hideColorLegend={false}
        theme={theme}
        colorScheme={resolvedTheme === "light" ? "light" : "dark"}
        showWeekdayLabels={true}
        blockMargin={5}
      />
    </div>
  );
};

export default GitHubGraphs;
