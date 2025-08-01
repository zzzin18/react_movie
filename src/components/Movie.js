import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css"; // CSS 파일 import

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className="movie">
      <img src={coverImg} alt={title} className="movie__img" />
      <div className="movie__data">
        <h2 className="movie__title">
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p className="movie__summary">
          {summary.length > 300 ? summary.slice(0, 300) + "..." : summary}
        </p>
        {genres && genres.length > 0 && (
          <ul className="movie__genres">
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
