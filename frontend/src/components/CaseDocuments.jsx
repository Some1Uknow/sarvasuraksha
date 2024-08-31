import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import GoBack from "../constants/GoBack";
Modal.setAppElement("#root");

const CaseDocuments = () => {
  const { id } = useParams();
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "Affidavit.pdf",
      hash: "0x1234...5678",
      description: "Legal affidavit related to the case.",
      logs: [
        {
          id: 1,
          action: "Uploaded",
          time: "2023-05-01 12:00",
          description: "Initial upload of affidavit.",
          changes: "Full document upload",
        },
        {
          id: 2,
          action: "Viewed by Judge",
          time: "2023-05-03 14:20",
          description: "Document reviewed by the judge.",
          changes: "No changes made",
        },
      ],
    },
    {
      id: 2,
      name: "Evidence_A.jpg",
      hash: "0xabcd...efgh",
      description: "Image evidence from the crime scene.",
      logs: [
        {
          id: 1,
          action: "Uploaded",
          time: "2023-05-02 09:30",
          description: "Initial upload of evidence.",
          changes: "Original image file",
        },
        {
          id: 2,
          action: "Modified",
          time: "2023-05-04 16:45",
          description: "Enhanced image for clarity.",
          changes: "Brightness and contrast adjustments",
        },
      ],
    },
    {
      id: 3,
      name: "Witness_Statement.txt",
      hash: "0x9abc...def0",
      description: "Written statement from a witness in the case.",
      logs: [
        {
          id: 1,
          action: "Uploaded",
          time: "2023-06-01 10:15",
          description: "Initial upload of witness statement.",
          changes: "Full statement uploaded",
        },
      ],
    },
    {
      id: 4,
      name: "Medical_Report.pdf",
      hash: "0x1a2b...3c4d",
      description: "Medical report relevant to the case.",
      logs: [
        {
          id: 1,
          action: "Uploaded",
          time: "2023-06-05 11:00",
          description: "Uploaded medical report.",
          changes: "Full report included",
        },
      ],
    },
    {
      id: 5,
      name: "Video_Evidence.mp4",
      hash: "0x4567...89ab",
      description: "Video footage related to the incident.",
      logs: [
        {
          id: 1,
          action: "Uploaded",
          time: "2023-06-10 14:20",
          description: "Uploaded video evidence.",
          changes: "Original footage uploaded",
        },
      ],
    },
    {
      id: 6,
      name: "Police_Report.docx",
      hash: "0xabcdef1234",
      description: "Official police report regarding the case.",
      logs: [
        {
          id: 1,
          action: "Uploaded",
          time: "2023-06-12 09:45",
          description: "Initial upload of police report.",
          changes: "Complete report uploaded",
        },
      ],
    },
  ]);

  const [uploadedFile, setUploadedFile] = useState(null);

  const openPreviewModal = (doc) => {
    setSelectedDoc(doc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showDocumentInfo = (doc) => {
    setSelectedDoc(doc);
  };

  const handleFileUpload = (e) => {
    // ... (keep the existing file upload logic)
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto flex items-center py-6 px-4 sm:px-6 lg:px-8">
          <GoBack />
          <h1 className="text-3xl font-bold text-gray-900">Case Documents</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 pr-4 mb-6 lg:mb-0">
              <h2 className="text-xl font-semibold mb-4">Documents</h2>
              <input
                type="file"
                onChange={handleFileUpload}
                className="mb-4 border border-gray-300 p-2 rounded w-full"
              />
              <ul className="space-y-2">
                {documents.map((doc) => (
                  <li
                    key={doc.id}
                    className="flex items-center justify-between p-2 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-50"
                  >
                    <span
                      className="cursor-pointer hover:underline"
                      onClick={() => openPreviewModal(doc)}
                    >
                      {doc.name}
                    </span>
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => showDocumentInfo(doc)}
                    >
                      Info
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-2/3 pl-4">
              {selectedDoc && (
                <div className="p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">
                    {selectedDoc.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    IPFS Hash: {selectedDoc.hash}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Description: {selectedDoc.description}
                  </p>
                  <div className="bg-gray-200 rounded-md p-2">
                    <h4 className="font-medium mb-2">Document Logs:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {selectedDoc.logs.map((log) => (
                        <li key={log.id} className="text-sm text-gray-600">
                          <p>
                            <strong>{log.action}</strong> on {log.time}
                          </p>
                          <p>{log.description}</p>
                          <p>
                            <em>Changes: {log.changes}</em>
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Modal for Document Preview */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Document Preview"
        className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
      >
        <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
          <div className="mt-3 text-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Document Preview: {selectedDoc?.name}
            </h3>
            <div className="mt-2 px-7 py-3">
              {/* Add actual preview logic here based on file type */}
              <p className="text-gray-500 italic">
                (Preview functionality would be implemented here based on file
                type)
              </p>
            </div>
            <div className="items-center px-4 py-3">
              <button
                className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CaseDocuments;
