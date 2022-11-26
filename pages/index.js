import Head from 'next/head'
import Image from 'next/image'
import Filters from './components/Filters'
import Map from './components/Map'
import {Row, Col} from 'antd'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <Row>
            <Col span={7}><Filters></Filters></Col>
            <Col span={17}><Map></Map></Col>
        </Row>
    </div>
  )
}
