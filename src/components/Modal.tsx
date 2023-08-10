import Image from "next/image";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg w-3/4 md:w-1/2 relative">
        <div className="flex justify-between items-center border-b border-gray-300 px-16 py-10">
          <h1 className="text-dark-blue text-title">Confirm this action</h1>
          <button
            onClick={onClose}
            className="bg-primary-blue rounded-lg w-8 h-8 flex justify-center  items-center bg-secondary-blue text-white"
          >
            <Image src="/cross.svg" alt="Close" width={10} height={10} />
          </button>
        </div>
        <div className="px-16 py-10">
          <p className="mb-4 text-dark-blue font-bold">
            Changing your student’s current or applying grades affects their
            eligbility and will automatically cancel any applications in
            progress. Are you sure you want to do this?
          </p>
          <div className="flex justify-between gap-4">
            <button
              onClick={onClose}
              className="w-full border-2 border-gray-secondary  text-primary-blue rounded-lg px-4 py-2"
            >
              Cancel
            </button>
            <button
              onClick={onClose}
              className="w-full bg-primary-blue text-white rounded-lg px-4 py-2"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
