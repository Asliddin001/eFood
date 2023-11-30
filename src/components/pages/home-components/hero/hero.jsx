import { Button } from "../../../common/button/Button";
import hero from "/mock-imges/img/hero.png";

export const Hero = () => {
  return (
    <>
      <div className="dfrowc justify-between mb-[90px] mt-[100px]">
        <div className="dfcol capitalize gap-[23px]">
          <h1 className="text-black text-[66px] font-medium">
            super fast <span className="text-orange">Food delivery</span>{" "}
            service
          </h1>
          <p className="text-black text-[20px] leading-[30px]">
            We provide super fast-delivery service. Let’s use our services right
            now and get discounts of up to 50%
          </p>
          <div className="dfrowc gap-[30px] items-start mt-[21px]">
            <Button isActive={true}>Explore Food</Button>
            <span className="underline text-black text-[20px] ">Download App</span>
          </div>
        </div>
        <div className="img w-full">
          <img src={hero} alt="hero img" />
        </div>
      </div>
    </>
  );
};
