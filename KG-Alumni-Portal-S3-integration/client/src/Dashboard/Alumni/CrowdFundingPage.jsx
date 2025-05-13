import { useState } from "react";
import qrCode from "/src/assets/QR_code/qrCode.jpeg"; 
import medicalAidImage from "/src/assets/CrowdFunding/medical-aid.jpg"; 

export default function CrowdFundingPage() {
  const [amount, setAmount] = useState("");
  const [targetAmount, setTargetAmount] = useState(500000);
  const [showQR, setShowQR] = useState(false);
  const [showCampaignForm, setShowCampaignForm] = useState(false);
  const [campaignTitle, setCampaignTitle] = useState("");
  const [goalAmount, setGoalAmount] = useState("");
  const [campaignPurpose, setCampaignPurpose] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Page Title */}
      <h1 className="text-5xl font-bold text-gray-800 mb-8 text-center">
        Crowd Funding
      </h1>

      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-8">
        
        {/* Left Section: Donation Form */}
        <div className="bg-white shadow-xl rounded-3xl p-10 w-full md:w-2/3 text-center transition-all duration-300 transform hover:scale-105">
          {!showQR ? (
            <>
              <h2 className="text-3xl font-bold text-gray-900">
                Fundraising for a Medical Cause
              </h2>
              <p className="text-gray-700 text-lg mt-3">
                Every donation helps provide urgent medical aid to students in need.
              </p>

              {/* Image Above Purpose */}
              <img 
                src={medicalAidImage} 
                alt="Medical Aid" 
                className="mt-6 w-full max-w-sm mx-auto rounded-lg shadow-md hover:scale-105 transition-all duration-300"
              />

              {/* Purpose - Fixed Text */}
              <p className="mt-6 text-lg font-semibold text-gray-800 bg-gray-200 p-3 rounded-lg">
                Helping students with medical emergencies and urgent treatments.
              </p>

              {/* Amount Input & Target Amount */}
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <input
                  type="number"
                  placeholder="Enter Amount (₹)"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full md:w-1/2 px-5 py-3 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-400 text-lg shadow-sm"
                />
                <div className="w-full md:w-1/2 bg-gray-200 p-4 rounded-lg text-center">
                  <p className="text-gray-600 text-lg">Target Amount</p>
                  <p className="text-black-700 text-3xl font-bold">₹{targetAmount}</p>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-300 h-3 rounded-full overflow-hidden mt-3">
                    <div
                      className="h-full bg-blue-500 transition-all duration-500"
                      style={{ width: `${(amount / targetAmount) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Pay Button with Animation */}
              <button
                className={`mt-6 w-full py-3 text-lg font-semibold text-white rounded-lg transition-all duration-300 ${
                  amount
                    ? "bg-blue-600 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                onClick={() => setShowQR(true)}
                disabled={!amount}
              >
                Pay Now
              </button>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-gray-900">
                Scan to Donate
              </h2>
              <img
                src={qrCode}
                alt="QR Code"
                className="mt-6 w-60 mx-auto shadow-md rounded-lg border border-gray-300 hover:scale-105 transition-all duration-300"
              />
              <p className="mt-3 text-lg text-gray-800">
                UPI ID: <span className="text-blue-600 font-semibold">kavinkavin42255@okicici</span>
              </p>
            </>
          )}
        </div>

        {/* Right Section: Financial Campaign Form */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          {!showCampaignForm ? (
            <button
              className="w-full py-4 text-lg font-semibold bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              onClick={() => setShowCampaignForm(true)}
            >
              Financial Campaign
            </button>
          ) : (
            <div className="bg-white shadow-lg rounded-3xl p-6 transition-all duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-900">
                Create a Campaign
              </h2>

              <input
                type="text"
                placeholder="Campaign Title"
                value={campaignTitle}
                onChange={(e) => setCampaignTitle(e.target.value)}
                className="mt-4 w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-green-400 text-lg shadow-sm"
              />

              <input
                type="number"
                placeholder="Goal Amount (₹)"
                value={goalAmount}
                onChange={(e) => setGoalAmount(e.target.value)}
                className="mt-4 w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-green-400 text-lg shadow-sm"
              />

              <textarea
                placeholder="Purpose"
                value={campaignPurpose}
                onChange={(e) => setCampaignPurpose(e.target.value)}
                className="mt-4 w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-green-400 text-lg shadow-sm"
              />

              <button
                className="mt-6 w-full py-3 text-lg font-semibold bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => alert("Campaign Saved!")}
              >
                Save Campaign
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
