import React from "react";

function Error({ error }) {
  return (
    <div>
      {error && (
        <p className=" px-2 py-2 bg-white bg-opacity-80 rounded-full mt-8 text-yellow-500 font-semibold hover:bg-opacity-95">
          {error}
        </p>
      )}
    </div>
  );
}

export default Error;
