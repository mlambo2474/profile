import { FaCode } from "react-icons/fa";

const ProjectCard = ({ title, tags, src, type, visitLink, codeLink }) => {
  const maxVisibleTags = 4;
  const visibleTags = Array.isArray(tags) ? tags.slice(0, maxVisibleTags) : [];
  const hiddenCount = Array.isArray(tags)
    ? Math.max(tags.length - maxVisibleTags, 0)
    : 0;

  return (
    <div className="group bg-[url('https://files.123freevectors.com/wp-content/original/107103-light-purple-abstract.jpg')] flex flex-col justify-center align-center rounded-lg max-w-80 m-6">
      <div className="flex justify-center p-6">
        {type === "video" ? (
          <video
            src={src}
            className="w-80 h-40 transition-all duration-500 ease-in-out transform  rounded-lg shadow-lg"
            controls
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={src}
            alt={title}
            className="w-80 h-40 transition-all duration-500 ease-in-out transform lg:hover:scale-170 rounded-lg shadow-lg"
          />
        )}
      </div>

      <h6 className="flex pl-6 text-purple-800">{title}</h6>

      {/* Collapsed one-line tags (default) */}
      <div className="flex pl-4 pr-4 text-[14px] leading-5 whitespace-nowrap flex-nowrap overflow-hidden group-hover:hidden">
        {visibleTags.map((tag, index) => (
          <span
            key={`v-${index}`}
            className="bg-purple-50 font-semibold text-purple-600 rounded px-1.5 py-0.5 mx-1 my-2"
          >
            {tag}
          </span>
        ))}
        {hiddenCount > 0 && (
          <span className="bg-purple-100 font-semibold text-purple-600 rounded px-1.5 py-0.5 mx-1 my-2">
            …
          </span>
        )}
      </div>

      {/* Expanded full tags on hover */}
      <div className="hidden group-hover:flex flex-wrap pl-4 pr-4 text-xs">
        {tags.map((tag, index) => (
          <span
            key={`a-${index}`}
            className="bg-purple-50 font-semibold text-purple-600 rounded px-1.5 py-0.5 mx-1 my-2"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex p-4 gap-4 ml-2">
        <a
          href={visitLink}
          className="bg-purple-500 text-white text-center font-bold rounded-lg p-2 w-28 hover:bg-indigo-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit site
        </a>
        <a
          href={codeLink}
          className="bg-purple-500 flex justify-center rounded-lg p-2 w-18 hover:bg-indigo-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaCode className="text-2xl text-white" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
