import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full border-b-2 border-gray-200 w-8 h-8"></div>
    </div>
  );
};

export default Loading;
