"use client";
import { useState } from "react";
import Image from "next/image";
import FormTabNav from "./form/FormTabNav";
import GradesSection from "./form/GradesSection";
import EnrollmentStatusSection from "./form/EnrollmentStatusSection";
import AcknowledgmentSection from "./form/AcknowledgmentSection";
import GrayLine from "./form/GrayLine";
import Modal from "./Modal";

const CalebMeliusForm = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const [isAcknowledged, setIsAcknowledged] = useState(false);
  const [gradesSectionValues, setGradesSectionValues] = useState<{
    selectedCurrentGrade: string;
    selectedApplyGrade: string;
  }>({
    selectedCurrentGrade: "",
    selectedApplyGrade: "",
  });
  const [enrollmendStatuses, setEnrollmendStatuses] = useState<{
    selectedStatus: string;
    selectedSchool: string;
  }>({
    selectedStatus: "",
    selectedSchool: "",
  });

  // validation
  const [selectedCurrentGradeErr, setSelectedCurrentGradeErr] =
    useState<boolean>(false);
  const [selectedApplyGradeErr, setSelectedApplyGradeErr] =
    useState<boolean>(false);
  const [selectedStatusErr, setSelectedStatusErr] = useState<boolean>(false);
  const [selectedSchoolErr, setSelectedSchoolErr] = useState<boolean>(false);
  const [isAcknowledgedErr, setIsAcknowledgedErr] = useState<boolean>(false);

  const handleAcknowledgmentChange = (isChecked: boolean) => {
    setIsAcknowledged(isChecked);
  };

  const handleEnrollmentStatusUpdate = (values: {
    selectedStatus: string;
    selectedSchool: string;
  }) => {
    setEnrollmendStatuses(values);
  };

  const handleGradesUpdate = (values: {
    selectedCurrentGrade: string;
    selectedApplyGrade: string;
  }) => {
    setGradesSectionValues(values);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let hasErrors = false;
    const errors: {
      selectedCurrentGrade: boolean;
      selectedApplyGrade: boolean;
      selectedStatus: boolean;
      selectedSchool: boolean;
      isAcknowledged: boolean;
    } = {
      selectedCurrentGrade: false,
      selectedApplyGrade: false,
      selectedStatus: false,
      selectedSchool: false,
      isAcknowledged: false,
    };

    if (!gradesSectionValues.selectedCurrentGrade) {
      errors.selectedCurrentGrade = true;
      hasErrors = true;
    }
    if (!gradesSectionValues.selectedApplyGrade) {
      errors.selectedApplyGrade = true;
      hasErrors = true;
    }
    if (!enrollmendStatuses.selectedStatus) {
      errors.selectedStatus = true;
      hasErrors = true;
    }
    if (!enrollmendStatuses.selectedSchool) {
      errors.selectedSchool = true;
      hasErrors = true;
    }
    if (!isAcknowledged) {
      errors.isAcknowledged = true;
      hasErrors = true;
    }

    setSelectedCurrentGradeErr(errors.selectedCurrentGrade);
    setSelectedApplyGradeErr(errors.selectedApplyGrade);
    setSelectedStatusErr(errors.selectedStatus);
    setSelectedSchoolErr(errors.selectedSchool);
    setIsAcknowledgedErr(errors.isAcknowledged);

    if (!hasErrors) {
      setModalOpen(true);
    }
  };

  return (
    <>
      <form className="mt-[120px] flex flex-col gap-12 p-4 mb-64 max-w-[796px] mx-auto">
        <p className="flex gap-1 w-max cursor-pointer text-primary-blue font-bold">
          <Image src="/left.svg" alt="Left" width={20} height={20} />
          Back
        </p>
        <h1 className=" text-dark-blue text-title">Caleb Melius</h1>
        <FormTabNav />
        <GradesSection
          onUpdateFormValues={handleGradesUpdate}
          selectedCurrentGradeErr={selectedCurrentGradeErr}
          selectedApplyGradeErr={selectedApplyGradeErr}
        />
        <EnrollmentStatusSection
          onUpdateFormValues={handleEnrollmentStatusUpdate}
          currentGrade={gradesSectionValues.selectedCurrentGrade}
          selectedStatusErr={selectedStatusErr}
          selectedSchoolErr={selectedSchoolErr}
        />
        <AcknowledgmentSection
          onAcknowledgmentChange={handleAcknowledgmentChange}
          isAcknowledgedErr={isAcknowledgedErr}
        />
        <GrayLine />
        <button
          type="button"
          className="bg-primary-blue px-8 py-4 w-full h-14 rounded-md cursor-pointer"
          onClick={handleButtonClick}
        >
          Save
        </button>
      </form>
      <div>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <h1 className="text-xl font-bold mb-4">This is a modal window</h1>
          <p className="text-gray-700">You can place any content here.</p>
        </Modal>
      </div>
    </>
  );
};

export default CalebMeliusForm;
