import PropTypes from "prop-types";

function PhotoCredit({ author, url, downloadUrl, isHero }) {
  if (!author || !url) return null;

  if (isHero) {
    return (
      <div className="w-full text-center text-gray-400 text-[10px] text-xs 2xl:text-sm mt-1">
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
    <div className="absolute bottom-1 right-1 text-[9px] text-xs 2xl:text-sm text-gray-200/80 z-20 px-1.5 py-0.5 rounded max-w-[90vw] wrap-break-words">
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