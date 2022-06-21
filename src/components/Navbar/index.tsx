import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('')

  const routes = [
    "home",
    "pages",
    "products",
    "shop",
    "cart",
    "contact",
    "about",
  ];
  return (
    <div className="flex justify-between items-center h-20 container px-44 " >
      <div className="flex justify-between gap-20">
        <span className="text-3xl text-[#0D0E43] font-bold">SARGIN</span>
        <div className="flex gap-x-9">
          {routes?.map((item: string) => (
            <nav
              key={item}
              className={`flex items-center cursor-pointer capitalize hover:text-pink-600 ${selectedTab === item ? 'text-pink-600' : ''} gap-1 `}
              onClick={() => {
                setSelectedTab(item)
                navigate(item === "home" ? "/" : item)
              }}
            >
              {item}
              {selectedTab === item ? (<AiOutlineDown />) : ''}
            </nav>
          ))}
        </div>
      </div>
      <div className="flex flex-row">
        <input
          type="text"
          placeholder="search"
          className="outline-none border-gray-300 border-2 py-1 px-3"
        />
        <div className="h-10 w-10 bg-pink-600 flex items-center justify-center">
          <FiSearch color="#fff" size={20} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
