import React from 'react';

const ButtonSearchSmall = () => {
  return (
    <div className="overflow-hidden">
      <div className="px-3 py-2 border rounded-lg border-c7 flex justify-between">
        <input type="text" placeholder="Placeholder" className="outline-none w-[350px] text-sm font-normal text-c4" />
        <button className="px-5 py-1 bg-c1 rounded-full text-sm font-normal text-c6">Search</button>
      </div>
    </div>
  );
};

export default ButtonSearchSmall;
