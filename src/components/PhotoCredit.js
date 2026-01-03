import PropTypes from "prop-types";

function PhotoCredit({ author, url, downloadUrl, isHero }) {
  if (!author || !url) return null;
  return (
    <div className={`absolute ${isHero ? "bottom-37 lg:bottom-2" : "bottom-2"} right-2 text-[10px] sm:text-xs text-gray-200/80 z-20 px-2 py-1 rounded max-w-[90vw] wrap-break-words`}>
      Photo by{" "}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        {author}
      </a>{" "}
      on Unsplash
      {downloadUrl && (
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 underline"
        >
          Download
        </a>
      )}
    </div>
  );
}

PhotoCredit.propTypes = {
  author: PropTypes.string,
  url: PropTypes.string,
  downloadUrl: PropTypes.string,
};

PhotoCredit.defaultProps = {
  author: "",
  url: "",
  downloadUrl: "",
};

export default PhotoCredit;