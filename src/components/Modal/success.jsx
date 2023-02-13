import image from "../../assets/QOi7Nie.png";

const Succy = () => {
  return (
    <div
      className="bg-green-100 rounded-lg py-5 px-6 mb-3 text-base text-green-700 inline-flex items-center w-full"
      role="alert"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="check-circle"
        className="w-4 h-4 mr-2 fill-current"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
        ></path>
      </svg>
      Beautiful! Your message was sent successfully. Call us for further
      enquiries - 018883790 or Whatsapp: 08060725397
    </div>
  );
};

const Success = () => {
  return (
    <div className="shadow-lg rounded-lg bg-white mx-auto m-8 p-4 notification-box flex">
      <div className="pr-2">
        <svg
          className="fill-current text-green-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="22"
          height="22"
        >
          <path
            className="heroicon-ui"
            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
          />
        </svg>
      </div>
      <div>
        <div className="text-sm pb-2">
          Notification Title
          <span className="float-right">
            <svg
              className="fill-current text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="22"
              height="22"
            >
              <path
                className="heroicon-ui"
                d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
              />
            </svg>
          </span>
        </div>
        <div className="text-sm text-gray-600  tracking-tight ">
          I will never close automatically. This is a purposely very very long
          description that has many many characters and words.
        </div>
      </div>
    </div>
  );
};

const SuccessMod = () => {
  return (
    <div className="flex w-96 shadow-lg rounded-lg">
      <div className="bg-green-600 py-4 px-6 rounded-l-lg flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-white fill-current"
          viewBox="0 0 16 16"
          width="20"
          height="20"
        >
          <path
            fill-rule="evenodd"
            d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
          ></path>
        </svg>
      </div>
      <div className="px-4 py-6 bg-white rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200">
        <div>Success alert</div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-gray-700"
            viewBox="0 0 16 16"
            width="20"
            height="20"
          >
            <path
              fill-rule="evenodd"
              d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

const SuccessModd = () => {
  return (
    <div
      className="absolute top-[50%] right-[30%] m-3 w-2/3 md:w-1/3"
      //   x-transition:enter="transition transform ease-out duration-300"
      //   x-transition:enter-start="opacity-0 translate-y-1"
      //   x-transition:enter-end="opacity-100 translate-y-0"
      //   x-transition:leave="transition transform ease-in duration-300"
      //   x-transition:leave-start="opacity-100 translate-y-0"
      //   x-transition:leave-end="opacity-0 translate-y-1"
    >
      <div className="bg-white border-gray-300 border p-3 flex items-start shadow-lg rounded-md space-x-2">
        <svg
          className="flex-shrink-0 h-6 w-6 text-green-400"
          stroke="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            stroke-width="1"
            d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"
          ></path>
        </svg>
        <div className="flex-1 space-y-1">
          <p className="text-base leading-6 font-medium text-gray-700">
            Successfully saved!
          </p>
          <p className="text-sm leading-5 text-gray-600">
            Anyone with a link can now view this file
          </p>
        </div>
        <svg
          className="flex-shrink-0 h-5 w-5 text-gray-400 cursor-pointer"
          stroke="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            stroke-width="1.2"
            d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

const SuccessModal = ({ modalClick }) => {
  return (
    <div
      className="animate-fadeIn max-w-md mx-auto z-50 bg-header backdrop-blur-[24px] text-opacity-100 opacity-100 rounded-xl overflow-hidden md:max-w-md shadow-l fixed left-[50%] translate-x-[-50%]"
      onClick={modalClick}
    >
      <div className="md:flex relative">
        <div className="w-full p-3 py-10">
          <div className="flex justify-center">
            {/* <img src={image} width="80" /> */}
            <svg
              className="h-8 w-8 text-green-500 mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
          </div>

          <div className="flex justify-center my-3 text-center">
            <span className="text-xl font-medium">Successfully submitted!</span>
          </div>

          <p className="px-4 text-center text-gray-400 text-[14px]">
            Call us for further enquiries - 018883790 or Whatsapp: 08060725397
          </p>

          <div className="px-14 mt-5">
            <button
              className="h-12 bg-green-500 w-full px-4 text-white text-md hover:shadow hover:bg-main_tint  rounded-[8px]"
              onClick={() => {
                location.href = "https://wa.me/2348060725397";
              }}
            >
              Whatsapp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SuccessMo = () => {
  return (
    <div
      className="max-w-xs bg-white border rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700"
      role="alert"
    >
      <div className="flex p-4">
        <div className="flex-shrink-0">
          <svg
            className="h-4 w-4 text-green-500 mt-0.5"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm text-gray-700 dark:text-gray-400">
            Successfully submitted!
          </p>
          <p>
            Call us for further enquiries - 018883790 or Whatsapp: 08060725397
          </p>
        </div>
      </div>
    </div>
  );
};

// https://wa.link/6n8o2t

export default SuccessModal;
