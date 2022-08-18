import Hero from "./Hero";
import VideoDetails from "./VideoDetails";

function CurrentVideo(props) {
  return (
    <>
      <Hero
        video={props.videoDetails.video}
        poster={props.videoDetails.image}
      />
      <VideoDetails selectedVideo={props.videoDetails} />
    </>
  );
}

export default CurrentVideo;
