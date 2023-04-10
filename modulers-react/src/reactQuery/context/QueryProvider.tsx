import React, { ReactNode, FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 600000, // 10분
    },
  },
});

interface QueryClientProviderProps {
  children: ReactNode;
}

const QueryProvider: FC<QueryClientProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
