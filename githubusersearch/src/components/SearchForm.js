import React from "react";

function SearchForm({ userName, setUserName, handleSearch, loading }) {
  return (
    <div className="flex space-x-2 ">
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="kullanıcı adı giriniz lütfen"
        className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white bg-white bg-opacity-80 hover:bg-opacity-95"
      />

      <button
        onClick={handleSearch}
        disabled={loading}
        className={`text-white font-semibold px-4 py-2 rounded-full text-lg transition-all duration-1000 ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:brightness-125"
        }`}
      >
        {loading ? (
          <span className="flex items-center gap-2"> 🚀 Aranıyor...</span>
        ) : (
          <span>🔍 Ara</span>
        )}
      </button>
    </div>
  );
}

export default SearchForm;
