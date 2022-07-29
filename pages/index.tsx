import AppLayout from "@lib/components/Layouts/AppLayout"

const features = [
  {
    name: 'Anne Bowles',
    description:
      'Hello! I am an actor who spent a decade in New York performing on Broadway, on television, and many regional theaters across the country. I have an amazing husband, Dan, and we love going wherever work takes us!',
    icon: '/assets/profile/AnneBowles-profile.jpg',
  },
  {
    name: 'Rosemary Kim',
    description:
      'Rosemary is currently living in New York City to persue her dream of acting. Skilled in the many languages, she brings her talent to the main screen.',
    icon: 'assets/profile/RosemaryKim-profile.jpg',
  },
  {
    name: 'Todd Olson',
    description:
      'Todd escaped soulless corporate America mid-COVID in order to pursue his dream of doing comedy on Zoom.  He is a Second City Conservatory performer / student and a founding member of No Shame. ',
    icon: 'assets/profile/ToddOlson-profile.jpg',
  },
  {
    name: 'Gonzalo Vazquez',
    description:
      'Coming to you from Toronto, Canada. Gonzalo is a developer by day and improvisor by night. Founding member of No Shame.',
    icon: 'assets/profile/GonzaloVazquez-profile.jpg',
  },
  {
    name: 'Felipe Fernandez',
    description:
      'Felipe Fernandez is a Front End Web Developer who hails from Southern California and is currently studying improv and writing at Second City and Upright Citizen\'s Brigade.',
    icon: 'assets/profile/Felipe-profile.jpg',
  },
  {
    name: 'Quinn Hemmons',
    description:
      'You can find me at Instagram and Twitter @qhemmons.',
    icon: 'assets/profile/Quinn-profile.jpg',
  },
  {
    name: 'Andy Syron',
    description:
      'I am a special kind of peach, the one you never want to put down. Andy is tuning in coming from Boston, and fell in love with acting and improv at a young age. After a successful life, she is now persuing her dreams of making you laugh and cry at the same time.',
    icon: 'assets/profile/Andy-profile.jpg',
  },

]

const shows = [
  {
    name: "Improv Extravanganza",
    image: "assets/shows/show_1.png",
    links: "https://www.youtube.com/watch?v=XSr209c9t2c&ab_channel=AndyAbramson"
  },
  {
    name: "Improv Extravanganza 2",
    image: "assets/shows/show_2.png",
    links: "https://www.youtube.com/watch?v=b4xWu9bk494&t=3521s&ab_channel=AndyAbramson"
  }
]
const Page = () => {
  return (
    <>
      <AppLayout>
        {/* <blockquote> */}

        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">100% Non-Refundable Comedy</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Welcome to NoShame.LIVE
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                We are a group who originated from Second City Traning Center. We perform short and long form improv.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 mt-6">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Are you ready to laugh?</span>
              <span className="block text-indigo-600">Watch our next show!</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="https://secondcity.zoom.us/webinar/register/WN_5FBLRiG3T1GGktCNrXkLPQ"
                  target="_blank"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Register Now!
                </a>
              </div>
              <div className="ml-3 inline-flex">
                <br />
                <p className="text-center">Monday August 22, 2022 - 8:30pm to 9:00pm CT</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <p className="py-12 lg:text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            The Cast
          </p>
          <dl className="pt-10 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <img className="object-cover" src={feature.icon} />
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Our past shows
              </p>
            </div>
          </div>
        </div>

        <div className="py-12">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {shows.map((show) => (
              <div key={show.name} >
                <a
                  href={show.links}
                  target="_blank"
                  className="border-transparent text-base font-medium rounded-md text-black bg-indigo-600 hover:bg-indigo-700"
                >
                  <img className="object-cover" src={show.image} />
                  <p className="text-center">{show.name}</p>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* <blockquote> */}


      </AppLayout>
    </>
  );
};

export default Page;
