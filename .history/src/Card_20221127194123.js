import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Fcard() {
  return (
    <Card style={{ width: '10%', height: '10%', zIndex:1, paddingTop:'10%', position: 'relative', left: "300px" }}>
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