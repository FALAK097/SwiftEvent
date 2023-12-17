// import CategoryFilter from '@/components/shared/CategoryFilter';
// import Collection from '@/components/shared/Collection'
// import Search from '@/components/shared/Search';
import { Button } from '@/components/ui/button';
// import { getAllEvents } from '@/lib/actions/event.actions';
// import { SearchParamProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="py-5 bg-contain bg-primary-50 bg-dotted-pattern md:py-10">
        <div className="grid grid-cols-1 gap-5 wrapper md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Epic Events Begin Here: Connect, Celebrate, Host with Us!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Book and learn helpful tips from 3,168+ mentors in world-class
              companies with our global community.
            </p>
            <Button size="lg" asChild className="w-full button sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section
        id="events"
        className="flex flex-col gap-8 my-8 wrapper md:gap-12">
        <h2 className="h2-bold">
          Trusted by <br /> Thousands of Events
        </h2>

        <div className="flex flex-col w-full gap-5 md:flex-row">
          {/* <Search />
          <CategoryFilter /> */}
          Search Category Filter
        </div>

        {/* <Collection 
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />  */}
      </section>
    </>
  );
}
