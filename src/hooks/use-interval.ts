import { useEffect } from "react";

export default function useInterval(callback: () => void, ms: number, dependencies: any[]) {
  useEffect(() => {
    const interval = setInterval(callback, ms);
    return () => clearInterval(interval);
  }, [callback, ms, ...dependencies]);
}
