import { useAppSelector } from "../redux/hooks";
import AllPlaylists from "../components/AllPlaylists";
import SinglePlaylist from "../components/SinglePlaylist";

function Playlists() {
  const playlists = useAppSelector((state) => state.playlists.playlists);
  const user = useAppSelector((state) => state.user.info);

  return (
    <>
      {user && (
        <>
          <h1>
            {user?.given_name ? `${user.given_name}'s Playlists` : "Playlists"}
          </h1>
          <AllPlaylists />
          {/* Temporarily disabled this. */}
          {/* {playlists.map((playlist) => (
          <SinglePlaylist key={playlist.id} playlist={playlist} />
        ))} */}
        </>
      )}
    </>
  );
}

export default Playlists;
