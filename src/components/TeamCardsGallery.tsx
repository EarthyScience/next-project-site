import React from 'react';
import { getMdxFiles, importMdxComponent } from '../constants/loaderMDX';

export default async function TeamCardsGallery() {
  const cardNames = await getMdxFiles('src/app/project/team/cards');
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {await Promise.all(cardNames.map(async (name) => {
          const MDXModule = await importMdxComponent(name);
          
          return MDXModule ? (
            <div 
              key={name} 
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105"
            >
              <MDXModule.default />
            </div>
          ) : null;
        }))}
      </div>
    </div>
  );
}