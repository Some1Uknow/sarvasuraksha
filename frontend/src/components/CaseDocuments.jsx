import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import GoBack from "../constants/GoBack";
import {
  File,
  FileText,
  Image,
  Video,
  Upload,
  Trash,
  Share,
  X as XIcon,
} from "lucide-react";

export default function CaseDocuments() {
  const { id } = useParams();
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [isLogsModalOpen, setIsLogsModalOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
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
  const [isUploading, setIsUploading] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading(true);
      // Simulate file upload
      setTimeout(() => {
        const newDoc = {
          id: documents.length + 1,
          name: file.name,
          type: file.type.split("/").pop(), // Get file extension
          hash: "0x" + Math.random().toString(16).slice(2),
          description: `Uploaded document: ${file.name}`,
          logs: [
            {
              id: 1,
              action: "Uploaded",
              time: new Date().toISOString(),
              description: "Document uploaded",
            },
          ],
        };
        setDocuments((prevDocs) => [...prevDocs, newDoc]);
        setUploadedFile(null);
        setIsUploading(false);
      }, 2000);
    }
  };

  const openLogsModal = (doc) => {
    setSelectedDoc(doc);
    setIsLogsModalOpen(true);
  };

  const closeLogsModal = () => {
    setIsLogsModalOpen(false);
    setSelectedDoc(null);
  };

  const openPreviewModal = (doc) => {
    setSelectedDoc(doc);
    setIsPreviewModalOpen(true);
  };

  const closePreviewModal = () => {
    setIsPreviewModalOpen(false);
    setSelectedDoc(null);
  };

  const filteredDocs = documents.filter((doc) =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
        return <File size={20} />;
      case "jpg":
      case "jpeg":
      case "png":
        return <Image size={20} />;
      case "mp4":
        return <Video size={20} />;
      case "doc":
      case "docx":
        return <FileText size={20} />;
      default:
        return <File size={20} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            <GoBack />
            Case Documents
          </h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={handleSearch}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <input
              type="file"
              onChange={handleFileUpload}
              className="hidden"
              id="fileUpload"
            />
            <label
              htmlFor="fileUpload"
              className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Upload className="mr-2" size={20} />
              Upload Document
            </label>
            {isUploading && (
              <div className="mt-4 p-4 bg-blue-100 rounded-md">
                <h3 className="text-lg font-medium text-blue-900">
                  Uploading...
                </h3>
                <p className="mt-1 text-sm text-blue-700">
                  Your document is being uploaded. Please wait.
                </p>
              </div>
            )}
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredDocs.map((doc) => (
                <tr key={doc.id}>
                  <td
                    className="px-6 py-4 whitespace-nowrap"
                    onClick={() => openPreviewModal(doc)}
                  >
                    <span className="flex flex-row gap-1 items-center">
                      {getFileIcon(doc.type)} {doc.name}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {doc.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex items-center">
                    <button
                      className="bg-red-600 text-white p-3 rounded-md hover:underline"
                      onClick={() => openLogsModal(doc)}
                    >
                      Logs
                    </button>
                    <button className="text-gray-500 hover:underline ml-4">
                      <Share size={16} /> Share
                    </button>
                    <button className="text-red-500 hover:underline ml-4">
                      <Trash size={16} /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Logs Modal */}
      <Modal
        isOpen={isLogsModalOpen}
        onRequestClose={closeLogsModal}
        ariaHideApp={false}
        style={{
          content: {
            width: "50vw",
            height: "50vh",
            margin: "auto",
            padding: "20px",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Logs for {selectedDoc?.name}</h2>
            <button
              onClick={closeLogsModal}
              className="text-gray-500 hover:text-red-600"
            >
              <XIcon size={20} />
            </button>
          </div>
          <p className="text-xl font-semibold text-gray-500">
            Hash: {selectedDoc?.hash}
          </p>
          <div className="mt-4 bg-gray-100 p-2 rounded">
            <h3 className="font-semibold mb-2">Action Logs:</h3>
            <ul className="list-disc list-inside text-sm">
              {selectedDoc?.logs.map((log) => (
                <li key={log.id} className="mb-1">
                  <span className="font-semibold">{log.action}</span> -{" "}
                  {log.time}: {log.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Modal>

      {/* Document Preview Modal */}
      <Modal
        isOpen={isPreviewModalOpen}
        onRequestClose={closePreviewModal}
        ariaHideApp={false}
        style={{
          content: {
            width: "700px",
            height: "50vh",
            margin: "auto",
            padding: "20px",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Preview: {selectedDoc?.name}</h2>
            <button
              onClick={closePreviewModal}
              className="text-gray-500 hover:text-red-600"
            >
              <XIcon size={20} />
            </button>
          </div>
          <p className="text-sm text-gray-500">
            Description: {selectedDoc?.description}
          </p>
          <div className="mt-4 bg-gray-100 p-2 rounded">
            <p className="text-sm">
              This is where the document preview would be displayed.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
