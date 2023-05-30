import { useState } from "react";

export const usePagination = (initialPage = 1, initialPageSize = 5) => {
  const [page, setPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handlePageSizeChange = (event) => {
    const newPageSize = parseInt(event.target.value);
    if (newPageSize >= 1) {
      setPageSize(newPageSize);
      setPage(1);
    }
  };

  return {
    page,
    setPage,
    pageSize,
    handlePageChange,
    handlePageSizeChange,
  };
};