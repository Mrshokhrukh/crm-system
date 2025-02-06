import React from "react";
import { Outlet } from "react-router-dom";

type ProductsLayoutProps = {};

const ProductsLayout: React.FC<ProductsLayoutProps> = () => {
  return <Outlet />;
};
export default ProductsLayout;
