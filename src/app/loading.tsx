import {Preloader} from '~shared/ui/Preloader';
import {PageWrapper} from '~app/page-wrapper';

export default function Loading() {
  return (
    <PageWrapper>
      <Preloader />
    </PageWrapper>
  );
}
