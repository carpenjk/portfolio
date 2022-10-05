import { getIndexedPropValue } from '@carpenjk/prop-x';
import Badge from './Badge';

const ImageBadge = ({image, ...props}) => {
  const {width: imgWidth, height: imgHeight, ...remImgProps} = image;
  return (
      <Badge {...props} imgWidth={imgWidth} imgHeight={imgHeight}>
        <img 
          {...remImgProps}
          width={getIndexedPropValue(imgWidth, 99)}
          height={getIndexedPropValue(imgHeight, 99)}
        />
      </Badge> );
  };
export default ImageBadge;