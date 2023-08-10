"use client";
import { useState, useEffect } from "react";
import DropdownComponent from "./DropdownComponent";

interface GradesSectionProps {
  onUpdateFormValues: (values: {
    selectedCurrentGrade: string;
    selectedApplyGrade: string;
  }) => void;
  selectedCurrentGradeErr: boolean;
  selectedApplyGradeErr: boolean;
}

const GradesSection = ({
  onUpdateFormValues,
  selectedCurrentGradeErr,
  selectedApplyGradeErr,
}: GradesSectionProps) => {
  const allOptions = [
    "1st Grade",
    "2nd Grade",
    "3rd Grade",
    "4rd Grade",
    "5rd Grade",
    "6rd Grade",
    "7rd Grade",
    "8rd Grade",
    "9rd Grade",
    "10rd Grade",
    "11rd Grade",
    "12rd Grade",
  ];

  const [selectedCurrentGrade, setSelectedCurrentGrade] = useState<string>("");
  const [selectedApplyGrade, setSelectedApplyGrade] = useState<string>("");

  const filteredOptions = selectedCurrentGrade
    ? allOptions.filter(
        (option) =>
          allOptions.indexOf(option) > allOptions.indexOf(selectedCurrentGrade)
      )
    : allOptions;

  const onSelectCurentGrade = (currentGrade: string) => {
    setSelectedCurrentGrade(currentGrade);
    onUpdateFormValues({
      selectedCurrentGrade: currentGrade,
      selectedApplyGrade,
    });
  };

  const onSelectApplyGrade = (applyGrade: string) => {
    setSelectedApplyGrade(applyGrade);
    onUpdateFormValues({
      selectedCurrentGrade,
      selectedApplyGrade: applyGrade,
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-dark-blue text-subTitle">Grades</h1>
      <div className="flex flex-col gap-1">
        <p className="text-dark-blue">Current grade</p>
        <DropdownComponent
          options={allOptions}
          onSelect={onSelectCurentGrade}
          selectedOption={selectedCurrentGrade}
          hasError={selectedCurrentGradeErr}
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-dark-blue">Applying to</p>
        <DropdownComponent
          options={filteredOptions}
          onSelect={onSelectApplyGrade}
          selectedOption={selectedApplyGrade}
          hasError={selectedApplyGradeErr}
        />
      </div>
    </div>
  );
};

export default GradesSection;
