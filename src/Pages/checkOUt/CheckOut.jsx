import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const CheckOut = () => {
  const loggedservices = useLoaderData();
  const {title, _id, price} = loggedservices;

  const {user} = useContext(AuthContext);

  const handleOrder = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;
    const price = form.price.value;
    const order ={
      customer : name,
      email,
      date,
    price
    }
    console.log(order);
  }

  return (
    <div>
      <h2>book service:{title}</h2>

      <div className="bg-[#b8b7b7] m-10 p-10">
        <form onSubmit={handleOrder}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
            <div className="w-full bord">
              <label className="input-group input-group-sm">

                <input type="text" name="name" placeholder=" Name" className="w-full input input-bordered input-sm" />
              </label>
            </div>
            <div className="form-control">
              <label className="input-group input-group-sm">

                <input type="date" name="date" placeholder="date" className="w-full input input-bordered input-sm" />
              </label>
            </div>
            <div className="form-control">
              <label className="input-group input-group-sm">

                <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="w-full input input-bordered input-sm" />
              </label>
            </div>
            <div className="form-control">
              <label className="input-group input-group-sm">

                <input type="text" placeholder="Due Amount" defaultValue={'$'+price} name="price" className="w-full input input-bordered input-sm" />
              </label>
            </div>

          </div>
          {/* <div className="form-control mt-6">
            <label className="input-group input-group-sm">

              <input type="text" placeholder="Message" className="w-full h-52 input input-bordered input-sm" />
            </label>
          </div> */}
          <button className="btn btn-block btn-primary mt-6">Order Confirm</button>
        </form>
      </div>

    </div>
  );
};

export default CheckOut;