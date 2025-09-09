"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <NavbarLayoutFloatingInline
        navItems={[
          { name: '#hero', id: 'hero' },
          { name: '#about', id: 'about' },
          { name: '#how-to-buy', id: 'how-to-buy' },
          { name: '#tokenomics', id: 'tokenomics' },
          { name: '#footer', id: 'footer' }
        ]}
        buttonText="Learn More"
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to PawPup MemeCoin!"
          subtitle="Join the cutest coin community on the blockchain!"
          contractAddress="0x1234...ABCD"
          copyButtonText="Copy Address"
          copiedText="Copied!"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="About PawPup"
          descriptions={[
            "PawPup is a community-driven meme coin that embodies the fun and playful nature of pets.",
            "Join our growing community and participate in our exciting events!"
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="simple"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics
          title="Tokenomics Overview"
          description="Discover the fundamental metrics behind PawPup MemeCoin."
          kpiItems={[
            { value: "1M", description: "Total Supply" },
            { value: "80%", description: "Community Holdings" },
            { value: "5%", description: "Marketing Fund" },
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="PawPup Logo"
          columns={[
            { items: [{ label: 'Home', onClick: () => {} }, { label: 'About', onClick: () => {} }] },
            { items: [{ label: 'How to Buy', onClick: () => {} }, { label: 'Tokenomics', onClick: () => {} }] },
            { items: [{ label: 'Contact', onClick: () => {} }, { label: 'Privacy Policy', onClick: () => {} }] }  
          ]}
          logoText="PawPup MemeCoin"
        />
      </div>
    </SiteThemeProvider>
  );
}
