import { Button } from "../../../common/button/Button";
import { PiHamburger } from "react-icons/pi";
import { GiFullPizza } from "react-icons/gi";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const menus = [
  {
    id: "m1",
    icon: <PiHamburger />,
    title: "Burger",
    isActive: true,
  },
  {
    id: "m2",
    icon: <GiFullPizza />,
    title: "Pizza",
    isActive: false,
  },
  {
    id: "m3",
    icon: <PiHamburger />,
    title: "Sindwich",
    isActive: false,
  },
  {
    id: "m4",
    icon: <PiHamburger />,
    title: "Asian Food",
    isActive: false,
  },
  {
    id: "m5",
    icon: <PiHamburger />,
    title: "Set menu",
    isActive: false,
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
      <h2 className="text-center text-black text-[36px] font-medium capitalize">
        Our popular <span className="text-orange">Category</span>
      </h2>
      <div className="flex justify-between items-center ">
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
          className="mySwiper h-[300px]">
          <SwiperSlide>
            <div className="flex flex-col items-center gap-[10px]">
              <GiFullPizza size={"100px"} />
              <p>Cheeseburger With Salad</p>
              <span>$18.00</span>
              <Button isActive={true}>Add to Cart</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col items-center gap-[10px]">
              <GiFullPizza size={"100px"} />
              <p>Cheeseburger With Salad</p>
              <span>$18.00</span>
              <Button isActive={true}>Add to Cart</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col items-center gap-[10px]">
              <GiFullPizza size={"100px"} />
              <p>Cheeseburger With Salad</p>
              <span>$18.00</span>
              <Button isActive={true}>Add to Cart</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col items-center gap-[10px]">
              <GiFullPizza size={"100px"} />
              <p>Cheeseburger With Salad</p>
              <span>$18.00</span>
              <Button isActive={true}>Add to Cart</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col items-center gap-[10px]">
              <GiFullPizza size={"100px"} />
              <p>Cheeseburger With Salad</p>
              <span>$18.00</span>
              <Button isActive={true}>Add to Cart</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col items-center gap-[10px]">
              <GiFullPizza size={"100px"} />
              <p>Cheeseburger With Salad</p>
              <span>$18.00</span>
              <Button isActive={true}>Add to Cart</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col items-center gap-[10px]">
              <GiFullPizza size={"100px"} />
              <p>Cheeseburger With Salad</p>
              <span>$18.00</span>
              <Button isActive={true}>Add to Cart</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col items-center gap-[10px]">
              <GiFullPizza size={"100px"} />
              <p>Cheeseburger With Salad</p>
              <span>$18.00</span>
              <Button isActive={true}>Add to Cart</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col items-center gap-[10px]">
              <GiFullPizza size={"100px"} />
              <p>Cheeseburger With Salad</p>
              <span>$18.00</span>
              <Button isActive={true}>Add to Cart</Button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
