import * as React from 'react';
import '@google/model-viewer';

const AvatarViewer: any = ({ glbSource, className }) => {
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

export default AvatarViewer;
