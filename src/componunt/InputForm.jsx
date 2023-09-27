
import React from 'react';

function InputForm({ username, setUsername, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="mb-4 flex items-center justify-center">
      <input
        type="text"
        placeholder="Enter GitHub Username"
        className=" p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
     
    </form>
  );
}

export default InputForm;
