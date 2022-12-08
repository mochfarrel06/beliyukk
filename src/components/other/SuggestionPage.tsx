import React from 'react';

const SuggestionPage = () => {
  return (
    <>
      {/* <div className="w-full">
        <div className="container w-full mx-auto py-[60px] flex flex-col gap-10">
          <div className="text-[30px] font-medium font-reemkufi">Product suggestions</div>
          <div className="flex">
            <h4 className="text-c4 font-normal text-xl">Please provide suggestions or feedback about our products</h4>
            <div className="flex flex-col gap-5">
              <div className="w-[800px] h-[160px] border-[2px] border-c4 rounded-[10px] overflow-hidden">
                <textarea placeholder="Placeholder" className="m-4 w-[760px] h-[120px] outline-none"></textarea>
              </div>
              <button className="bg-c4 w-[103px] h-[52px] px-[26px] py-[14px] rounded-[10px] text-c6 font-medium text-base">Kirim</button>
            </div>
          </div>
        </div>
      </div> */}

      <div>
        <div className="container px-4 py-16">
          <h3 className="font-medium font-reemkufi text-lg mb-5">Product suggestions</h3>
          <div>
            <h4 className="text-c4 font-normal text-base">Please provide suggestions or feedback about our products</h4>
            <div className="flex flex-col gap-8 mt-4">
              <div className="h-[160px] border-[2px] border-c4 rounded-[10px] overflow-hidden">
                <textarea placeholder="Placeholder" className="w-full h-full px-4 py-4 outline-none"></textarea>
              </div>
              <button className="bg-c4 px-6 py-4 rounded-[10px] text-c6 font-medium text-base">Kirim</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuggestionPage;
