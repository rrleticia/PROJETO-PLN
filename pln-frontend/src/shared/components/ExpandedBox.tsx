import { Box } from '@mui/material';

interface IExpandedBoxProps {
  type?: string;
  height?: string;
  width?: string;
  mainAxis?: string;
  crossAxis?: string;
  spaceCrossAxis?: string;
  children: React.ReactNode;
}

export const ExpandedBox: React.FC<IExpandedBoxProps> = ({
  type,
  height,
  width,
  mainAxis,
  crossAxis,
  spaceCrossAxis,
  children,
}) => {
  return (
    <Box
      sx={{
        height: height ?? '100vh',
        width: width ?? '100vw',

        display: 'flex',
        flex: 1,
        flexGrow: 1,
        flexDirection: type ?? 'column',

        justifyContent: mainAxis ?? 'flex-start',
        alignItems: crossAxis ?? 'flex-start',
        alignContent: spaceCrossAxis ?? 'flex-start',
      }}
    >
      {children}
    </Box>
  );
};
