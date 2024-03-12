/* eslint-disable no-unused-vars */
import FetchTopQuotes from "./top-quotes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateQuotes from "./update-quotes";
import PaginatedQuotes from "./paginated-quotes";
import InfiniteScrollQuotes from "./infinite-scroll-quotes";
import QueryCancellationWithAbortSignal from "./query-cancellation";

const queryClient = new QueryClient();

export const ReactQueryComponent = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        {/* <UpdateQuotes />
        <FetchTopQuotes /> */}
        {/* <PaginatedQuotes /> */}
        <QueryCancellationWithAbortSignal />
      </QueryClientProvider>
    </>
  );
};
