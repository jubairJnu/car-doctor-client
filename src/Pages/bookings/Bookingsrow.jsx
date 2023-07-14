

const Bookingsrow = ({ booking,hadleDelete,handleUpdateConfirm }) => {
  const { _id, email, services_name, img, date, status } = booking;



  return (
    <tr>
      <th>
      <button onClick={()=>hadleDelete(_id)} className="btn btn-circle btn-outline btn-sm">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <p>{services_name}</p>
          </div>
        </div>

      </td>

      <td>
        <p>{email}</p>
      </td>
      <td>{date}</td>
      <th>
        {
          status === 'confirm'? <span className="text-bold text-primary">Confirmed</span> :
          <button onClick={()=> handleUpdateConfirm(_id)} className="btn btn-ghost btn-xs">Please confirm</button>}
      </th>
    </tr>
  );
};

export default Bookingsrow;