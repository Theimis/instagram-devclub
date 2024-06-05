/* eslint-disable react/prop-types */
import { AiFillHeart } from "react-icons/ai";
import { Flex, Typography } from "../../style";
import { FaRegComment } from "react-icons/fa";
import * as C from "./style";
import { randomNumber } from "../../utils/randomNumber";

export function InfoProfile({ name, photo, link }) {

  



  return (
    <Flex direction="row" align="center" justify="space-bet">
      <C.Container>
        <C.Link href={link} target="_blank">
          <C.ProfileImg src={photo} alt="fotografia" />
          <Typography weight="300" size="13px" height="15px">
            {name}
          </Typography>
        </C.Link>
      </C.Container>

      <C.Container>
        <AiFillHeart color="red" />
        <Typography weight="300" size="13px" height="15px">
        {randomNumber()}
        </Typography>

        <FaRegComment />
        <Typography weight="300" size="13px" height="15px">
        {randomNumber()}
        </Typography>
      </C.Container>
    </Flex>
  );
}
