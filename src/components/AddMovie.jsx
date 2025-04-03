import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddMovie.css"; // Import the CSS file

const AddMovie = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    genre: "",
    releaseYear: "",
    synopsis: "",
    posterUrl: "",
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Movie added:", movie);
    navigate("/"); // Redirect to Dashboard after submission
  };

  return (
    <div className="add-movie-container">
      <h2>Add a New Movie</h2>
      <form className="add-movie-form" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={movie.title} onChange={handleChange} required />

        <label>Director:</label>
        <input type="text" name="director" value={movie.director} onChange={handleChange} required />

        <label>Genre:</label>
        <select name="genre" value={movie.genre} onChange={handleChange} required>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
          <option value="Horror">Horror</option>
        </select>

        <label>Release Year:</label>
        <input type="number" name="releaseYear" value={movie.releaseYear} onChange={handleChange} required />

        <label>Synopsis:</label>
        <textarea name="synopsis" value={movie.synopsis} onChange={handleChange} required />

        <label>Poster Image URL:</label>
        <input type="url" name="posterUrl" value={movie.posterUrl} onChange={handleChange} required />

        <div className="button-group">
          <button type="submit" className="submit-btn">Submit</button>
          <button type="button" className="cancel-btn" onClick={() => navigate("/")}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;