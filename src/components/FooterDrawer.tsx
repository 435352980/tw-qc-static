import React, { FC } from 'react';

import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { DrawerProps } from '@material-ui/core/Drawer';
import MaterialSvg from '@/svgIcons/MaterialSvg';
import WeaponSvg from '@/svgIcons/WeaponSvg';
import HatSvg from '@/svgIcons/HatSvg';
import ArmorSvg from '@/svgIcons/ArmorSvg';
import JewelrySvg from '@/svgIcons/JewelrySvg';
import WingSvg from '@/svgIcons/WingSvg';
import BadgeSvg from '@/svgIcons/BadgeSvg';

const listConfig = [
  { key: 'weapon', name: '武器', icon: <WeaponSvg /> },
  { key: 'hat', name: '头盔', icon: <HatSvg /> },
  { key: 'armor', name: '衣服', icon: <ArmorSvg /> },
  { key: 'jewelry', name: '饰品', icon: <JewelrySvg /> },
  { key: 'wing', name: '翅膀', icon: <WingSvg /> },
  { key: 'material', name: '材料', icon: <MaterialSvg /> },
  { key: 'badge', name: '徽章', icon: <BadgeSvg /> },
];

interface FooterDrawerProps extends DrawerProps {
  onItemClick: (key: string) => void;
}

const FooterDrawer: FC<FooterDrawerProps> = ({ onItemClick, ...props }) => (
  <Drawer {...props}>
    <List component="nav">
      {listConfig.map(({ key, name, icon }) => {
        return (
          <ListItem key={key} alignItems="center" button onClick={() => onItemClick(key)}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>{name}</ListItemText>
          </ListItem>
        );
      })}
    </List>
  </Drawer>
);

export default FooterDrawer;
