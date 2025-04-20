// import "./App.css";
import React from "react";
import axios from "axios";
import { useState } from "react";
import SearchForm from "./components/SearchForm";
import Error from "./components/Error";
import UserCard from "./components/UserCard";

function App() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setTimeout(async () => {
      setError("");
      setUser(null);
      try {
        const response = await axios.get(
          `https://api.github.com/users/${userName}`
        );
        const userData = response.data;

        const reposCount = await axios.get(userData.repos_url);
        const reposEvents = await axios.get(
          `https://api.github.com/users/${userName}/events`
        );

        setUser({
          ...userData,
          repos: reposCount.data.length,
          events: reposEvents.data.slice(0, 5),
        });
      } catch (error) {
        console.log("hata nedeni: ", error);
        setError("😢 Kullanıcı bulunamadı");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-6">🔍 GitHub Kullanıcı Arama</h1>
      <SearchForm
        userName={userName}
        setUserName={setUserName}
        handleSearch={handleSearch}
        loading={loading}
      />
      <Error error={error} />
      <UserCard user={user} />
    </div>
  );
}

export default App;
