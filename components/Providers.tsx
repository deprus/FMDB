"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

function Providers({ children }: React.PropsWithChildren) {
  return (
    <ClerkProvider publishableKey="pk_test_bmVhdC1zY3VscGluLTI1LmNsZXJrLmFjY291bnRzLmRldiQ">
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ClerkProvider>
  );
}

export default Providers;
