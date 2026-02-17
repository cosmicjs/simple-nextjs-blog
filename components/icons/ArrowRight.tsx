import React from 'react';

export default function ArrowRight({
  className,
}: {
  className: string;
}): React.ReactElement {
  return (
    <svg
      height={20}
      width={20}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289L25.7071 14.2929C26.0976 14.6834 26.0976 15.3166 25.7071 15.7071L17.7071 23.7071C17.3166 24.0976 16.6834 24.0976 16.2929 23.7071C15.9024 23.3166 15.9024 22.6834 16.2929 22.2929L22.5858 16H5C4.44772 16 4 15.5523 4 15C4 14.4477 4.44772 14 5 14H22.5858L16.2929 7.70711C15.9024 7.31658 15.9024 6.68342 16.2929 6.29289Z"
        fill="currentColor"
      />
    </svg>
  );
}