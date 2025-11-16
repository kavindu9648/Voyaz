import React from "react";

const TourCard = ({ image, title, days, description }) => {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
      <div className="w-full h-44 md:h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover block"
        />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>

        <div className="flex items-center text-gray-500 text-sm mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="12" cy="12" r="9" stroke="#0f5f82" fill="none" />
            <path
              d="M12 7v5l3 2"
              stroke="#0f5f82"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-gray-600">{days} Days</span>
        </div>

        <p
          className="text-gray-600 text-sm flex-1"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </p>

        <div className="mt-4">
          <a className="text-blue-900 font-semibold inline-flex items-center text-sm">
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
};

export default TourCard;
