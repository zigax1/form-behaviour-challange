import Image from "next/image";

const Footer = () => {
  return (
    <div className="max-w-full md:max-w-[1440px] mx-auto text-white">
      <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-6">
        <Image
          src="/logo2.svg"
          alt="Logo Footer"
          width={186}
          height={24}
          className="cursor-pointer mb-4 md:mb-0"
        />
        <div className="text-white text-xs md:text-sm flex flex-col md:flex-row gap-2 md:gap-4">
          <p className="cursor-pointer">Help</p>
          <p className="cursor-pointer">Contact</p>
          <p className="cursor-pointer">School Directory</p>
          <p className="cursor-pointer">About EnrollWise</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
