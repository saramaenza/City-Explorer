import PropTypes from "prop-types";

function PhotoCredit({ author, url, downloadUrl }) {
  if (!author || !url) return null;
  return (
    <div className="absolute bottom-2 right-2 text-xs text-gray-200/80 z-20">
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