import PropTypes from "prop-types";

function PhotoCredit({ author, url, downloadUrl, isHero }) {
  if (!author || !url) return null;

  if (isHero) {
    return (
      <div className="w-full text-center text-gray-400 text-xs mt-2">
        Photo by{" "}
        <a href={url} target="_blank" rel="noopener noreferrer" className="underline">
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

  return (
    <div className="absolute bottom-2 right-2 text-[10px] sm:text-xs text-gray-200/80 z-20 px-2 py-1 rounded max-w-[90vw] break-words">
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
  isHero: PropTypes.bool,
};

PhotoCredit.defaultProps = {
  author: "",
  url: "",
  downloadUrl: "",
  isHero: false,
};

export default PhotoCredit;