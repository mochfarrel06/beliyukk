import React from 'react';

const SuggestionPage = () => {
  return (
    <>
      <div className="w-full mb-40">
        <div className="container w-full mx-auto py-[60px] flex flex-col gap-[60px]">
          <div className="text-[30px] font-medium font-reemkufi">Product suggestions</div>
          <div className="flex">
            <h4 className="text-c4 font-normal text-xl">Please provide suggestions or feedback about our products</h4>
            <div>
              <div className="w-[800px] h-[160px] border border-c4">
                <input type="text" placeholder="Placeholder" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuggestionPage;
