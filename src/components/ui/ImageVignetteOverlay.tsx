import type { ImageVignetteOverlayProps } from '@/types';

const ImageVignetteOverlay = ({ variant }: ImageVignetteOverlayProps) => {
  const color = variant === 'dark' ? 'black' : 'white';

  return (
    <>
      <div
        className={`absolute top-0 inset-x-0 h-25 bg-linear-to-b from-${color} to-transparent `}
      ></div>
      <div
        className={`absolute bottom-0 inset-x-0 h-25 bg-linear-to-t from-${color} to-transparent`}
      ></div>
      <div
        className={`absolute left-0 inset-y-0 w-25 bg-linear-to-r from-${color} to-transparent`}
      ></div>
    </>
  );
};

export default ImageVignetteOverlay;
