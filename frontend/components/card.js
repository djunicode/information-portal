

import React from 'react';
import Link from 'next/link';

const Card = ({title, content, imageUrl}) => {
  return (
    <div className='ml-10 mt-8'>
    <div class="group h-80 w-52 [perspective:900px]">
    <div class="relative h-full w-full rounded-lg shadow-lg transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div class="absolute inset-0">
        <img class="h-50 w-32 ml-10 mt-6 rounded-xl object-cover shadow-xl shadow-black/30" src="https://images.unsplash.com/photo-1562583489-bf23ec64651d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')" alt="" />
        <p class="text-lg mt-3 ml-5 font-bold">Prof Aruna D'souza</p>
          <p class="text-sm mt-1 ml-12">Assistant Professor</p>
          <p class="text-xs mt-1 font-thin ml-16">Joined on date</p>
      </div>
      <div class="absolute inset-0 h-full w-full rounded-lgl bg-white/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div class="flex min-h-full flex-col items-center justify-center">
          <h1 class="text-lg mt-5 font-bold">{title}</h1>
          <p class="text-md">{content}</p>
          <p class="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
        </div>
      </div>
    </div>
  </div>

</div>

  );
};

export default Card;


