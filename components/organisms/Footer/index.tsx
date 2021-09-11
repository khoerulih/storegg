import Image from 'next/image';
import FooterItem from '../../molecules/FooterItem';

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="/" className="mb-30">
                <Image src="/icon/logo.svg" width={60} height={60} />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <FooterItem
                  sectionTitle="Company"
                  link1="About Us"
                  link2="Press Release"
                  link3="Term of Use"
                  link4="Privacy & Policy"
                />
                <FooterItem
                  sectionTitle="Support"
                  link1="Refund Policy"
                  link2="Unlock Rewards"
                  link3="Live Chatting"
                />
                <FooterItem
                  sectionTitle="Connect"
                  link1="hi@store.gg"
                  href1="mailto: hi@store.gg"
                  link2="team@store.gg"
                  href2="mailto: team@store.gg"
                  link3="Pasific 12, Jakarta Selatan"
                  href3="http://maps.google.com/?q=Pasific 12, Jakarta Selatan"
                  link4="021 - 1122 - 9090"
                  href4="tel: 02111229090"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
