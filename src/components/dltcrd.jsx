import Data from "./userdata"
function DtlCrd(){

    const applicants = Data;


    return(<>
        {applicants.map(function(data) {
          return (
            <div>
            <div className='card'>
    <div className='left1'>
               <h5 className="blue">  {data.oderId}</h5>
               <h5> {data.orderDate}</h5>
           </div>
   <div className='right1'>
               <h5>{data.amount}</h5>
               <h5>{data.fee}</h5>
       </div>
</div> 
            </div>
          )
        })}
        </>)
}

export default DtlCrd;


{/* */}