import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Fcard() {
  return (
    <Card style={{ width: '100%', height: '10%', zIndex:1, paddingTop:'10%', position: 'relative', left: "300px" }}>
      <Card.Body>

        <Button variant="primary">Go somewhere</Button>
        
      </Card.Body>
    </Card>
  );
}

export default Fcard;