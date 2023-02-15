import Movies from "./firstgallery";
import MoviesDue from "./secondgallery";
import MoviesTre from "./thirdgallery";

function TvShows() {
  return (
    <>
      <h2>Trending Now</h2>
      <Movies />
      <h2>Star Wars Collection</h2>
      <MoviesDue />
      <h2>New Releases</h2>
      <MoviesTre />
    </>
  );
}
export default TvShows;
