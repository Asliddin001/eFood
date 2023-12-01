export const Button = ({
  icon = "",
  children,
  isActive,
  id,
  changeListsHandler,
}) => {
  const setClass = () => {
    if (isActive === null) {
      return "flex items-center gap-[8px] bg-orange rounded-[8px] py-[14px] px-[28px] text-white cursor-pointer bxSh rounded-[30px]  rounded-br-none";
    } else if (isActive) {
      return "flex items-center gap-[8px] bg-orange rounded-[8px] py-[14px] px-[28px] text-white cursor-pointer bxSh";
    } else {
      return "flex items-center gap-[8px] bg-white rounded-[8px] py-[14px] px-[28px] text-black cursor-pointer ";
    }
  };

  return (
    <div className={setClass()} onClick={() => changeListsHandler(id)}>
      <span>{icon}</span>
      <button>{children}</button>
    </div>
  );
};
