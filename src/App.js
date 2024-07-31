import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import { Container, Navbar, Nav, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import './style.css';
import './App.css'

function App() {
  const [category, setCategory] = useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleGenerate = () => {
    // Logic to generate flashcards based on the selected category
    console.log(`Generating flashcards for category: ${category}`);
  };

  return (
    <Container className="mt-5">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className='header-name' href="#">

           Flashcard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Form inline>
              <FormControl as="select" value={category} onChange={handleCategoryChange} className="mr-sm-2">
                <option value="">Select Category</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                {/* Add more categories as needed */}
              </FormControl>
            </Form>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row className="justify-content-center mt-6 vh-100">
        <Col md={8}>
          <h1 className="text-center mt-4">PMP® concept Flashcard </h1>
         
          <FlashcardList category={category} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
