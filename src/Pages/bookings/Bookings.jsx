import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import img from '../../assets/images/checkout/checkout.png';
import Bookingsrow from "./Bookingsrow";

const Bookings = () => {
  const {user} = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const [book, setBook] = useState([]);

  useEffect( () =>{
    fetch(url)
    .then(res => res.json())
    .then(data => setBook(data))
  },[])
  return (
    <div>
      <img className="mx-auto" src={img} alt="" />
      <h1 className="text-3xl font-bold text-center my-6">Your Booking:{book.length} </h1>


      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
       
        <th>Service</th>
        <th>Email</th>
        <th>Date</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        book.map(booking => <Bookingsrow
       key={booking._id}
       booking={booking}></Bookingsrow>)
      }
     
     
    </tbody>
   
    
  </table>
</div>

    </div>
  );
};

export default Bookings;