import * as React from 'react';
import '@google/model-viewer';
import dynamic from 'next/dynamic';

const AvatarViewer: React.FC<{ glbSource: string; className?: string }> = ({ glbSource, className }) => {
  return (
    <div className={className} id="card">
      <model-viewer
        src={glbSource}
        alt="A 3D model of a created avatar"
        shadow-intensity="1"
        camera-controls
        ar
      />
    </div>
  );
};

export default dynamic(() => Promise.resolve(AvatarViewer), { ssr: false });
