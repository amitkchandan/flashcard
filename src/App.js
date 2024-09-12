import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import { Container, Navbar, Nav, Form, FormControl, Row, Col } from 'react-bootstrap';
import './style.css';
import './App.css';

// Functional component named App
function App() {
  // useState hook to manage the category state
  const [category, setCategory] = useState('');

  // Handler function to update category state when user selects a different category
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  // Return JSX to render the component
  return (
    // Bootstrap Container to center content and add margin at the top
    <Container className="mt-5 ">
      {/* Bootstrap Navbar component */}
      <Navbar bg="light" expand="lg">
        {/* Brand name of the navbar */}
        <Navbar.Brand className='header-name' href="#">
           Flashcard
        </Navbar.Brand>
        {/* Navbar toggle button for responsive design */}
      
        {/* Navbar content that collapses on small screens */}
        
      
          <Nav className="ml-auto navv">
            {/* Form element for category selection */}
            <Form inline>
              {/* FormControl component used as a select dropdown */}
              <FormControl as="select" value={category} onChange={handleCategoryChange} className="mr-sm-2">
                {/* Option elements for dropdown menu */}
                <option value="">Select Category</option>
                <option value="Initiation">Initiation</option>
                <option value="Planning"> Planning</option>
                <option value="Execution">Execution</option>
                <option value="Monitoring & Controlling">Monitoring & Controlling</option>
                <option value="Closing">Closing</option>
                
                {/* Additional categories can be added here */}
              </FormControl>
            </Form>
          </Nav>
     
      </Navbar>
      {/* Row component for vertical alignment of child components */}
      <Row className="justify-content-center mt-6 vh-100">
        {/* Column component to center the content within the row */}
        <Col md={8}>
          {/* Heading element for the title of the page */}
          <h1 className="text-center mt-4">PMP® Concept Flashcard</h1>
          {/* FlashcardList component that will display flashcards based on selected category */}
          <FlashcardList category={category} />
        </Col>
      </Row>
    </Container>
  );
}

// Export the App component as the default export
export default App;
