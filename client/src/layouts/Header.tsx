import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex h-2 w-full">
      <div className="flex-1 bg-red-500" />
      <div className="flex-1 bg-orange-500" />
      <div className="flex-1 bg-yellow-500" />
      <div className="flex-1 bg-green-500" />
      <div className="flex-1 bg-blue-500" />
      <div className="flex-1 bg-indigo-500" />
      <div className="flex-1 bg-purple-500" />
    </div>
  );
};

export default Header;
