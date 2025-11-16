import React from "react";

const formatDate = (value) => {
  const d = value instanceof Date ? value : new Date(value);
  if (isNaN(d)) return { day: "", month: "" };
  const day = String(d.getDate()).padStart(2, "0");
  const month = d.toLocaleString("en-US", { month: "short" }).toUpperCase();
  return { day, month };
};

const BlogCard = ({
  image,
  date = new Date(),
  author = "Voyaz",
  comments = 0,
  title,
  excerpt,
}) => {
  const { day, month } = formatDate(date);

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-lg relative">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 md:h-72 object-cover block"
        />

        <div className="absolute right-4 top-4 bg-blue-900 text-white rounded-bl-lg rounded-tr-md px-3 py-2 text-right">
          <div className="text-xl font-bold leading-none">{day}</div>
          <div className="text-xs uppercase tracking-wider">{month}</div>
        </div>
      </div>

      <div className="p-6 bg-white -mt-2 rounded-b-2xl">
        <div className="flex items-center text-gray-400 text-sm mb-3 space-x-4">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.64 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-xs text-gray-600">{author}</span>
          </div>

          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8-1.07 0-2.09-.14-3.03-.4L3 20l.4-3.97C3.14 14.09 3 13.07 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="text-xs text-gray-600">{comments} Comments</span>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-snug">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">{excerpt}</p>

        <a className="text-blue-900 font-semibold inline-flex items-center text-sm">
          READ MORE
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
    </article>
  );
};

export default BlogCard;
