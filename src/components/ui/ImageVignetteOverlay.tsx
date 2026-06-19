import type { OverlayProps } from '@/types';

const ImageVignetteOverlay = ({ variant }: OverlayProps) => {
  const colorClass = variant === 'dark' ? 'from-black' : 'from-white';

  return (
    <>
      <div
        className={`absolute top-0 inset-x-0 h-25 bg-linear-to-b ${colorClass} to-transparent`}
      ></div>
      <div
        className={`absolute bottom-0 inset-x-0 h-25 bg-linear-to-t ${colorClass} to-transparent`}
      ></div>
      <div
        className={`absolute left-0 inset-y-0 w-25 bg-linear-to-r ${colorClass} to-transparent`}
      ></div>
    </>
  );
};

export default ImageVignetteOverlay;
