import delivery from "/mock-imges/img/delivery.png";
import circle_orange from "/mock-imges/icons/circle-orange.svg";
import circle_red from "/mock-imges/icons/circle-red.svg";
import circle_blue from "/mock-imges/icons/cirlce-blue.svg";
import orange_watch from "/mock-imges/icons/orange-watch.svg";
import blue_bike from "/mock-imges/icons/blue-bike.svg";
import red_shop from "/mock-imges/icons/red-shop.svg";
import { Button } from "../../../common/button/Button";

export const Delivery = () => {
  return (
    <>
      <div className="dfrowc capitalize">
        <div className="img">
          <img src={delivery} alt="delivery img" />
        </div>
        <div className="dfcol gap-[14px]">
          <div className="text">
            {" "}
            <h1 className="text-black text-[36px] font-medium leading-[50px]">
              <span className="text-orange">Stay</span> at home, we will Provide{" "}
              <span className="text-orange">good food</span>
            </h1>
            <p>
              We provide tasty food and superfast delivery at your home. Let’s
              use our services right now and get discounts of up to 50%.
            </p>
          </div>
          <div className="dfcol gap-[25px]">
            <span className=" relative">
              <img src={orange_watch} alt="orange watch" className="absolute" />
              <img
                src={circle_orange}
                alt="circle ornange"
                className="absolute ml-[12px]"
              />
              <p className="inline-block ml-[50px] text-black text-[24px] leading-[30px] ">
                fasted delivery in 30 Minutes
              </p>
            </span>
            <span className=" relative">
              <img src={blue_bike} alt="orange watch" className="absolute" />
              <img
                src={circle_blue}
                alt="circle ornange"
                className="absolute ml-[12px]"
              />
              <p className="inline-block ml-[50px] text-black text-[24px] leading-[30px] ">
                300+ delivery men
              </p>
            </span>
            <span className=" relative">
              <img src={red_shop} alt="orange watch" className="absolute" />
              <img
                src={circle_red}
                alt="circle ornange"
                className="absolute ml-[12px]"
              />
              <p className="inline-block ml-[50px] text-black text-[24px] leading-[30px] ">
                500+ restaurant & cafe shop
              </p>
            </span>
            <div className="dfcol items-start">
              <Button isActive={null}>See more</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
