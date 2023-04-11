import useGenres from "../hooks/useGenres";
import {
  List,
  ListItem,
  HStack,
  Image,
  Text,
  Spinner,
  Button,
} from "@chakra-ui/react";
import getCroppedImageUrl from "./../services/image-url";
import { Genre } from "./../hooks/useGenres";

interface Props {
  onSelectGenre: (renre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
              cursor="pointer"
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
