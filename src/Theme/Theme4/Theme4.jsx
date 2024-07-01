import React, { useContext } from 'react';
import { ChakraProvider, CSSReset, extendTheme, Box, VStack, Heading, Text, Badge } from '@chakra-ui/react';
import './theme2.css'; // You can create a separate CSS file for this theme if needed
import { ImLocation } from 'react-icons/im';
import { GrMail } from 'react-icons/gr';
import { BsFillTelephoneFill } from 'react-icons/bs';
import ResumeContext from '../../Context/ResumeContext';
 
const theme = extendTheme({
  fonts: {
    heading: 'Montserrat, sans-serif', // Change the font for Theme2
    body: 'Roboto, sans-serif', // You can customize the font for body text
  },
  colors: {
    primary: '#9b59b6', // Change the primary color
    secondary: '#3498db', // Change the secondary color
    accent: '#e74c3c', // Change the accent color
  },
});
 
const Theme4 = (props) => {
  // Reuse ResumeContext and other logic from Theme1
  const { themeData, componentRef } = props;
  const { name, profile, address, phone, email, skill } = themeData.personalData;
  const { projectTitles, projectDesc } = themeData.projectData;
  const { educationTitles, educationDesc } = themeData.educationData;
  const { workTitles, workDesc } = themeData.workData;
  const { awards } = themeData.awardData;
 
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box p={8}>
        <VStack align="start" spacing={4}>
          {/* Your custom theme-specific components */}
          <Heading as="h1" size="xl">
            {name}
          </Heading>
          <Text fontSize="lg" className="custom-text">
            {/* Your custom styles */}
            <span className="custom-icon">
              <ImLocation />
              {address}
            </span>
            <span className="custom-icon">
              <GrMail />
              {email}
            </span>
            <span className="custom-icon">
              <BsFillTelephoneFill />
              {phone}
            </span>
          </Text>
          <Heading as="h3" size="md" className="custom-heading">
            {profile}
          </Heading>
          {/* ... Other sections with your custom styles */}
        </VStack>
      </Box>
    </ChakraProvider>
  );
};
 
export default Theme4;