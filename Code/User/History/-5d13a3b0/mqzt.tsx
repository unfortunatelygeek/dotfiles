'use client';

import AboutStoreTile from './avatar-name';

export default function Profile() {
  return (
    <>
      <div className="--background flex min-h-full flex-grow rounded-3xl p-2 backdrop-brightness-110">
        <AboutStoreTile />
      </div>
    </>
  );
}
