import { assets } from "../assets/assets"
const Navbar = ()=>
{
    return (
        <div className="mx-auto px-3 lg:px-5 mt-7 md:mt-9 xl:px-36">
        <nav className="flex justify-between px-5">
            <div className="logo-admin">
                <img src={assets.logo} alt="" />
                <h3 className="font-bold mt-2 ml-2">Admin panel</h3>
            </div>
            <div className="profile-admin">
                <img src={assets.profile_icon} alt="" />
            </div>
        </nav>
        </div>
    )
}
export default Navbar;