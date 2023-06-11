import '@/styles/globals.css'
import '@/styles/searchbar.css'
import { QueryClient, QueryClientProvider } from "react-query
export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
