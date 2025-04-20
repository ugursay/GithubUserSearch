import React from "react";

function UserCard({ user }) {
  return (
    <div>
      {user && (
        <div className="mt-8 p-6 bg-white bg-opacity-80 rounded-lg shadow-lg text-gray-800 w-80 text-center hover:bg-opacity-95">
          <img
            src={user.avatar_url}
            alt="avatar"
            className="w-24 h-24 rounded-full mx-auto mb-4 "
          />
          <h3 className="text-xl font-bold">{user.name || user.login}</h3>
          <p className="text-base mb-2">{user.bio}</p>

          <div className="mb-4">
            <p className="text-sm">Takipçi Sayısı: {user.followers}</p>
            <p className="text-sm">Takip Sayısı: {user.following}</p>
            <p className="text-sm">Public Repo Sayısı: {user.repos}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Son Etkinlikler: </h4>
            {user.events.length > 0 ? (
              user.events.map((event, index) => (
                <p index={index} className="text-sm">
                  {event.type} - {event.repo.name}
                </p>
              ))
            ) : (
              <p className="text-sm">Etkinlik bulunamadı</p>
            )}
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2">Son Repolar:</h4>
            {user.reposNames && user.reposNames.length > 0 ? (
              user.reposNames.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-blue-600 hover:underline block"
                >
                  {repo.name}
                </a>
              ))
            ) : (
              <p className="text-sm">Proje bulunamadı</p>
            )}
          </div>

          <div className="mt-4">
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Github Profili
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserCard;
