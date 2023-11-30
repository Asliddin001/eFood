import { Button } from "../../../common/button/Button";
import { PiHamburger } from "react-icons/pi";
import { GiFullPizza, GiHamburger } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";
import { SiBurgerking } from "react-icons/si";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const menuIconSize = 30;
const slideIconSize = 100;
const menus = [
  {
    id: "m1",
    icon: <PiHamburger size={menuIconSize} />,
    title: "Burger",
    isActive: true,
  },
  {
    id: "m2",
    icon: <GiFullPizza size={menuIconSize} />,
    title: "Pizza",
    isActive: false,
  },
  {
    id: "m3",
    icon: <PiHamburger size={menuIconSize} />,
    title: "Sindwich",
    isActive: false,
  },
  {
    id: "m4",
    icon: <PiHamburger size={menuIconSize} />,
    title: "Asian Food",
    isActive: false,
  },
  {
    id: "m5",
    icon: <PiHamburger size={menuIconSize} />,
    title: "Set menu",
    isActive: false,
  },
];
const slideData = [
  {
    id: "mgb1",
    title: "Cheeseburger With Salad",
    icon: <GiFullPizza size={slideIconSize} />,
    price: "$38.00",
  },
  {
    id: "mgb2",
    title: "Beef Burger",
    icon: <FaHamburger size={slideIconSize} />,
    price: "$38.00",
  },
  {
    id: "mgb3",
    title: "Royel Cheeseburger",
    icon: <FaHamburger size={slideIconSize} />,
    price: "$38.00",
  },
  {
    id: "mgb4",
    title: "Black Gambugrer",
    icon: <GiHamburger size={slideIconSize} />,
    price: "$38.00",
  },
  {
    id: "mgb5",
    title: "Chicken Burger",
    icon: <SiBurgerking size={slideIconSize} />,
    price: "$38.00",
  },
  {
    id: "mgb6",
    title: "Cheeseburger With Salad",
    icon: <FaHamburger size={slideIconSize} />,
    price: "$38.00",
  },
  {
    id: "mgb7",
    title: "Cheeseburger With Salad",
    icon: <GiFullPizza size={slideIconSize} />,
    price: "$38.00",
  },
];

export const Our = () => {
  const [lists, setLists] = useState(menus);

  const changeListsHandler = (id) => {
    setLists((prevLists) =>
      prevLists.map((list) => ({
        ...list,
        isActive: list.id === id,
      }))
    );
  };

  return (
    <div className="">
      <h2 className="text-center text-black text-[36px] font-medium capitalize mb-[55px]">
        Our popular <span className="text-orange">Category</span>
      </h2>
      <div className="flex justify-around items-center text-[20px] ">
        {lists.map((list) => (
          <Button
            key={list.id}
            icon={list.icon}
            isActive={list.isActive}
            id={list.id}
            changeListsHandler={() => changeListsHandler(list.id)}>
            {list.title}
          </Button>
        ))}
      </div>
      <div className="my-[50px] text-center">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          slidesPerView={5}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper w-full h-[354px]">
          {slideData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="dfcolc gap-[10px] ml-[30px] bg-white rounded-[12px] px-[16px] py-[22px]">
                <div className="icons">{slide.icon}</div>
                <div className="title mt-[25px]">
                  <p className="text-[15px] text-black mb-[9px]">
                    {slide.title}
                  </p>
                  <span className="mb-[9px]">{slide.price}</span>
                </div>
                <Button isActive={true}>Add to Cart</Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <SwiperSlide>
            <div className="flex flex-col items-center gap-[10px] bg-white rounded-[12px] px-[16px] py-[22px]">
              <div className="icons">
                <GiFullPizza size={"100px"} />
              </div>
              <div className="title mt-[25px]">
                <p className="text-[15px] text-black mb-[9px]">
                  Cheeseburger With Salad
                </p>
                <span className="mb-[9px]">$18.00</span>
              </div>
              <Button isActive={true}>Add to Cart</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col items-center gap-[10px]">
              <div className="flex flex-col items-center gap-[10px]">
                <div className="icons">
                  <GiFullPizza size={"100px"} />
                </div>
                <div className="c">
                  <p>Cheeseburger With Salad</p>
                  <span>$18.00</span>
                </div>
                <Button isActive={true}>Add to Cart</Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col items-center gap-[10px]">
              <div className="flex flex-col items-center gap-[10px]">
                <div className="icons">
                  <GiFullPizza size={"100px"} />
                </div>
                <div className="c">
                  <p>Cheeseburger With Salad</p>
                  <span>$18.00</span>
                </div>
                <Button isActive={true}>Add to Cart</Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center gap-[10px]">
              <div className="icons">
                <GiFullPizza size={"100px"} />
              </div>
              <div className="c">
                <p>Cheeseburger With Salad</p>
                <span>$18.00</span>
              </div>
              <Button isActive={true}>Add to Cart</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center gap-[10px]">
              <div className="icons">
                <GiFullPizza size={"100px"} />
              </div>
              <div className="c">
                <p>Cheeseburger With Salad</p>
                <span>$18.00</span>
              </div>
              <Button isActive={true}>Add to Cart</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center gap-[10px]">
              <div className="icons">
                <GiFullPizza size={"100px"} />
              </div>
              <div className="c">
                <p>Cheeseburger With Salad</p>
                <span>$18.00</span>
              </div>
              <Button isActive={true}>Add to Cart</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center gap-[10px]">
              <div className="icons">
                <GiFullPizza size={"100px"} />
              </div>
              <div className="c">
                <p>Cheeseburger With Salad</p>
                <span>$18.00</span>
              </div>
              <Button isActive={true}>Add to Cart</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center gap-[10px]">
              <div className="icons">
                <GiFullPizza size={"100px"} />
              </div>
              <div className="c">
                <p>Cheeseburger With Salad</p>
                <span>$18.00</span>
              </div>
              <Button isActive={true}>Add to Cart</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide> */}
        {/* </SwiperSlide> */}
        {/* </Swiper> */}
      </div>
    </div>
  );
};
