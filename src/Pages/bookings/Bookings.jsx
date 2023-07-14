import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import img from '../../assets/images/checkout/checkout.png';
import Bookingsrow from "./Bookingsrow";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const {user} = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const [book, setBook] = useState([]);
  const navigate = useNavigate();

  useEffect( () =>{
    fetch(url,{
      method: 'GET',
      headers:{
        authorization: `Bearer ${localStorage.getItem('car-doctor-access')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      if(!data.error){
        setBook(data)
      }
      else{
        navigate('/')
      }
    })
  },[url,navigate])

  const hadleDelete = id =>{
    const proceed = confirm('Are you sure to want delete');
    if(proceed){
      fetch(`http://localhost:5000/bookings/${id}`,{
        method:'DELETE'
      })
      .then(res =>res.json())
      .then(data =>{
        console.log(data)
        if(data.deletedCount>0){
          alert('deleted successfully');
          const remaining = book.filter(bk=> bk._id !==id)
          setBook(remaining);
        }
      })
    }
  }

  const handleUpdateConfirm = id =>{
    fetch(`http://localhost:5000/bookings/${id}`,{
      method:'PATCH',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify({status: 'confirm'})
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      if(data.modifiedCount>0){
        // updated status
        const remaining = book.filter(booking => booking._id !== id )
        const update = book.find(booking => booking._id === id )
        update.status = 'confirm'
        const newBookings = [update, ...remaining]
        setBook(newBookings);
      }
    } )
  }

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
       booking={booking}
       hadleDelete={hadleDelete}
       handleUpdateConfirm = {handleUpdateConfirm}
       ></Bookingsrow>)
      }
     
     
    </tbody>
   
    
  </table>
</div>

    </div>
  );
};

export default Bookings;