/* eslint-disable react/prop-types */
import { Typography } from "../../style";
import { InfoProfile } from "../InfoProfile";
import * as C from "./style";

export function Publications({ photos }) {
  return (
    <C.Container>
      <Typography>publicações</Typography>

      <C.ContainerPublications>
        {photos.map((photo) => (
          <C.Content key={photo?.id}>
            <C.PublicationImg src={photo?.src?.medium} alt="fotografia" />
            <InfoProfile 
             name={photo?.photographer}
             photo={photo?.src?.small}
             link={photo?.photographer_url}
          
            />
          </C.Content>
        ))}
      </C.ContainerPublications>
    </C.Container>
  );
}
