import type { OverlayProps } from '@/types';

const SideFadeOverlay = ({ variant }: OverlayProps) => {
  const colorClass = variant === 'dark' ? 'from-black' : 'from-white';
  return (
    <>
      <div
        className={`absolute z-5 left-0 inset-y-0 w-20 lg:w-100 bg-linear-to-r ${colorClass}  to-transparent`}
      ></div>
      <div
        className={`absolute z-5 right-0 inset-y-0 w-20 lg:w-50 bg-linear-to-l ${colorClass}  to-transparent`}
      ></div>
    </>
  );
};

export default SideFadeOverlay;
