import React from "react";

const MapPin = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 13C7 8.58172 10.5817 5 15 5C19.4183 5 23 8.58172 23 13C23 17.4183 15 24 15 24C15 24 7 17.4183 7 13ZM15 16C16.6569 16 18 14.6569 18 13C18 11.3431 16.6569 10 15 10C13.3431 10 12 11.3431 12 13C12 14.6569 13.3431 16 15 16Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MapPin;
