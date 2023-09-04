
import styles from '../styles/Home.module.css'
import CandlestickChart from './components/Candlestic'
import CandlestickChartV2 from './components/CandleStickV2'
import ChartComponent from './components/chart_component'
import ChartContents from './components/chat_contents'
import HeartIcon from '../public/chart_assets/heart-icon.png';
import Image from 'next/image';
import Chartright from './components/chart_right';

import Chartleft from './components/chart_data/chart_left'
import LineChart from './components/LineChartV2' 

import TradingChart from './components/TradingView'
export default function Home()

{
    return(
        
        <div>
            {/* <ChartComponent /> */}

            {/* <TradingChart /> */}


            <div className = {styles.grid_main}>

                <Chartleft />
                <CandlestickChartV2 />
                <ChartContents />
                <Chartright />



               

            </div>


             
        </div>
    )



}