import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Fcard() {
  return (
    <Card style={{ width: '18rem', zIndex:1 }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          hello
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Fcard;