const ReastaurantCard=({data,isAdmin,onDelete,onUpdate})=>
{
    return (
        <div style={{border:"1px solid black",padding:10}}> 
            <img src={data.image} width="150"/>
            <h3>{data.restaurantName}</h3>
            <p>{data.address}</p>
            <p>{data.type}</p>
            <p>{data.parkingLot?"Parking Available": "No parking"}</p>
            {isAdmin&&(<>
            <button onClick ={()=> onUpdate(data)}>Update</button>
            <button onClick ={()=> onDelete(data.RestaurantId)}>Delete</button>
            </>
        )}
        </div>
    )
}
export default ReastaurantCard;