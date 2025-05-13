"use client"

import { useState } from "react"

const departments = [
  "Information Technology",
  "Computer Science Engineering",
  "Electronics and Communication Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
]

const genders = ["Male", "Female", "Other"]

const degrees = ["B.Tech", "M.Tech", "MBA", "B.E", "Ph.D", "Other"]

const ratingOptions = ["Excellent", "Very Good", "Good", "Average", "Satisfactory"]

function AlumniSurveyForm() {
  const [formData, setFormData] = useState({
    email: "kavinkavin42255@gmail.com",
    recordEmail: false,
    personalInfo: {
      name: "",
      yearOfGraduation: "",
      department: "",
      gender: "",
      dateOfBirth: "",
      emailId: "",
      contactNo: "",
    },
    completedEducation: {
      degree: "",
      yearOfGraduation: "",
      institution: "",
    },
    pursuingEducation: {
      degree: "",
      yearOfGraduation: "",
      institution: "",
    },
    employment: {
      organizationName: "",
      yearOfAppointment: "",
      initialDesignation: "",
      currentDesignation: "",
      totalExperience: "",
    },
    selfEmployment: {
      organizationName: "",
      establishmentYear: "",
      numberOfEmployees: "",
    },
    // New sections from the screenshots
    professionalSkills: {
      leadershipRating: "",
      teamworkRating: "",
      receivedReward: "",
      outreachActivities: "",
      programImprovementRecommendations: "",
      technicalSkillsRating: "",
      modernToolsRating: "",
      softwareDevelopmentMethodologies: "",
    },
    curriculumAspects: {
      programRelevanceRating: "",
      undergraduateExperienceRating: "",
      currentPositionRating: "",
      higherStudiesRating: "",
    },
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (name.includes(".")) {
      const [section, field] = name.split(".")
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        },
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="min-h-screen bg-[#F0F3F8] py-6 px-4">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Header */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-gray-900">Alumni Survey Form</h1>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">{formData.email}</span>
                <button type="button" className="text-blue-600 text-sm hover:text-blue-800">
                  Switch account
                </button>
              </div>
            </div>
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                id="recordEmail"
                name="recordEmail"
                checked={formData.recordEmail}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 rounded border-gray-300"
              />
              <label htmlFor="recordEmail" className="ml-2 text-sm text-gray-600">
                Record {formData.email} as the email to be included with my response
              </label>
            </div>
            <p className="text-sm text-red-500 mt-4">* Indicates required question</p>
          </div>

          {/* Personal Information */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-medium mb-6">a. Personal Information</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="personalInfo.name" className="block text-sm mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="personalInfo.name"
                  name="personalInfo.name"
                  required
                  placeholder="Your answer"
                  value={formData.personalInfo.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="personalInfo.yearOfGraduation" className="block text-sm mb-1">
                  Year of Graduation <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="personalInfo.yearOfGraduation"
                  name="personalInfo.yearOfGraduation"
                  required
                  placeholder="Your answer"
                  value={formData.personalInfo.yearOfGraduation}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="personalInfo.department" className="block text-sm mb-1">
                  Department <span className="text-red-500">*</span>
                </label>
                <select
                  id="personalInfo.department"
                  name="personalInfo.department"
                  required
                  value={formData.personalInfo.department}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Choose</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="personalInfo.gender" className="block text-sm mb-1">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  id="personalInfo.gender"
                  name="personalInfo.gender"
                  required
                  value={formData.personalInfo.gender}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Choose</option>
                  {genders.map((gender) => (
                    <option key={gender} value={gender}>
                      {gender}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="personalInfo.dateOfBirth" className="block text-sm mb-1">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="personalInfo.dateOfBirth"
                  name="personalInfo.dateOfBirth"
                  required
                  value={formData.personalInfo.dateOfBirth}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="personalInfo.emailId" className="block text-sm mb-1">
                  E-mail ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="personalInfo.emailId"
                  name="personalInfo.emailId"
                  required
                  placeholder="Your answer"
                  value={formData.personalInfo.emailId}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="personalInfo.contactNo" className="block text-sm mb-1">
                  Contact No <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="personalInfo.contactNo"
                  name="personalInfo.contactNo"
                  required
                  placeholder="Your answer"
                  value={formData.personalInfo.contactNo}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Higher Education Details */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-medium mb-6">
              Have you upgraded your Education Qualification? If yes, fill the below.
            </h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="completedEducation.degree" className="block text-sm mb-1">
                  1. Degree/Specialization
                </label>
                <select
                  id="completedEducation.degree"
                  name="completedEducation.degree"
                  value={formData.completedEducation.degree}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Choose</option>
                  {degrees.map((degree) => (
                    <option key={degree} value={degree}>
                      {degree}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="completedEducation.yearOfGraduation" className="block text-sm mb-1">
                  2. Year of Graduation
                </label>
                <input
                  type="text"
                  id="completedEducation.yearOfGraduation"
                  name="completedEducation.yearOfGraduation"
                  placeholder="Your answer"
                  value={formData.completedEducation.yearOfGraduation}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="completedEducation.institution" className="block text-sm mb-1">
                  3. Institution
                </label>
                <input
                  type="text"
                  id="completedEducation.institution"
                  name="completedEducation.institution"
                  placeholder="Your answer"
                  value={formData.completedEducation.institution}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <h2 className="text-lg font-medium mt-8 mb-6">
              Are you pursuing any higher Education? If yes, fill the below
            </h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="pursuingEducation.degree" className="block text-sm mb-1">
                  1. Degree/Specialization
                </label>
                <select
                  id="pursuingEducation.degree"
                  name="pursuingEducation.degree"
                  value={formData.pursuingEducation.degree}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Choose</option>
                  {degrees.map((degree) => (
                    <option key={degree} value={degree}>
                      {degree}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="pursuingEducation.yearOfGraduation" className="block text-sm mb-1">
                  2. Year of Graduation
                </label>
                <input
                  type="text"
                  id="pursuingEducation.yearOfGraduation"
                  name="pursuingEducation.yearOfGraduation"
                  placeholder="Your answer"
                  value={formData.pursuingEducation.yearOfGraduation}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="pursuingEducation.institution" className="block text-sm mb-1">
                  3. Institution
                </label>
                <input
                  type="text"
                  id="pursuingEducation.institution"
                  name="pursuingEducation.institution"
                  placeholder="Your answer"
                  value={formData.pursuingEducation.institution}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Employment Details */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-medium mb-6">Employment Details</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="employment.organizationName" className="block text-sm mb-1">
                  1. Name of the Organization Employed <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="employment.organizationName"
                  name="employment.organizationName"
                  required
                  placeholder="Your answer"
                  value={formData.employment.organizationName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="employment.yearOfAppointment" className="block text-sm mb-1">
                  2. Year of Appointment <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="employment.yearOfAppointment"
                  name="employment.yearOfAppointment"
                  required
                  placeholder="Your answer"
                  value={formData.employment.yearOfAppointment}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="employment.initialDesignation" className="block text-sm mb-1">
                  3. Designation at the time of Appointment <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="employment.initialDesignation"
                  name="employment.initialDesignation"
                  required
                  placeholder="Your answer"
                  value={formData.employment.initialDesignation}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="employment.currentDesignation" className="block text-sm mb-1">
                  4. Current Designation <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="employment.currentDesignation"
                  name="employment.currentDesignation"
                  required
                  placeholder="Your answer"
                  value={formData.employment.currentDesignation}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="employment.totalExperience" className="block text-sm mb-1">
                  5. Total Years of Experience <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="employment.totalExperience"
                  name="employment.totalExperience"
                  required
                  placeholder="Your answer"
                  value={formData.employment.totalExperience}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Self Employment Details */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-medium mb-6">Are you Self employed? If yes, fill the below.</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="selfEmployment.organizationName" className="block text-sm mb-1">
                  1. Name of the Organization owned
                </label>
                <input
                  type="text"
                  id="selfEmployment.organizationName"
                  name="selfEmployment.organizationName"
                  placeholder="Your answer"
                  value={formData.selfEmployment.organizationName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="selfEmployment.establishmentYear" className="block text-sm mb-1">
                  2. Establishment Year of your company
                </label>
                <input
                  type="text"
                  id="selfEmployment.establishmentYear"
                  name="selfEmployment.establishmentYear"
                  placeholder="Your answer"
                  value={formData.selfEmployment.establishmentYear}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="selfEmployment.numberOfEmployees" className="block text-sm mb-1">
                  3. No. of Employees in the Company
                </label>
                <input
                  type="text"
                  id="selfEmployment.numberOfEmployees"
                  name="selfEmployment.numberOfEmployees"
                  placeholder="Your answer"
                  value={formData.selfEmployment.numberOfEmployees}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Curriculum Aspects - From third screenshot */}
          <div className="bg-white rounded-lg p-6 text-black">
            <h2 className="text-lg font-medium mb-6 bg-white-600 text-black p-2">b.Curriculum Aspects</h2>
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium mb-4">
                  To what extent is your current position related to your Program of Study?
                </h2>
                <div className="space-y-2">
                  {ratingOptions.map((option) => (
                    <div key={`program-${option}`} className="flex items-center">
                      <input
                        type="radio"
                        id={`curriculumAspects.programRelevanceRating.${option}`}
                        name="curriculumAspects.programRelevanceRating"
                        value={option}
                        checked={formData.curriculumAspects.programRelevanceRating === option}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 border-gray-300"
                      />
                      <label
                        htmlFor={`curriculumAspects.programRelevanceRating.${option}`}
                        className="ml-2 text-sm text-gray-700"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium mb-4">
                  How well do you think your UnderGraduate Experience prepared you to
                </h2>
              </div>

              <div>
                <h2 className="text-lg font-medium mb-4">Be in your current position</h2>
                <div className="space-y-2">
                  {ratingOptions.map((option) => (
                    <div key={`current-${option}`} className="flex items-center">
                      <input
                        type="radio"
                        id={`curriculumAspects.currentPositionRating.${option}`}
                        name="curriculumAspects.currentPositionRating"
                        value={option}
                        checked={formData.curriculumAspects.currentPositionRating === option}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 border-gray-300"
                      />
                      <label
                        htmlFor={`curriculumAspects.currentPositionRating.${option}`}
                        className="ml-2 text-sm text-gray-700"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium mb-4">Pursue Higher Studies</h2>
                <div className="space-y-2">
                  {ratingOptions.map((option) => (
                    <div key={`higher-${option}`} className="flex items-center">
                      <input
                        type="radio"
                        id={`curriculumAspects.higherStudiesRating.${option}`}
                        name="curriculumAspects.higherStudiesRating"
                        value={option}
                        checked={formData.curriculumAspects.higherStudiesRating === option}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 border-gray-300"
                      />
                      <label
                        htmlFor={`curriculumAspects.higherStudiesRating.${option}`}
                        className="ml-2 text-sm text-gray-700"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>



          {/* Professional Skills - From first screenshot */}
          <div className="bg-white rounded-lg p-6 text-black">
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium mb-4">Be an Effective Leader</h2>
                <div className="space-y-2">
                  {ratingOptions.map((option) => (
                    <div key={`leader-${option}`} className="flex items-center">
                      <input
                        type="radio"
                        id={`professionalSkills.leadershipRating.${option}`}
                        name="professionalSkills.leadershipRating"
                        value={option}
                        checked={formData.professionalSkills.leadershipRating === option}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 border-gray-300"
                      />
                      <label
                        htmlFor={`professionalSkills.leadershipRating.${option}`}
                        className="ml-2 text-sm text-gray-700"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium mb-4">Work effectively as a Member of a Team</h2>
                <div className="space-y-2">
                  {ratingOptions.map((option) => (
                    <div key={`team-${option}`} className="flex items-center">
                      <input
                        type="radio"
                        id={`professionalSkills.teamworkRating.${option}`}
                        name="professionalSkills.teamworkRating"
                        value={option}
                        checked={formData.professionalSkills.teamworkRating === option}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 border-gray-300"
                      />
                      <label
                        htmlFor={`professionalSkills.teamworkRating.${option}`}
                        className="ml-2 text-sm text-gray-700"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="professionalSkills.receivedReward" className="block text-sm mb-2">
                  Have you received any Reward/Appreciation from an Employer? If yes, mention the reason
                </label>
                <input
                  type="text"
                  id="professionalSkills.receivedReward"
                  name="professionalSkills.receivedReward"
                  placeholder="Your answer"
                  value={formData.professionalSkills.receivedReward}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="professionalSkills.outreachActivities" className="block text-sm mb-2">
                  Have you attended any Outreach activities? If yes, Mention the activities.
                </label>
                <input
                  type="text"
                  id="professionalSkills.outreachActivities"
                  name="professionalSkills.outreachActivities"
                  placeholder="Your answer"
                  value={formData.professionalSkills.outreachActivities}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Technical Skills - From second screenshot */}
          <div className="bg-white rounded-lg p-6 text-black">
            <div className="space-y-6">
              <div>
                <label htmlFor="professionalSkills.programImprovementRecommendations" className="block text-sm mb-2">
                  If you want to improve Your Program of study or Department, what would be your Recommendations?
                </label>
                <input
                  type="text"
                  id="professionalSkills.programImprovementRecommendations"
                  name="professionalSkills.programImprovementRecommendations"
                  placeholder="Your answer"
                  value={formData.professionalSkills.programImprovementRecommendations}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <h2 className="text-lg font-medium mb-4">
                  Have you Applied the Technical skills of Data Science, Artificial Intelligence, Cloud Computing and
                  Networking to provide solutions for industrial and societal requirements?
                </h2>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={`tech-${rating}`} className="flex items-center">
                      <input
                        type="radio"
                        id={`professionalSkills.technicalSkillsRating.${rating}`}
                        name="professionalSkills.technicalSkillsRating"
                        value={rating}
                        checked={formData.professionalSkills.technicalSkillsRating === rating.toString()}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 border-gray-300"
                      />
                      <label
                        htmlFor={`professionalSkills.technicalSkillsRating.${rating}`}
                        className="ml-2 text-sm text-gray-700"
                      >
                        {rating}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium mb-4">
                  You Applied / used appropriate modern tools and IDEs for real time software development?
                </h2>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={`tools-${rating}`} className="flex items-center">
                      <input
                        type="radio"
                        id={`professionalSkills.modernToolsRating.${rating}`}
                        name="professionalSkills.modernToolsRating"
                        value={rating}
                        checked={formData.professionalSkills.modernToolsRating === rating.toString()}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 border-gray-300"
                      />
                      <label
                        htmlFor={`professionalSkills.modernToolsRating.${rating}`}
                        className="ml-2 text-sm text-gray-700"
                      >
                        {rating}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="professionalSkills.softwareDevelopmentMethodologies" className="block text-sm mb-2">
                  Have you adapted contemporary software development methodologies and standards which suits the
                  dynamism of Societal and Industrial nature?
                </label>
                <input
                  type="text"
                  id="professionalSkills.softwareDevelopmentMethodologies"
                  name="professionalSkills.softwareDevelopmentMethodologies"
                  placeholder="Your answer"
                  value={formData.professionalSkills.softwareDevelopmentMethodologies}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          
          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AlumniSurveyForm


