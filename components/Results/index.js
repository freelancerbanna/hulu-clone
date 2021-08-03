import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
const Results = ({ results }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl: flex justify-center flex-wrap">
      {results.results.map((results) => (
        <Thumbnail key={results.id} thumbnail={results} />
      ))}
    </FlipMove>
  );
};

export default Results;
