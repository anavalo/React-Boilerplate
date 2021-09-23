import { useContext } from 'react';
import { ThemeContext } from 'context/ThemeContext';
import { MaxContainer } from 'commons/ui/styles';
import styled, { ThemeProvider } from 'styled-components';

const Test = () => {
    const theme = useContext(ThemeContext);

    return (
        <ThemeProvider theme={theme}>
            <MaxContainer>
                TEST
            </MaxContainer>
        </ThemeProvider>
    );
};

export default Test;
