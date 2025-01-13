import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import axios from "axios";
import toast from "react-hot-toast";

const AddItem = () => {
  const useAxios = useAxiosSecure();
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const imagePath = { image: data.image[0] };
    const res = await axios
      .post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_imgbbApiKey
        }`,
        imagePath,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      )
      // .then((res) => console.log(res.data))
      .catch((error) => toast.error(error.message));
    // console.log(data);
    // console.log(res.data.display_url);
  };

  return (
    <>
      <section className="main-container p-12 bg-base-100 rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="form-control w-full col-span-2">
              <div className="label">
                <span className="label-text">Recipe Name</span>
              </div>
              <input
                type="text"
                placeholder="Recipe Name"
                {...register("name")}
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <select
                className="select select-bordered w-full"
                {...register("category")}
              >
                <option disabled selected>
                  Select Category
                </option>
                <option>Salad</option>
                <option>Drinks</option>
                <option>Popular</option>
                <option>Dessert</option>
                <option>Pizza</option>
                <option>Soup</option>
              </select>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                type="text"
                placeholder="eg. 150"
                {...register("price")}
                className="input input-bordered w-full"
              />
            </label>

            <label className="form-control col-span-2">
              <div className="label">
                <span className="label-text">Recipe Details</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="type here..."
                {...register("recipe")}
              ></textarea>
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Pick a file</span>
              </div>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
                {...register("image")}
              />
            </label>
          </div>

          <input className="primary-btn mt-12" type="submit" />
        </form>
      </section>
    </>
  );
};

export default AddItem;
