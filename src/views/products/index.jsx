import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "../products/products";
import AddProduct from "../products/add-product";
import EditProduct from "../products/edit-product";
import DeleteProduct from "../products/delete-product";
import ViewProduct from "../products/view-products";

export const RouteComponents = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path="add" element={<AddProduct />} />
          <Route path=":id/edit" element={<EditProduct />} />
          <Route path=":id/delete" element={<DeleteProduct />} />
          <Route path=":id" element={<ViewProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
