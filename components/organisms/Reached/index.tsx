import AchievedItem from '../../molecules/AchievedItem';

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <AchievedItem data="290M+" description="Players Top Up" />
          <AchievedItem data="12.500" description="Games Available" />
          <AchievedItem data="99,9%" description="Happy Players" />
          <AchievedItem data="4.7" description="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}
