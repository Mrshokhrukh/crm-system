export const createPagination = (page: any, pageSize: any, filters: any) => {
  const params = new URLSearchParams();
  params.append("page", page);
  params.append("pageSize", pageSize);

  Object.entries(filters).forEach(([key, value]: any) => {
    if (value) {
      params.append(key, value);
    }
  });

  return params.toString();
};
