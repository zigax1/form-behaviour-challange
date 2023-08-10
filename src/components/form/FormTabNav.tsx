import GrayLine from "./GrayLine";

const FormTabNav = () => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center lg:justify-start text-center">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-[160px] h-[42px] flex items-center justify-center text-dark-blue cursor-pointer">
          Basic Information
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-[160px] h-[42px] flex items-center justify-center text-dark-blue cursor-pointer">
          Address
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-[160px] h-[42px] flex items-center justify-center text-dark-blue font-bold border-b-2 border-primary-blue cursor-pointer">
          Enrollment Status
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-[160px] h-[42px] flex items-center justify-center text-dark-blue cursor-pointer">
          Documents
        </div>
      </div>
      <GrayLine />
    </div>
  );
};

export default FormTabNav;
