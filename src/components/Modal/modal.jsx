import React from "react";

const Modal = () => {
  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
    >
      <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative rounded-lg shadow bg-[#25282C]">
          <button className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center flex flex-col justify-center items-center">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#fff] bg-[#] rounded-full "
              viewBox="0 0 512 512"
              fill="#1fa959"
              height="80px"
            >
              <title>Checkmark Circle</title>
              <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-38 312.38l-80.6-89.57 23.79-21.41 56 62.22L350 153.46 374.54 174z" />
            </svg> */}

            <div className="grid place-items-center overflow-hidden relative w-[100%] ">
              <svg
                width="120"
                height="120"
                viewBox="0 0 274 270"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" z-[100] p-2 "
              >
                <ellipse
                  cx="138"
                  cy="123.5"
                  rx="71"
                  ry="71.5"
                  fill="url(#paint0_linear_9_9)"
                />
                <path
                  d="M137.312 25C75.9354 25 26 74.2064 26 134.688C26 195.169 75.9354 244.375 137.312 244.375C198.69 244.375 248.625 195.169 248.625 134.688C248.625 74.2064 198.69 25 137.312 25ZM116.977 189.732L73.843 142.497L86.5743 131.207L116.543 164.018L187.617 80.6137L200.75 91.4453L116.977 189.732Z"
                  fill="url(#paint1_linear_9_9)"
                />
                <g filter="url(#filter0_d_9_9)">
                  <ellipse
                    cx="137"
                    cy="134.5"
                    rx="109"
                    ry="107.5"
                    fill="black"
                    fill-opacity="0.01"
                    shape-rendering="crispEdges"
                  />
                </g>
                <ellipse
                  cx="137.5"
                  cy="134"
                  rx="104.5"
                  ry="103"
                  fill="black"
                  fill-opacity="0.01"
                />
                <ellipse
                  cx="137"
                  cy="137.5"
                  rx="100"
                  ry="99.5"
                  fill="black"
                  fill-opacity="0.01"
                />
                <ellipse
                  cx="137.5"
                  cy="138.5"
                  rx="84.5"
                  ry="86.5"
                  fill="black"
                  fill-opacity="0.01"
                />
                <ellipse
                  cx="137"
                  cy="137.5"
                  rx="93"
                  ry="92.5"
                  fill="black"
                  fill-opacity="0.01"
                />
                <defs>
                  <filter
                    id="filter0_d_9_9"
                    x="28"
                    y="27"
                    width="222"
                    height="219"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="2"
                      operator="dilate"
                      in="SourceAlpha"
                      result="effect1_dropShadow_9_9"
                    />
                    <feOffset dx="2" dy="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.121569 0 0 0 0 0.662745 0 0 0 0 0.34902 0 0 0 0.05 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_9_9"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_9_9"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_9_9"
                    x1="166.5"
                    y1="111"
                    x2="96"
                    y2="165.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#A2CCB5" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_9_9"
                    x1="137.312"
                    y1="25"
                    x2="137.312"
                    y2="244.375"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1FA959" />
                    <stop offset="1" stop-color="#1E5738" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="bg-myWhite-8 p-2 rounded-full w-[100px] h-[100px] absolute opacity-1"></div>
              <div className="bg-myWhite-8 rounded-full w-[120px] h-[120px] absolute opacity-1 animate-scaleIn delay-[1s]"></div>
              {/* <div className="bg-myWhite-8 rounded-full w-[100px] h-[100px] absolute opacity-0 animate-scaleIn delay-[0s]"></div> */}
            </div>

            <h3 className="mb-5 text-2xl text-[#fff] font-semibold">
              We've submitted your order!
            </h3>
            <p className="text-[#89949e] text-center pb-8 px-4 w-[200px]">
              We'll get back to you in the shortest time possible
            </p>
            {/* <button className="text-white bg-[#1fa959] hover:bg-main_tint focus:ring-4 focus:outline-none focus:ring-[#fff] font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
              Contact us
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const ModalBtn = () => {
  return (
    <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Open Btn
    </button>
  );
};

export default Modal;
