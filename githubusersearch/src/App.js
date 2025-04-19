// import "./App.css";
import React from "react";
import axios from "axios";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setError("");
    setUser(null);
    try {
      const response = await axios.get(
        `https://api.github.com/users/${userName}`
      );
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("hata nedeni: ", error);
      setError("😢 Kullanıcı bulunamadı");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center text-white">
      <h1 className="text-3x1 font-bold mb-6">🔍 GitHub Kullanıcı Arama</h1>

      <div className="flex space-x-2">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="kullanıcı adı giriniz lütfen"
          className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
        />

        <button
          onClick={handleSearch}
          className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          Sorgula
        </button>
      </div>

      {error && <p className="mt-4 text-yellow-200 font-semibold">{error}</p>}

      {user && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg text-gray-800 w-80 text-center">
          <img
            src={user.avatar_url}
            alt="avatar"
            className="w-40 h-40 rounded-full mx-auto mb-4 "
          />
          <h3 className="text-x1 font-bold">{user.name || user.login}</h3>
          <p className="text-sm mb-2">{user.bio}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Github Profili
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
