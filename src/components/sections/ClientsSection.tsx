import { useDark } from '@/contexts/dark-mode/useDark';
import { clientsLogos } from '@/data/clientsLogo';
import { getSectionHeader } from '@/helpers/getSectionHeader';
import SideFadeOverlay from '@/components/ui/SideFadeOverlay';

const ClientsSection = () => {
  const { isDark } = useDark();

  const headerText = getSectionHeader('clients');
  const clientLogos = clientsLogos;

  return (
    <section id='clients' className='max-w-360 m-auto flex flex-col'>
      <div>
        <p className='font-bold text-md text-center lg:text-display-xs'>
          {headerText.title}
        </p>
      </div>
      <div className='relative py-5xl'>
        <SideFadeOverlay variant={isDark ? 'dark' : 'light'} />
        <div id='viewport' className='overflow-x-hidden'>
          <div id='track' className='animate-marquee flex w-max'>
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className='cursor-pointer grayscale hover:grayscale-0 pr-6xl'
              >
                <logo.logo />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
