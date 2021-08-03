import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
const Thumbnail = ({ thumbnail }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div
      
      className="group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-110 hover:z-50 p-2"
    >
      <Image
        src={
          `${BASE_URL}${thumbnail.backpdrop_path || thumbnail.poster_path}` ||
          `${BASE_URL}${thumbnail.poster_path}`
        }
        alt=""
        width={1920}
        height={1080}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{thumbnail.overview}</p>
        <h2 className="mt-1 text-white text-2xl transition-all duration-100 group-hover:font-bold">
          {thumbnail.title || thumbnail.orginial_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {thumbnail.media_type && `${thumbnail.media_type} - `}{" "}
          {thumbnail.release_date || thumbnail.first_air_date} -{" "}
          <ThumbUpIcon className="h-2 mx-2" /> {thumbnail.vote_count}
        </p>
      </div>
    </div>
  );
};
export default Thumbnail;
