import { createContext, useContext, useEffect, useState } from "react";
import { Thread } from "../types/thread";
import { generateThreads } from "../utils/generate-dummy-data";

export const ThreadContext = createContext<Thread[]>([]);

export const TheadProvider = ({ children }: React.PropsWithChildren) => {
  const [threads, setThreads] = useState<Thread[]>([]);
  useEffect(() => {
    setThreads(generateThreads());
  }, []);
  return (
    <ThreadContext.Provider value={threads}>{children}</ThreadContext.Provider>
  );
};

export const useThreads = () => useContext(ThreadContext);
