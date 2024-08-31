import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // To avoid accessibility warnings with React Modal

const CaseDocuments = () => {
  const { id } = useParams();
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [logDetails, setLogDetails] = useState(null);
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: 'Affidavit.pdf',
      hash: '0x1234...5678',
      description: 'Legal affidavit related to the case.',
      logs: [
        { 
          id: 1, 
          action: 'Uploaded', 
          time: '2023-05-01 12:00', 
          description: 'Initial upload of affidavit.', 
          changes: 'Full document upload'
        },
        { 
          id: 2, 
          action: 'Viewed by Judge', 
          time: '2023-05-03 14:20', 
          description: 'Document reviewed by the judge.', 
          changes: 'No changes made'
        },
      ],
    },
    {
      id: 2,
      name: 'Evidence_A.jpg',
      hash: '0xabcd...efgh',
      description: 'Image evidence from the crime scene.',
      logs: [
        { 
          id: 1, 
          action: 'Uploaded', 
          time: '2023-05-02 09:30', 
          description: 'Initial upload of evidence.', 
          changes: 'Original image file'
        },
        { 
          id: 2, 
          action: 'Modified', 
          time: '2023-05-04 16:45', 
          description: 'Enhanced image for clarity.', 
          changes: 'Brightness and contrast adjustments'
        },
      ],
    },
    {
      id: 3,
      name: 'Witness_Statement.txt',
      hash: '0x9abc...def0',
      description: 'Written statement from a witness in the case.',
      logs: [
        { 
          id: 1, 
          action: 'Uploaded', 
          time: '2023-06-01 10:15', 
          description: 'Initial upload of witness statement.', 
          changes: 'Full statement uploaded'
        },
      ],
    },
    {
      id: 4,
      name: 'Medical_Report.pdf',
      hash: '0x1a2b...3c4d',
      description: 'Medical report relevant to the case.',
      logs: [
        { 
          id: 1, 
          action: 'Uploaded', 
          time: '2023-06-05 11:00', 
          description: 'Uploaded medical report.', 
          changes: 'Full report included'
        },
      ],
    },
    {
      id: 5,
      name: 'Video_Evidence.mp4',
      hash: '0x4567...89ab',
      description: 'Video footage related to the incident.',
      logs: [
        { 
          id: 1, 
          action: 'Uploaded', 
          time: '2023-06-10 14:20', 
          description: 'Uploaded video evidence.', 
          changes: 'Original footage uploaded'
        },
      ],
    },
    {
      id: 6,
      name: 'Police_Report.docx',
      hash: '0xabcdef1234',
      description: 'Official police report regarding the case.',
      logs: [
        { 
          id: 1, 
          action: 'Uploaded', 
          time: '2023-06-12 09:45', 
          description: 'Initial upload of police report.', 
          changes: 'Complete report uploaded'
        },
      ],
    },
]);


  // New state for file upload
  const [file, setFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  const openModal = (doc) => {
    setSelectedDoc(doc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setLogDetails(null);
  };

  const viewLogDetails = (log) => {
    setLogDetails(log);
  };

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const newDoc = {
        id: documents.length + 1,
        name: selectedFile.name,
        hash: '0x' + Math.random().toString(16).slice(2), // Dummy hash for example
        description: 'Uploaded file',
        logs: [
          {
            id: 1,
            action: 'Uploaded',
            time: new Date().toISOString(),
            description: 'File uploaded successfully.',
            changes: 'Full document upload',
          },
        ],
      };
      setDocuments([...documents, newDoc]);
      setUploadedFile(selectedFile);
      setFile(null); // Reset the file input
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Case Documents</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex">
            <div className="w-1/3 pr-4">
              <h2 className="text-xl font-semibold mb-4">Documents</h2>
              <input 
                type="file" 
                onChange={handleFileUpload} 
                className="mb-4 border border-gray-300 p-2 rounded" 
              />
              <ul className="space-y-2">
                {documents.map((doc) => (
                  <li
                    key={doc.id}
                    className="flex items-center justify-between p-2 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-50"
                    onClick={() => openModal(doc)}
                  >
                    <span>{doc.name}</span>
                    <div>
                      <button className="text-blue-600 hover:text-blue-800 mr-2">Info</button>
                      <button className="text-green-600 hover:text-green-800">Logs</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-2/3 pl-4">
              {selectedDoc ? (
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">{selectedDoc.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">IPFS Hash: {selectedDoc.hash}</p>
                  <p className="text-sm text-gray-600 mb-4">Description: {selectedDoc.description}</p>
                  <h4 className="font-medium mb-2">Document Logs:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {selectedDoc.logs.map((log, index) => (
                      <li 
                        key={index} 
                        className="text-sm text-gray-600 cursor-pointer hover:underline" 
                        onClick={() => viewLogDetails(log)}
                      >
                        {log.action} on {log.time} - {log.description}
                      </li>
                    ))}
                  </ul>
                  {logDetails && (
                    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                      <h5 className="font-medium text-sm mb-2">Log Details:</h5>
                      <p className="text-sm"><strong>Action:</strong> {logDetails.action}</p>
                      <p className="text-sm"><strong>Time:</strong> {logDetails.time}</p>
                      <p className="text-sm"><strong>Description:</strong> {logDetails.description}</p>
                      <p className="text-sm"><strong>Changes:</strong> {logDetails.changes}</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-gray-600">Select a document to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Modal for Document Viewing */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Document Viewer"
        className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-25"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
          <h2 className="text-2xl font-bold mb-4">{selectedDoc?.name}</h2>
          <p className="text-sm text-gray-600 mb-4">IPFS Hash: {selectedDoc?.hash}</p>
          <p className="text-sm text-gray-600 mb-4">Description: {selectedDoc?.description}</p>
          <div className="flex justify-end">
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" 
              onClick={closeModal}
            >
              Close
            </button>
          </div>
          {/* Display the uploaded file if selected */}
          {uploadedFile && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Uploaded File Preview:</h3>
              <p className="text-sm text-gray-600 mb-2">{uploadedFile.name}</p>
              <embed 
                src={URL.createObjectURL(uploadedFile)} 
                className="w-full h-64" 
                type={uploadedFile.type} 
                title={uploadedFile.name}
              />
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default CaseDocuments;
