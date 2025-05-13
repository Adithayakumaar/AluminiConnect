import { useState, useEffect } from "react";
import qrCode from "/src/assets/QR_code/qrCode.jpeg"; // Ensure the correct path

export default function DonationPage() {
  const [amount, setAmount] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [paid, setPaid] = useState(false);

  // Simulate QR scan process (show button after 5 seconds)
  useEffect(() => {
    if (showQR) {
      const timer = setTimeout(() => {
        setScanned(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showQR]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Title at the Top Center */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Donation
      </h1>

      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-2xl text-center transition-all duration-300 ease-in-out transform hover:scale-105">
        {!showQR ? (
          <>
            <h2 className="text-3xl font-bold text-gray-900 opacity-90 transition-opacity duration-300">
              Make a Contribution
            </h2>
            <p className="text-gray-700 text-lg mt-3 opacity-80">
              "Giving is not just about making a donation, it’s about making a difference."
            </p>
            <input
              type="text"
              placeholder="Enter Name (optional)"
              className="mt-6 w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-400 transition-all duration-300 shadow-sm text-lg"
            />
            <input
              type="number"
              placeholder="Enter Amount (₹)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-4 w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-400 transition-all duration-300 shadow-sm text-lg"
            />
            <button
              className={`mt-6 w-full py-3 text-lg font-semibold text-white rounded-lg transition-all duration-300 ${
                amount
                  ? "bg-blue-600 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              onClick={() => setShowQR(true)}
              disabled={!amount}
            >
              Donate Now
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-gray-900 opacity-90 transition-opacity duration-300">
              Scan to Donate
            </h2>
            <img
              src={qrCode}
              alt="QR Code"
              className="mt-6 w-60 mx-auto shadow-md rounded-lg border border-gray-300 transition-all duration-300 transform hover:scale-105"
            />
            <p className="mt-3 text-lg text-gray-800 font-medium opacity-90">
              UPI ID: <span className="text-blue-600 font-semibold">kavinkavin42255@okicici</span>
            </p>

            {/* Display "I Have Paid" button after 5 seconds */}
            {scanned && !paid && (
              <button
                className="mt-6 w-full py-3 text-lg font-semibold bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => setPaid(true)}
              >
                I Have Paid
              </button>
            )}

            {/* Show Payment Success Message after Clicking "I Have Paid" */}
            {paid && (
              <p className="mt-5 text-lg font-semibold text-green-700 opacity-90 transition-opacity duration-500 ease-in-out">
                ✅ Payment Successful! Thank You
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
