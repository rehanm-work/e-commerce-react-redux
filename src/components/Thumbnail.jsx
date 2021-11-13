import { Stack } from '@mui/material';
import { LightThumbnailImage } from './StyledComponents';

const Thumbnail = ({
  imageList,
  imgIndex,
  margin,
  setImageIndex,
  ...props
}) => {
  return (
    <Stack
      direction='row'
      justifyContent={props.justifyContent || 'space-between'}
      alignItems='center'
    >
      {imageList.map((item, index) => {
        return (
          <LightThumbnailImage
            key={index}
            className={imgIndex === index ? 'active-thumbnail' : null}
            onClick={() => setImageIndex(index)}
            src={item.thumbnail}
            alt={item.alt}
            active={imgIndex === index ? true : false}
            margin={margin}
          />
        );
      })}
    </Stack>
  );
};

export default Thumbnail;
