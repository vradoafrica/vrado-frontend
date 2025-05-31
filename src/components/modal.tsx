interface ModalProps {
    show: boolean;
    onClose: () => void;
    title?: string;
    message?: string;
  }
  
  const Modal: React.FC<ModalProps> = ({ show, onClose, title = "Action Completed", message = "Your changes have been saved successfully." }) => {
    if (!show) return null;
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-lg font-semibold mb-4">{title}</h2>
          <p className="text-sm text-gray-600 mb-4">{message}</p>
          <div className="flex w-full justify-between">
         
          <button onClick={onClose} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Proceed</button>

          <button onClick={onClose} className="px-4 py-2 border border-blue-600 text-blue rounded hover:bg-blue-700">Close</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;