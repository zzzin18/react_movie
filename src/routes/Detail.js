import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Detail.css"; // CSS import

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      const data = await response.json();
      setMovie(data.data.movie);
    } catch (error) {
      console.error("Failed to fetch movie:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  if (loading) return <div className="detail_loading">Loading...</div>;

  return (
    <div className="detail">
      <img
        src={movie.medium_cover_image}
        alt={movie.title}
        className="detail__img"
      />
      <div className="detail_info">
        <h1 className="detail_title">
          {movie.title} ({movie.year})
        </h1>
        <p className="detail_rating">Rating: ⭐ {movie.rating}/10</p>
        <p className="detail_description">{movie.description_full}</p>
        {movie.genres && (
          <ul className="detail__genres">
            {movie.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Detail;
