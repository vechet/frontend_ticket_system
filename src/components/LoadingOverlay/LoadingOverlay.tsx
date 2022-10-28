import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

interface IProps {
  loading: boolean;
  sizeProgress?: '';
}

const LoadingOverlay: React.FC<IProps> = React.memo((props: IProps) => {
  const {loading} = props;

  return (
    <StyledBackdrop
      sx={{
        zIndex: (theme: any) => theme.zIndex.drawer + 1,
      }}
      open={loading}>
      <CircularProgress color="inherit" />
    </StyledBackdrop>
  );
});

const StyledBackdrop = styled(Backdrop)`
  && {
    background-color: rgba(0, 0, 0, 0.05);
    color: gray;
    position: absolute;
  }
`;

export default LoadingOverlay;
