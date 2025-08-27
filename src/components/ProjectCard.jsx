import { FaCode } from "react-icons/fa";

const ProjectCard = ({ title, tags, src, type, visitLink, codeLink }) => {
  return (
    <div className="bg-[url('https://files.123freevectors.com/wp-content/original/107103-light-purple-abstract.jpg')] flex flex-col justify-center align-center rounded-lg max-w-80 m-6">
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

      <div className="flex flex-wrap pl-4 text-sm">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-purple-50 font-bold text-purple-500 rounded-lg px-1 py-1 mx-1 my-2"
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
