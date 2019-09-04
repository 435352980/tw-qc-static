import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button } from '@material-ui/core';
import ModelViewer from 'mdx-m3-viewer';
import useWindowSize from '@/hooks/useWindowSize';

import setupCamera from './camera';
const handlers = ModelViewer.viewer.handlers;
const pathSolver = path => [
  'resources/' +
    path
      .replace('Replaceabletextures', 'ReplaceableTextures')
      .replace('replaceabletextures', 'ReplaceableTextures')
      .replace('splats', 'Splats')
      .replace('Teamglow', 'TeamGlow')
      .replace('textures', 'Textures')
      .replace('BLP', 'blp'),
  path.substr(path.lastIndexOf('.')),
  true,
];

const useStyles = makeStyles({
  animeBtn: {
    textTransform: 'none',
  },
});

const MdxViewer = ({ name = '' }) => {
  const classes = useStyles();
  const viewerRef = useRef(null);
  const [instance, setInstance] = useState(null);
  const [animations, setAnimations] = useState([]);
  const { innerWidth, innerHeight } = useWindowSize();
  const onChangeAnimate = (index = 0) => {
    // console.log(index);
    instance.setSequence(index);
  };
  useEffect(() => {
    if (!viewerRef.current) {
      return;
    }
    let viewer = new ModelViewer.viewer.ModelViewer(viewerRef.current);
    let scene = viewer.addScene();
    // Check camera.js!
    setupCamera(scene);
    viewer.addHandler(handlers.mdx);
    let model = viewer.load(name, pathSolver);
    model.whenLoaded().then(model => {
      // Assuming this is an MDX/M3 model, let's print all of its animation names.
      let instance = model.addInstance();
      setInstance(instance);
      instance.setScene(scene);
      instance.setSequence(
        model.sequences.findIndex(seq => seq.name.toLowerCase().includes('stand')),
      );
      instance.setSequenceLoopMode(2);
      instance.uniformScale(0.5);
      // console.log(model, instance);
      setAnimations(model.sequences.map(seq => seq.name));
      const step = () => {
        viewer.updateAndRender();
        requestAnimationFrame(step);
      };
      step();
    });
  }, [viewerRef, name]);
  if (!name) {
    return <div />;
  }
  return (
    <>
      <select onChange={e => onChangeAnimate(parseInt(e.target.value, 10))}>
        {animations.map((name, index) => (
          <option key={index} value={index}>
            {name}
          </option>
        ))}
      </select>
      <canvas ref={viewerRef} style={{ width: innerWidth, height: innerHeight - 40 }} />
    </>
  );
};

export default MdxViewer;
