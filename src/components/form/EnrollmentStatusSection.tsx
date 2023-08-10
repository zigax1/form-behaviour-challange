"use client";
import { useEffect, useState } from "react";
import DropdownComponent from "./DropdownComponent";

interface EnrollmentStatusSectionProps {
  currentGrade: string;
  onUpdateFormValues: (values: {
    selectedStatus: string;
    selectedSchool: string;
  }) => void;
  selectedStatusErr: boolean;
  selectedSchoolErr: boolean;
}

const EnrollmentStatusSection = ({
  currentGrade,
  onUpdateFormValues,
  selectedStatusErr,
  selectedSchoolErr,
}: EnrollmentStatusSectionProps) => {
  const enrollmendStatuses = [
    "Enrolled in a CT School",
    "Homeschooling",
    "Not enrolled in school",
  ];

  const publicSchools = [
    "Harvard University",
    "MIT University",
    "School Texas",
    "Santo Domingo University",
  ];

  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [selectedSchool, setSelectedSchool] = useState<string>("");

  const onSelectStatus = (status: string) => {
    setSelectedStatus(status);
    onUpdateFormValues({ selectedStatus: status, selectedSchool });
  };

  const onSelectSchool = (school: string) => {
    setSelectedSchool(school);
    onUpdateFormValues({ selectedStatus, selectedSchool: school });
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-dark-blue text-subTitle">Enrollment Status</h1>
      <div className="flex flex-col gap-1">
        <p className="text-dark-blue">
          Select student’s current enrollment status?
        </p>
        <DropdownComponent
          options={enrollmendStatuses}
          onSelect={onSelectStatus}
          selectedOption={selectedStatus}
          hasError={selectedStatusErr}
        />
      </div>
      {currentGrade && (
        <div className="flex flex-col gap-1">
          <p className="text-dark-blue">
            In which public school is your student currently enrolled?
          </p>
          <DropdownComponent
            options={publicSchools}
            onSelect={onSelectSchool}
            selectedOption={selectedSchool}
            hasError={selectedSchoolErr}
          />
        </div>
      )}
    </div>
  );
};

export default EnrollmentStatusSection;
