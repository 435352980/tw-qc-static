import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { TypographyProps } from '@material-ui/core/Typography';

interface IconLabelProps {
  icon: string;
  text: string | React.ReactNode;
  onRootClick?: ((e: React.MouseEvent) => void) | undefined | null;
  onImageClick?: ((e: React.MouseEvent) => void) | undefined | null;
  onTextClick?: ((e: React.MouseEvent) => void) | undefined | null;
  rootProps?: { [propName: string]: any };
  imageProps?: { [propName: string]: any };
  textProps?: TypographyProps;
}

const useStyles = makeStyles({
  root: (props: any) => ({
    display: 'inline-block',
    textAlign: 'center',
    cursor: props.onRootClick ? 'pointer' : 'default',
  }),
  img: (props: any) => ({
    width: 32,
    height: 32,
    cursor: props.onImageClick ? 'pointer' : 'default',
  }),
  text: (props: any) => ({ cursor: props.onTextClick ? 'pointer' : 'default' }),
});

const IconLabel: React.FC<IconLabelProps> = ({
  icon,
  text,
  onRootClick,
  onImageClick,
  onTextClick,
  rootProps,
  imageProps,
  textProps,
}) => {
  const classes = useStyles({ onRootClick, onImageClick, onTextClick });

  const handleClick = (callback: Function | undefined | null) => (e: React.MouseEvent) => {
    if (callback) {
      callback(e);
    }
  };

  return (
    <div className={classes.root} onClick={handleClick(onRootClick)} {...rootProps}>
      <img src={icon} className={classes.img} onClick={handleClick(onImageClick)} {...imageProps} />
      <Typography
        variant="body2"
        component="div"
        className={classes.text}
        onClick={handleClick(onTextClick)}
        {...textProps}
      >
        {text}
      </Typography>
    </div>
  );
};

export default IconLabel;
