import { getMdxFiles } from '../constants/loaderMDX';
import dynamic from 'next/dynamic';

export default async function TeamCardsGallery() {
  const cardNames = await getMdxFiles('src/app/project/team/cards');

  return (
    <div className="container mx-auto max-w-screen-lg py-4">
      <h1 className="text-3xl font-bold text-center -mb-6">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 justify-center">
        {cardNames.map((name) => {
          const MDXComponent = dynamic(() => import(`../app/project/team/cards/${name}.mdx`));

          return (
            <div key={name} className="w-full max-w-[300px] transform transition-all hover:scale-105 -mb-14">
              <MDXComponent />
            </div>
          );
        })}
      </div>
    </div>
  );
}
