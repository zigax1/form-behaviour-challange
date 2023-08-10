import Image from "next/image";

const Header = () => {
  return (
    <div className="border-b-[#E0E0E0] shadow-md bg-white z-60">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center py-7">
        <div className="mb-4 md:mb-0 flex items-center justify-center md:justify-start">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={186}
            height={24}
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-sm font-bold text-center">
          <div className="px-3 md:px-7 flex items-center gap-2 text-dark-blue cursor-pointer">
            <Image src="/help.svg" alt="Help" width={16} height={16} />
            Help
            <Image src="/down.svg" alt="Down" width={20} height={20} />
          </div>
          <div className="px-3 md:px-7 flex items-center gap-2 text-dark-blue cursor-pointer">
            <Image
              src="/translate.svg"
              alt="Translate"
              width={16}
              height={16}
            />
            Language <Image src="/down.svg" alt="Down" width={20} height={20} />
          </div>
          <div className="px-3 md:px-7 flex items-center gap-2 text-dark-blue cursor-pointer">
            <Image src="/home.svg" alt="Home" width={16} height={16} />
            My Account
            <Image src="/down.svg" alt="Down" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
