/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */


const Dropdown = ({order})=>
{


console.log(order);
    return (
        <ul className="flex justify-center flex-wrap content-center gap-2">
            {
            order.foodsOrder.map((item,index) => {
                console.log(item.name);
                console.log(order.itemsNumber) ;
return ( <li key={index}>{item.name} <b>x</b>{order.itemsNumber}</li>)
               
            })
           
            
            }

        </ul>
    );
}
export default Dropdown;