"use client"

import { useState } from "react"
import { Upload, Calendar, MapPin, User, FileText, Image, Check, X } from "lucide-react"

const UpcomingEvents = ({ setEventData }) => {
  const [formData, setFormData] = useState({
    eventVenue: "",
    eventDate: "",
    eventAlumni: "",
    eventDocument: null,
    eventDocumentName: "",
    eventImage: null,
    eventImagePreview: "",
    eventExtraImage: null,
    eventExtraImagePreview: "",
  })

  const [uploading, setUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target
    if (files.length > 0) {
      if (name.includes("Document")) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: files[0],
          [`${name}Name`]: files[0].name,
        }))
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: files[0],
          [`${name}Preview`]: URL.createObjectURL(files[0]),
        }))
      }
    }
  }

  // const handleSubmit = async () => {
  //   setUploading(true);

  //   try {
  //     // Create the data object in the required format
  //     const eventData = {
  //       venue: formData.eventVenue,
  //       event_date: formData.eventDate,
  //       alumni_name: formData.eventAlumni,
  //       createdAt: new Date().toISOString(),
  //       dOC_S3_link: formData.eventImage ? URL.createObjectURL(formData.eventImage) : "https://mock-s3-bucket.s3.amazonaws.com/upcoming-event.jpg", // Default image if none provided
  //       userId: "k3ohskeA2uLoSFI" // You might want to get this from your auth system
  //     };

  //     const response = await fetch('http://localhost:5000/api/addUpcommingEvent', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(eventData),
  //     });

  //     const data = await response.json();
  //     console.log(data);

  //     if (response.ok) {
  //       setUploadSuccess(true);
  //       // Clear all form fields
  //       setFormData({
  //         eventVenue: "",
  //         eventDate: "",
  //         eventAlumni: "",
  //         eventDocument: null,
  //         eventDocumentName: "",
  //         eventImage: null,
  //         eventImagePreview: "",
  //         eventExtraImage: null,
  //         eventExtraImagePreview: "",
  //       });
        
  //       // Update event data if needed
  //       if (setEventData) {
  //         setEventData(prevData => [...prevData, data]);
  //       }

  //       // Reset success message after 3 seconds
  //       setTimeout(() => {
  //         setUploadSuccess(false);
  //       }, 3000);
  //     } else {
  //       throw new Error(data.message || 'Failed to add event');
  //     }
  //   } catch (error) {
  //     console.error('Error adding event:', error);
  //     alert('Failed to add event. Please try again.');
  //   } finally {
  //     setUploading(false);
  //   }
  // };

  const handleSubmit = async () => {
  setUploading(true);

  try {
    const formPayload = new FormData();
    formPayload.append("eventVenue", formData.eventVenue);
    formPayload.append("eventDate", formData.eventDate);
    formPayload.append("eventAlumni", formData.eventAlumni);
    
    if (formData.eventImage) {
      formPayload.append("eventImage", formData.eventImage);
    }

    const response = await fetch("http://localhost:5000/api/addUpcommingEvent", {
      method: "POST",
      body: formPayload,
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      setUploadSuccess(true);
      setFormData({
        eventVenue: "",
        eventDate: "",
        eventAlumni: "",
        eventDocument: null,
        eventDocumentName: "",
        eventImage: null,
        eventImagePreview: "",
        eventExtraImage: null,
        eventExtraImagePreview: "",
      });

      if (setEventData) {
        setEventData(prevData => [...prevData, data]);
      }

      setTimeout(() => setUploadSuccess(false), 3000);
    } else {
      throw new Error(data.message || "Failed to add event");
    }
  } catch (error) {
    console.error("Error uploading:", error);
    alert("Upload failed!");
  } finally {
    setUploading(false);
  }
};

  const isEventFilled =
    formData.eventVenue.trim() !== "" ||
    formData.eventDate.trim() !== "" ||
    formData.eventAlumni.trim() !== "" ||
    formData.eventDocument !== null ||
    formData.eventImage !== null ||
    formData.eventExtraImage !== null

  const renderFileUpload = (type) => {
    const isDocument = type === "Document"
    const fieldName = `event${type}`
    const previewField = isDocument ? `${fieldName}Name` : `${fieldName}Preview`
    const hasFile = formData[previewField] ? true : false

    return (
      <div className="mb-4">
        <div className="flex items-center mb-2">
          {isDocument ? (
            <FileText size={18} className="mr-2 text-green-600" />
          ) : (
            <Image size={18} className="mr-2 text-green-600" />
          )}
          <label className="text-sm font-medium text-gray-700">
            {isDocument ? "Upload Document" : `Upload ${type === "Image" ? "Primary" : "Secondary"} Image`}
          </label>
        </div>

        <div
          className={`border-2 border-dashed rounded-lg p-4 transition-all ${
            hasFile ? "border-green-400 bg-green-50" : "border-gray-300 hover:border-green-400"
          }`}
        >
          <input
            type="file"
            name={fieldName}
            onChange={handleFileChange}
            className="hidden"
            id={fieldName}
            accept={isDocument ? ".pdf,.doc,.docx,.txt" : "image/*"}
          />

          <label htmlFor={fieldName} className="cursor-pointer flex flex-col items-center justify-center">
            {hasFile ? (
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <Check size={18} className="text-green-500 mr-2" />
                  <span className="text-sm text-gray-700 truncate max-w-[200px]">
                    {isDocument ? formData[previewField] : "Image uploaded"}
                  </span>
                </div>
                <button
                  type="button"
                  className="text-red-500 hover:text-red-700"
                  onClick={(e) => {
                    e.preventDefault()
                    setFormData({
                      ...formData,
                      [fieldName]: null,
                      [previewField]: "",
                    })
                  }}
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <div className="text-center">
                <Upload className="mx-auto h-10 w-10 text-gray-400" />
                <p className="mt-1 text-sm text-gray-500">Click to upload {isDocument ? "document" : "image"}</p>
                <p className="text-xs text-gray-400">
                  {isDocument ? "PDF, DOC, DOCX, TXT" : "PNG, JPG, GIF up to 10MB"}
                </p>
              </div>
            )}
          </label>
        </div>

        {!isDocument && formData[previewField] && (
          <div className="mt-2 relative rounded-lg overflow-hidden border border-gray-200">
            <img
              src={formData[previewField] || "/placeholder.svg"}
              alt="Preview"
              className="w-full h-40 object-cover"
            />
          </div>
        )}
      </div>
    )
  }

  const renderInputField = (name, placeholder, icon) => {
    const fieldName = `event${name}`
    return (
      <div className="mb-4">
        <div className="flex items-center mb-2">
          {icon}
          <label htmlFor={fieldName} className="text-sm font-medium text-gray-700 ml-2">
            {placeholder}
          </label>
        </div>
        <input
          type={name === "Date" ? "date" : "text"}
          id={fieldName}
          name={fieldName}
          placeholder={name === "Date" ? "" : placeholder}
          value={formData[fieldName]}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
        />
      </div>
    )
  }

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden max-w-2xl mx-auto mt-16">
      {/* Added mt-16 to create space from navbar */}
      <div className="bg-green-600 p-4 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 rounded-full transform translate-x-16 -translate-y-16 opacity-50"></div>
        <h2 className="text-2xl font-bold text-white text-center relative z-10">Upcoming Events</h2>
        <p className="text-green-100 text-center mt-2 relative z-10">Add a new upcoming event</p>
      </div>

      <div className="p-6">
        {renderFileUpload("Document")}
        {renderFileUpload("Image")}
        {renderFileUpload("ExtraImage")}

        {renderInputField("Venue", "Venue", <MapPin size={18} className="text-green-600" />)}
        {renderInputField("Date", "Event Date", <Calendar size={18} className="text-green-600" />)}
        {renderInputField("Alumni", "Alumni Name", <User size={18} className="text-green-600" />)}

        <div className="mt-6">
          <button
            onClick={handleSubmit}
            disabled={!isEventFilled || uploading}
            className={`w-full flex items-center justify-center py-3 px-4 rounded-lg text-white font-medium transition duration-300 transform hover:scale-105 ${
              isEventFilled && !uploading ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {uploading ? "Uploading..." : uploadSuccess ? "Upload Successful!" : "Upload Event"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default UpcomingEvents
