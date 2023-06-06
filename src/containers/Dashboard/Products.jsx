import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { useRequest } from "../../hooks/UseRequest";
import { Store } from "../../context/store";
import {
  addNewProduct,
  removeProduct,
  setProducts,
} from "../../context/actions/ProductActions";
import DataTable from "react-data-table-component";
const Products = () => {
  const [openModal, setOpenModal] = useState(false);
  const { state, dispatch } = useContext(Store);
  const [product, setProduct] = useState({
    title: "",
    price: null,
    description: "",
    image: "",
    category: "",
  });
  const [addProduct] = useRequest();
  const [getProducts] = useRequest();
  const handleChangeForm = (e) => {
    const { value, name } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    getProducts("products", { method: "GET" }).then((res) => {
      setProducts(res.data, dispatch);
    });
  }, []);
  console.log(state.productList);
  const handleDelete = (product) => {
    removeProduct(product.id, dispatch);
  };
  const handleSubmit = () => {
    addProduct("products", {
      method: "POST",
      data: product,
    }).then((res) => {
      addNewProduct(res.data, dispatch);
      setOpenModal(false);
    });
  };
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      width: "30%",
    },
    {
      name: "Description",
      selector: (row) => row.description,
      width: "150px",
    },
    {
      name: "Category",
      selector: (row) => row.category,
      width: "150px",
    },
    {
      name: "Price",
      selector: (row) => row.price,
      width: "150px",
    },
    {
      name: "Actions",
      selector: (row) => (
        <Button
          title="Delete"
          className="btn-danger-outline"
          onClick={() => handleDelete(row)}
        />
      ),
      width: "150px",
    },
  ];
  return (
    <div className="products">
      <div className="products-buttons">
        <Button
          className="btn-primary"
          title="Ad New Product"
          onClick={() => setOpenModal(true)}
        />
      </div>
      <DataTable
        columns={columns}
        data={state.productList}
        style={{ width: "100%" }}
      />
      <Modal open={openModal}>
        <div className="modal-container-header">Add Product</div>
        <div className="form">
          <input
            type="text"
            name="title"
            onChange={handleChangeForm}
            value={product.title}
            placeholder="Product Title"
          />
          <input
            type="text"
            name="description"
            onChange={handleChangeForm}
            value={product.description}
            placeholder="Product Description"
          />
          <input
            type="number"
            name="price"
            onChange={handleChangeForm}
            value={product.price}
            placeholder="Product Price"
          />
          <input
            type="text"
            name="image"
            onChange={handleChangeForm}
            value={product.image}
            placeholder="Product Image"
          />
          <div className="modal-container-footer">
            <Button
              className="btn-primary"
              title="Save"
              onClick={handleSubmit}
            />
            <Button
              className="btn-primary-outline"
              title="Cancel"
              onClick={() => setOpenModal(false)}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Products;
