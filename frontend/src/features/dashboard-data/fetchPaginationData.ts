import apiAdmin from "../../services/API";
import { createPagination } from "../../utils/pagination";

export const fetchData = async (page: any, pageSize: any, filters: any) => {
  const param = createPagination(page, pageSize, filters);
  const dataResponse = await apiAdmin.get(`/products?${param}`);
  return dataResponse.data;
};
