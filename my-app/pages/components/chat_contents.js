import styles from '../../styles/chart.module.css'
import UpArrow from '../../public/chart_assets/up-arrow.png';
import Image from 'next/image';
import { style } from 'd3';
import ChartData from './chart_data/chart_wins';
import ChartLeaderboard from './chart_data/chart_leaderboard';
import ChatBox from './chart_data/chatbox';

export default function ChartContents() 
{ 

    return( 

        <>
            <div className = {styles.chart_contents_container}>
                <div className = {styles.chart_contents_wrapper}>

                        <div className = {styles.flex_row}>
                            <button className = {`${styles.largeBtn} ${styles.green}`}>
                                <div className = {styles.btnImage}>
                                    <Image src = {UpArrow} width={100} height={100} />
                                </div>
                            </button>
                            <button className = {`${styles.largeBtn} ${styles.red}`}>
                                <div className = {styles.btnImage}>
                                    <Image src = {UpArrow} width={100} height={100} />
                                </div>
                            </button>
                        </div>

                        <div className = {styles.flex_row}>
                        <div className = {`${styles.render_tag} ${styles.render_width}`}>
                    instant
                             </div>  
                        <div className = {`${styles.render_tag} ${styles.render_width}`}>
                    stop    
                             </div>  
                        <div className = {`${styles.render_tag} ${styles.render_width}`}>
                    limit
                             </div>  
                 

                        </div>

      
                        <div className = {styles.inline_flex}>
                            <p>virtual balance</p>
                            <p>usd</p>
                            <p>1,000,000.00</p>
                        </div>

                        <label id = {styles.small_text}>
                            Risk: Reward
                        </label>

                        <div className = {styles.grid_container}>

                        <div className = {styles.inline_flex}>
                            <span>%risk</span>
                                <span className = {styles.number_container}>
                                        <p>1%</p>
                                    </span> 

                        </div>
                       

                            <span>$risk</span>


                            <span>1,000,000.00</span>
                  
                        <div className = {styles.inline_flex}>
                            <span className={`${styles.flex_grow} ${styles.margin_right_2}`}>risk</span>
                                <span className = {styles.number_container}>
                                        <p>1%</p>
                                    </span> 

                        </div>
                       

                            <span>pip</span>


                            <span>1,000,000.00</span>
                  
                        <div className = {styles.inline_flex}>
                            <span className =  {styles.margin_right_2}>reward</span>
                                <span className = {styles.number_container}>
                                        <p>1%</p>
                                    </span> 

                        </div>
                       

                            <span>pips</span>


                            <span>10</span>
                  

                           
                        </div>

                   


                        <div className = {`${styles.inline_flex} ${styles.flex_center} ${styles.margin_top_10}`}>
                            <span className = {styles.med_text}>
                                LOT SIZE
                            </span>
                            <span className = {styles.med_text}>
                                5.4
                            </span>
                        </div>

                        
                    </div> 


                    <ChartData />
                    <ChartLeaderboard />
                    <ChatBox />


            </div>




        </>


    )

}