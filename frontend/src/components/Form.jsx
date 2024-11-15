import React, { useState } from 'react';
import axios from 'axios'; 

const Form = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    domain: '',
    sslStatus: '',
    email: '',
    phone: '',
    address: '',
    facebookUrl: '',
    instagramUrl: '',
    hashtags: '',
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null); 
  const [error, setError] = useState(null); 

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); 

    try {
      const res = await axios.post('http://localhost:5000/analyze', formData); 
      setResponse(res.data); 
      console.log('response is', res.data);
    } catch (err) {
      setError('Something went wrong, please try again later!'); 
    } finally {
      setLoading(false); 
    }
  };


  const handleCloseModal = () => {
    setResponse(null);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md space-y-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center">See Your Business Credibility</h2>

        {/* Input Fields */}
        {['businessName', 'domain', 'sslStatus', 'email', 'phone', 'address', 'facebookUrl', 'instagramUrl', 'hashtags'].map((field) => (
          <div key={field} className="space-y-1">
            <label className="block text-gray-700 capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
            <input
              type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1')}`}
              required={field !== 'email'} 
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'See Credibility'}
        </button>

        
        {error && (
          <div className="mt-6 p-4 bg-red-100 text-red-800 rounded-md">
            <p>{error}</p>
          </div>
        )}
      </form>

     
      {response && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-2xl font-semibold text-gray-800">Credibility Score</h3>
            <p className="mt-4 text-lg text-gray-700">
              {response?.score ? `Score: ${response.score}` : 'No score available'}
            </p>
            <p className="mt-2 text-gray-600">
              {response?.analysis?.text || 'No analysis found'}
            </p>
            <button
              onClick={handleCloseModal}
              className="mt-4 w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
