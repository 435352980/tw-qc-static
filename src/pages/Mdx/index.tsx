import React, { useState } from 'react';
import MdxViewer from '@/components/MdxViewer';

const mdxs = [
  'TohsakaRin',
  'Hakuman',
  'Assassin',
  'Micalela',
  'Gilgamesh',
  'sein',
  'Shinoa',
  'Berserker',
  'LibGirl',
  'CYT',
  'Sione',
  'DarkMage',
  'LSWeiss',
  'Edward',
  'Ryu',
  'huashi',
  'abi',
  'arcaneMage',
  'Reset_01',
  'Pikachu',
  'Uryu',
  'Shya',
  'Sharis',
  'Chaika',
  'Mayoi',
  'Beast_XH',
  'LS',
  'Desperado_fix7',
  'Youmu',
  'Kururu',
  'Jueviolace',
  'KagariAtsuko',
];

const Mdx = () => {
  const [name, setName] = useState('TohsakaRin');
  return (
    <>
      <select onChange={e => setName(e.target.value)}>
        {mdxs.map(model => (
          <option key={model} value={model}>
            {model}
          </option>
        ))}
      </select>
      <MdxViewer name={name ? `${name}.mdx` : ''} />
    </>
  );
};

export default Mdx;
