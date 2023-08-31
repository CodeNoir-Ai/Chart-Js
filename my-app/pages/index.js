
import styles from '../styles/Home.module.css'
import CandlestickChart from './components/Candlestic'
import CandlestickChartV2 from './components/CandleStickV2'
import ChartComponent from './components/chart_component'
import ChartContents from './components/chat_contents'
import HeartIcon from '../public/chart_assets/heart-icon.png';
import Image from 'next/image';

import Chartleft from './components/chart_data/chart_left';
import Chartright from './components/chart_right';

import LineChart from './components/LineChart'


export default function Home()

{
    return(
        
        <div>
            <ChartComponent />

            <div className = {styles.grid_main}>

                <Chartleft />
                <CandlestickChart />
                <ChartContents />
                <Chartright />



               

            </div>


             
        </div>
    )



}