import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import Playlist from "../components/Playlist";
import PlaylistActionsBar from "../components/PlaylistActionsBar";
import { SetStateAction, useState } from "react";
import { PlaylistItemObj } from "../assets/interfaces";

import styled from "@emotion/styled";

const Container = styled.div`
  /* border: 2px solid green; */
`;

function PlaylistPage() {
  const params = useParams();
  const id = params.id;
  const playlists = useAppSelector((state) => state.playlists.playlists);
  const playlist = playlists.find((p) => p.id == id); // TODO: Make a separate selector?
  const user = useAppSelector((state) => state.user.info);

  const [selectedPlaylistItems, setSelectedPlaylistItems] = useState<
    PlaylistItemObj[]
  >([]);

  if (playlist) {
    return (
      <>
        <PlaylistActionsBar
          playlist={playlist}
          items={selectedPlaylistItems}
          selectedPlaylistItems={selectedPlaylistItems}
          setSelectedPlaylistItems={(
            selectedPlaylistItems: SetStateAction<PlaylistItemObj[]>
          ) => setSelectedPlaylistItems(selectedPlaylistItems)}
        />
        <Container>
          <Playlist
            playlist={playlist}
            selectedPlaylistItems={selectedPlaylistItems}
            setSelectedPlaylistItems={(
              selectedPlaylistItems: SetStateAction<PlaylistItemObj[]>
            ) => setSelectedPlaylistItems(selectedPlaylistItems)}
          />
        </Container>
      </>
    );
  }
  return user && <p>Loading with ID...: {id}</p>;
}

export default PlaylistPage;
