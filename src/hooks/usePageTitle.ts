import { useEffect } from "react";

/** Sets the browser tab title for a page and restores the site title when leaving it. */
export const usePageTitle = (title: string) => {
  useEffect(() => {
    const prev = document.title;
    document.title = title;
    return () => { document.title = prev; };
  }, [title]);
};
