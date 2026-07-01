import type { OverlayProps } from '@/types';

const ImageVignetteOverlay = ({ variant }: OverlayProps) => {
  const colorClass = variant === 'dark' ? 'from-black' : 'from-white';

  return (
    <>
      <div
        className={`absolute top-0 inset-x-0 h-25 bg-linear-to-b z-5 ${colorClass} to-transparent`}
      />
      <div
        className={`absolute bottom-0 inset-x-0 h-25 bg-linear-to-t z-5 ${colorClass} to-transparent`}
      />
      <div
        className={`absolute left-0 inset-y-0 w-25 bg-linear-to-r z-5 ${colorClass} to-transparent`}
      />
      <div
        className={`absolute right-0 inset-y-0 w-25 bg-linear-to-l z-5 ${colorClass} to-transparent`}
      />
    </>
  );
};

export default ImageVignetteOverlay;
