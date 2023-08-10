"use client";
import { useState } from "react";
import Image from "next/image";

interface DropdownProps {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
  hasError: boolean;
}

const Dropdown = ({
  options,
  selectedOption,
  onSelect,
  hasError,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className=" w-full">
      <button
        type="button"
        onClick={toggleDropdown}
        className={`w-full p-4 border text-gray-primary border-gray-secondary flex justify-between items-center hover:bg-status-hover
  focus:border-status-active focus:border-2 active:border-status-active active:border-2 ${
    hasError && selectedOption === "" ? "border-2 border-status-error" : ""
  } ${isOpen ? "rounded-tl-lg rounded-tr-lg" : "rounded-lg"}`}
      >
        {selectedOption ? selectedOption : "Make a selection"}
        <div className="flex items-center justify-center gap-1">
          <Image src="/star.svg" alt="Star" width={16} height={16} />
          <Image
            src={`/${isOpen ? "up.svg" : "down.svg"}`}
            alt="Dropdown Arrow"
            width={24}
            height={24}
          />
        </div>
      </button>
      <div style={{ position: "relative" }}>
        {isOpen && (
          <ul className="relative top-full left-0 w-full bg-white border border-gray-secondary rounded-bl-lg rounded-br-lg">
            {options.map((option: string, index: number) => (
              <li
                key={index}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                  selectedOption === option
                    ? "font-bold flex justify-between"
                    : ""
                } text-gray-primary`}
                onClick={() => {
                  handleOptionSelect(option);
                }}
              >
                {option}
                {selectedOption === option && (
                  <div className="h-6 w-6 bg-primary-blue text-white rounded-full flex items-center justify-center">
                    <Image
                      src="/checkmark.svg"
                      alt="Checkmark"
                      width={16}
                      height={16}
                      className="text-white"
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
