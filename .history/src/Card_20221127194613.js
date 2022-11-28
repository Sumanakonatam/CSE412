import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Fcard() {
  return (
    <Card style={{ width: '18rem', zIndex:1,  position: 'relative', left: "300px", blockSize: }}>
      <Card.Body>

        <Button variant="primary">Go somewhere</Button>
        
      </Card.Body>
    </Card>
  );
}

export default Fcard;