import React from 'react';

const ButtonSearch = () => {
  return (
    <div className="w-[536px] overflow-hidden">
      <div className="w-full px-3 py-2 border rounded-lg border-c7 flex justify-between">
        <input type="text" placeholder="Placeholder" className="outline-none w-[350px] text-lg font-normal text-c4" />
        <button className="px-[27px] py-[4px] bg-c1 rounded-full text-lg font-medium text-c6">Search</button>
      </div>
    </div>
  );
};

export default ButtonSearch;
