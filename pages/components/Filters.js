import {
    Button,
    Card,
    Divider,
    Slider,
    Checkbox,
    Switch,
    Row,
    Col
} from 'antd';
import styles from './Filters.module.css'

function Filters() {
    return (
        <Card
        title={<h1>vizbnb</h1>}
        extra={<Button type="primary">↻ Refresh</Button>}>
            <h3>Hosts/Listings</h3>
            <Row>
                <Col span={4}><p class="inline">Hosts</p></Col>
                <Col span={4}><Switch defaultChecked /></Col>
                <Col span={16}><p class="inline">Listings</p></Col>
            </Row>
            <Divider />
            <h3>Price</h3>
            <Slider range min={0} max={500} defaultValue={[0, 500]} />
            <Divider />
            <h3>Room Type</h3>
            <Checkbox>Entire home/apt</Checkbox>
            <Checkbox>Private room</Checkbox>
            <Divider />
            <h3>Minimum Nights</h3>
            < Slider min={0} max={45} defaultValue={ 2 } />
        </Card>
        );
    }

    export default Filters;
