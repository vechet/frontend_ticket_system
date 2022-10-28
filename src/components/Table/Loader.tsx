import React from 'react';
import {CircularProgress} from '@mui/material';
import styled from 'styled-components';
const Loader = React.memo(() => {
  return (
    <StyledLoading>
      <CircularProgress color="primary" size={25} />
      <span>Loading...</span>
    </StyledLoading>
  );
});

const StyledLoading = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 15px;
  padding-top: 15px;
  span {
    font-size: 10px;
  }
`;
export default Loader;
