import PublicPageLayout from '@/core/layouts/PublicPageLayout';
import Grid from "@/modules/VenueDetailsPage/containers/Grid/Grid";
import About from "@/modules/VenueDetailsPage/containers/About/About";
import Banner from "@/modules/VenueDetailsPage/containers/Banner/Banner";
import Filter from "@/modules/VenueDetailsPage/containers/Filter/Filter";

export const VenueDetailsPage = (): JSX.Element => {
  return (
    <PublicPageLayout withoutWrapper>
      <Banner/>
      <About/>
      <Filter/>
      <Grid/>
    </PublicPageLayout>
  );
};
