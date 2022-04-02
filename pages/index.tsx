import AppLayout from "@lib/components/Layouts/AppLayout"
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    name: 'Camilla Clark',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Rosemary Kim',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Todd Olson',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Gonzalo Vazquez',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon,
  },
  {
    name: 'Felipe Fernandez',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon,
  },
  {
    name: 'Quinn Hemmons',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon,
  },

]

const shows = [
  {
    name: "Improv Extravanganza",
    image: "https://picsum.photos/800/600",
    source: "Twitter"
  },
  {
    name: "Improv Extravanganza 2",
    image: "https://picsum.photos/800/600",
    source: "Twitter"
  },
  {
    name: "Twitter Spaces",
    image: "https://picsum.photos/800/600",
    source: "Twitter"
  },
  {
    name: "Podcast",
    image: "https://picsum.photos/800/600",
    source: "Twitter"
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
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">100% Non-Refundable Improv Comedy</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Welcome to NoShame.LIVE
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                We are a group who originated from Second City Comedy Club. We perform short and long for improv.
              </p>
            </div>
          </div>
        </div>

        <div className="py-12">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {shows.map((show) => (
              <div key={show.name} >
                <img className="object-cover" src={show.image} />
                <p className="text-center">{show.name}</p>
              </div>
            ))}
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
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
        </div>


        <div className="bg-gray-50 mt-6">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Are you ready to laugh?</span>
              <span className="block text-indigo-600">Subcribe today!</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Watch Now!
                </a>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* <blockquote> */}


      </AppLayout>
    </>
  );
};

export default Page;
