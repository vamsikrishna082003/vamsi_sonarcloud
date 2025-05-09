import React from 'react';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

interface MainLayoutProps {
  children: React.ReactNode;
}

const PageWrapper = styled(Box)(({ theme }) =>({
  height: theme.spacing(37.5),
  padding: theme.spacing(2),
}));


const ContentWrapper = styled(Container)(({ theme }) => ({
  borderRadius: theme.spacing(1.5),
  padding: 2,
}));

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <PageWrapper>
      <ContentWrapper >
        {children}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default MainLayout;
