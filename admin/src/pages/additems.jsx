import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
const Additems = () => {
  const categories = [
    "Salade",
    "Rolls",
    "Deserts",
    "Sandwich",
    "Cake",
    "Pure Veg",
    "Pasta",
  ];
  const [image, setImage] = useState(false);
  const url= "http://localhost:4000";
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salade",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  const submitData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const res = await axios.post(`${url}/api/food/add`, formData);
    if (res.data.success) {
      setData({ name: "", description: "", price: "", category: "Salade" });
      setImage(false);
      toast.success(res.data.message);
    } else toast.error(res.data.message);
  };
  return (
    <div className=" additems px-6 mx-6 flex flex-col items-start justify-between">
      {" "}
      <form action="" onSubmit={submitData}>
        {" "}
        <div className="relative ">
          <h3>Upload Image</h3>{" "}
          <input
            type="file"
            className="cursor-pointer"
            onChange={(e) => setImage(e.target.files[0])}
          />{" "}
          <img
            src={image ? URL.createObjectURL(image) : assets.app_store}
            className="image-dep pointer-events-none"
          />{" "}
        </div>
        <div className="">
          {" "}
          <h3>Product Name</h3>
          <input
            onChange={onChangeHandler}
            type="text"
            value={data.name}
            name="name"
            id=""
            className=""
          />{" "}
        </div>{" "}
        <div className="">
          {" "}
          <h3>Product description </h3>{" "}
          <textarea
            name="description"
            value={data.description}
            id=""
            className=""
            onChange={onChangeHandler}
          ></textarea>
        </div>{" "}
        <div className=" flex space-x-6">
          <div className="">
            {" "}
            <h3>Product Category</h3>{" "}
            <select
              name="category"
              onChange={onChangeHandler}
              id="sf"
              className="w-full"
            >
              {" "}
              {categories.map((ca, index) => (
                <option key={index} value={ca}>
                  {ca}
                </option>
              ))}{" "}
            </select>{" "}
          </div>{" "}
          <div className="">
            {" "}
            <h3>Product Price</h3>{" "}
            <input
              type="text"
              name="price"
              id=""
              onChange={onChangeHandler}
              value={data.price}
              className="w-32"
            />{" "}
          </div>{" "}
        </div>{" "}
        <button className="px-9 py-2 bg-black mt-3 text-white">ADD</button>{" "}
      </form>{" "}
    </div>
  );
};
export default Additems;
