"use client";
import { useState, useEffect } from "react";

interface AcknowledgmentSectionProps {
  onAcknowledgmentChange: (isChecked: boolean) => void;
  isAcknowledgedErr: boolean;
}

const AcknowledgmentSection = ({
  onAcknowledgmentChange,
  isAcknowledgedErr,
}: AcknowledgmentSectionProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    setIsError(false);
    onAcknowledgmentChange(newCheckedState);
  };

  useEffect(() => {
    if (isAcknowledgedErr) {
      if (!isChecked) setIsError(true);
    }
  }, [isChecked]);

  return (
    <div className="flex flex-col gap-6 w-full p-4 md:p-0">
      <h1 className="text-dark-blue text-subTitle">Acknowledgment</h1>
      <div className="text-dark-blue">
        Please review the following points for legal acknowledgement:
        <div className="mt-2"></div>
        <ul className="list-disc list-inside pl-5 md:pl-0">
          <li className="py-1">
            I am the acting legal guardian of this student.
          </li>
          <li className="py-1">
            I have entered all information accurately and to the best of my
            ability.
          </li>
          <li className="py-1">
            I understand that submitting falsified information will disqualify
            my application.
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-1">
        <div
          className="flex items-center gap-2 cursor-pointer w-full md:w-max"
          onClick={handleCheckboxChange}
        >
          <input
            className={`cursor-pointer ${
              isChecked
                ? "border-1 border-secondary-blue bg-secondary-blue"
                : "border-1 bg-transparent"
            } rounded-md w-6 h-6}`}
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="text-dark-blue text-sm md:text-base">
            By checking this box, I acknowledge the above statements as true
          </p>
        </div>
        {isAcknowledgedErr && !isChecked && (
          <p className="text-status-error">
            Check this box if you want to proceed.
          </p>
        )}
      </div>
    </div>
  );
};

export default AcknowledgmentSection;
