import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { Button } from "../../../common/button/Button";

export const Navbar = () => {
  return (
    <div className="my-[55px] flex justify-between items-center text-[18px]">
      <div className="font-bold text-[25px]">
        <span className="text-orange">E</span>
        <span>Food</span>
      </div>
      <div className="flex justify-between items-center gap-[60px]">
        <ul className="flex justify-between items-center gap-[60px]">
          <li className="cursor-pointer hover:text-orange transition">Home</li>
          <li className="cursor-pointer hover:text-orange transition">
            Service
          </li>
          <li className="cursor-pointer hover:text-orange transition">
            Top cites
          </li>
          <li className="cursor-pointer hover:text-orange transition">
            Contract
          </li>
        </ul>
        <div className="flex justify-center items-center gap-[60px]">
          <CiSearch size={"25px"} />
          <div className="relative">
            <span className="bg-orange text-white flex justify-center items-center absolute -top-[10px] -right-[10px] rounded-full w-[20px] h-[20px] text-[12px] leading-[200%]">
              3
            </span>
            <BsCart3 size={"25px"} />
          </div>
          <Button isActive={true}>Sing up</Button>
        </div>
      </div>
    </div>
  );
};
