
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <aside className="border-r-2 flex flex-col">
      <div className="items-admin flex flex-col gap-1 items-center sm:mt-7">
        <Link to="/additems" className="">
        <i className="fa-solid fa-plus"></i>
          <span>Add items</span>
        </Link>
        <Link to="items">
          <i className="fa-solid fa-list"></i>
          <span>List items</span> 
        </Link>
        <Link to="orders">
          <i className="fa-solid fa-list-check"></i><span>Orders</span> 
        </Link>
      </div>
    </aside>
  );
};
export default Sidebar;
