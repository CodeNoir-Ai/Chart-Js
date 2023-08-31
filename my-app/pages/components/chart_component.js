import styles from '../../styles/chart.module.css'
import Image from 'next/image';
import searchIcon from '../../public/assets/search-icon.png'
import addIcon from '../../public/assets/add-icon.png';
import HeartIcon from '../../public/chart_assets/heart-icon.png'
import DownIcon from '../../public/icons/down_arrow.png'
import CandleStick from '../../public/icons/candlestick-chart.png'
import IncreaseIcon from '../../public/icons/increase-icon.png'
import GraphIcon from '../../public/icons/graph-increase.png';
import Clock from '../../public/icons/clock-icon.png';
import Gear from '../../public/icons/gear-icon.png';
import Camera from '../../public/icons/cameria-icon.png';
import Rewind from '../../public/icons/rewind-icon.png';
import Square from '../../public/icons/squre-icon.png';


export default function ChartComponent() { 

    return(

<div>
        <div className =  {`${styles.flex_row} ${styles.flex_betweem} ${styles.nav_container}`}>
        <div className = {`${styles.flex_row} ${styles.padding_5}`}>

            <div className = {styles.logo_wrapper}>
            <span className = "logo_container">
                    </span>
                    <h2>bamboo</h2>
            </div>
                 

            <div className = {styles.navigation_wrapper}>
            <div className = {`${styles.render_tag_nav } ${styles.selected}`}>
                            virtual trading
                        </div> 
                    <div className = {`${styles.render_tag_nav }`}>
                            my chart
                        </div> 
                    <div className = {`${styles.render_tag_nav }`}>
                            ideas
                        </div> 
                    <div className = {`${styles.render_tag_nav } `}>
                            analysis
                        </div> 
                    <div className = {`${styles.render_tag_nav } `}>
                            education
                        </div> 
                    <div className = {`${styles.render_tag_nav } `}>
                            connect
                        </div> 
                    <div className = {`${styles.render_tag_nav } `}>
                            pandal
                        </div> 
                    
            </div>
                 


                </div>

           

                        <div className = {`${styles.flex_row} ${styles.padding_5}`}>
                    <span className = "profile_container">
                        
                    </span>
                    
                    <div className = "hamburger_menu">
                        <div className = "header_toggle">
                            
                        </div>
                        <div className = "header_toggle">
                            
                        </div>
                        <div className = "header_toggle">
                            
                        </div>

                    </div>
                </div>

            </div>

        <div className = {styles.grid_component}>




        <div className = {styles.button_container}>
            <div className = {styles.icon_container}>
            <Image src = {HeartIcon} width = {100} height={100} />

            </div>
        </div>
    
   
    <div className = {styles.flex_grow}>
    <div className = {styles.render_new_chart_container}>
            <div className = {styles.render_wrapper}>
               
                <div className = {`${styles.render_tag } ${styles.selected}`}>
                    EURUSD
                </div>
                <div className = {styles.render_tag}>
                    US30
                </div>
                <div className = {styles.render_tag}>
                    BTCUSD
                </div>
                <div className = {styles.render_tag}>
                    XAUSD
                </div>
                <div className = {styles.render_tag}>
                    AAPL
                </div>
                <div className = {styles.render_tag}>
                    GBPJPY
                </div>
                <div className = {styles.render_tag}>
                    SPX500
                </div>
                <div className = {styles.render_tag}>
                    GER30
                </div>
                <div className = {styles.render_tag}>
                    <div className = {styles.add_image_icon}>
                    <Image src = {addIcon} width={100} height={100} />

                    </div>
                </div>
            </div>

        </div>

        <div className = {styles.chart_selector_wrapper}>
        <div className = {styles.chart_selector}>

<div className = {styles.search_bar}>
    
    <div className = {styles.search_icon}>
        <Image className = {styles.search_imageContainer} src = {searchIcon} width={100} height={100} />
    </div>

    EURO/USD
</div>
<button className = {styles.btn_selected} onClick={() => changeTimeframe('1m')}>1m</button>
<button onClick={() => changeTimeframe('5m')}>5m</button>
<button onClick={() => changeTimeframe('15m')}>15m</button>
<button onClick={() => changeTimeframe('30m')}>30m</button>
<button onClick={() => changeTimeframe('1h')}>1h</button>
<button onClick={() => changeTimeframe('4h')}>4h</button>
<button onClick={() => changeTimeframe('D')}>D</button>
<button onClick={() => changeTimeframe('W')}>W</button>
<button onClick={() => changeTimeframe('M')}>M</button>


<div className = {styles.chart_dropdown_image}>
<Image src = {DownIcon} width={100} height={100} />
</div>

<div className = {styles.spacing_container}>
    <div className = {styles.chart_dropdown_image_large}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"></path><path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"></path><path d="M9 8v12h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5z"></path><path d="M10 4h1v3.5h-1zm0 16.5h1V24h-1z"></path></svg>    </div>
    <div className = {styles.chart_dropdown_image_large}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="m25.39 7.31-8.83 10.92-6.02-5.47-7.16 8.56-.76-.64 7.82-9.36 6 5.45L24.61 6.7l.78.62Z"></path></svg>    </div>
   
</div>

<div className = {styles.spacing_container}>
<div className = {styles.chart_dropdown_image_large}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M6 12l4.8-4.8a1 1 0 0 1 1.4 0l2.7 2.7a1 1 0 0 0 1.3.1L23 5"></path><path fill="currentColor" fill-rule="evenodd" d="M19 12a1 1 0 0 0-1 1v4h-3v-1a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v2H7a1 1 0 0 0-1 1v4h17V13a1 1 0 0 0-1-1h-3zm0 10h3v-9h-3v9zm-1 0v-4h-3v4h3zm-4-4.5V22h-3v-6h3v1.5zM10 22v-3H7v3h3z"></path></svg>    </div>
    <span className ="smallText">indicators</span>
    <div className = {`${styles.chart_dropdown_image} ${styles.marginRight_10}`}>
<Image src = {DownIcon} width={100} height={100} />
</div>
</div>


</div>
        <div className = {styles.chart_selector}>
        <div className = {styles.spacing_container}>
<div className = {styles.chart_dropdown_image_large}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M8.5 6a3.5 3.5 0 0 0-2.926 5.422 8.527 8.527 0 0 1 4.848-4.848A3.482 3.482 0 0 0 8.5 6zM4 9.5c0 1.19.463 2.274 1.218 3.079A8.5 8.5 0 0 0 13.5 23h.5v-1h-.5a7.5 7.5 0 1 1 7.5-7.5v.5h1v-.5a8.53 8.53 0 0 0-.218-1.921 4.5 4.5 0 0 0-6.36-6.36 8.527 8.527 0 0 0-3.843-.001A4.5 4.5 0 0 0 4 9.5zm12.578-2.926a8.527 8.527 0 0 1 4.848 4.848 3.5 3.5 0 0 0-4.848-4.848zM13 14V9h1v6h-4v-1h3zm6 6h-4v1h4v4h1v-4h4v-1h-4v-4h-1v4z"></path></svg>    </div>
    <span className ="smallText">Alert</span>

<div className = {styles.chart_dropdown_image_large}>
        <Image src = {Rewind} width={100} height={100} />
    </div>
    <span className ="smallText">Replay</span>

</div>
        </div>
        <div className = {styles.chart_selector}>
        <div className = {styles.spacing_container}>
<div className = {styles.chart_dropdown_image_large}>
        <Image src = {Square} width={100} height={100} />
    </div>
    <span className ="smallText">Trading Chart</span>
    <div className = {`${styles.chart_dropdown_image} ${styles.marginRight_10}`}>
<Image src = {DownIcon} width={100} height={100} />
</div>
<div className = {styles.chart_dropdown_image_large}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="black" d="M15 11v4l1-1.5 2.33-3.5.67-1h-3V4l-1 1.5L12.67 9 12 10h3v1Zm2-7v4h2a1 1 0 0 1 .83 1.55l-4 6A1 1 0 0 1 14 15v-4h-2a1 1 0 0 1-.83-1.56l4-6A1 1 0 0 1 17 4ZM5 13.5a7.5 7.5 0 0 1 6-7.35v1.02A6.5 6.5 0 1 0 18.98 13h1a7.6 7.6 0 0 1-1.83 5.44l4.7 4.7-.7.71-4.71-4.7A7.5 7.5 0 0 1 5 13.5Z"></path></svg></div>
<div className = {styles.chart_dropdown_image_large}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="black" fill-rule="evenodd"><path fill-rule="nonzero" d="M14 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path><path d="M5.005 16A1.003 1.003 0 0 1 4 14.992v-1.984A.998.998 0 0 1 5 12h1.252a7.87 7.87 0 0 1 .853-2.06l-.919-.925c-.356-.397-.348-1 .03-1.379l1.42-1.42a1 1 0 0 1 1.416.007l.889.882A7.96 7.96 0 0 1 12 6.253V5c0-.514.46-1 1-1h2c.557 0 1 .44 1 1v1.253a7.96 7.96 0 0 1 2.06.852l.888-.882a1 1 0 0 1 1.416-.006l1.42 1.42a.999.999 0 0 1 .029 1.377s-.4.406-.918.926a7.87 7.87 0 0 1 .853 2.06H23c.557 0 1 .447 1 1.008v1.984A.998.998 0 0 1 23 16h-1.252a7.87 7.87 0 0 1-.853 2.06l.882.888a1 1 0 0 1 .006 1.416l-1.42 1.42a1 1 0 0 1-1.415-.007l-.889-.882a7.96 7.96 0 0 1-2.059.852v1.248c0 .56-.45 1.005-1.008 1.005h-1.984A1.004 1.004 0 0 1 12 22.995v-1.248a7.96 7.96 0 0 1-2.06-.852l-.888.882a1 1 0 0 1-1.416.006l-1.42-1.42a1 1 0 0 1 .007-1.415l.882-.888A7.87 7.87 0 0 1 6.252 16H5.005zm3.378-6.193l-.227.34A6.884 6.884 0 0 0 7.14 12.6l-.082.4H5.005C5.002 13 5 13.664 5 14.992c0 .005.686.008 2.058.008l.082.4c.18.883.52 1.71 1.016 2.453l.227.34-1.45 1.46c-.004.003.466.477 1.41 1.422l1.464-1.458.34.227a6.959 6.959 0 0 0 2.454 1.016l.399.083v2.052c0 .003.664.005 1.992.005.005 0 .008-.686.008-2.057l.399-.083a6.959 6.959 0 0 0 2.454-1.016l.34-.227 1.46 1.45c.003.004.477-.466 1.422-1.41l-1.458-1.464.227-.34A6.884 6.884 0 0 0 20.86 15.4l.082-.4h2.053c.003 0 .005-.664.005-1.992 0-.005-.686-.008-2.058-.008l-.082-.4a6.884 6.884 0 0 0-1.016-2.453l-.227-.34 1.376-1.384.081-.082-1.416-1.416-1.465 1.458-.34-.227a6.959 6.959 0 0 0-2.454-1.016L15 7.057V5c0-.003-.664-.003-1.992 0-.005 0-.008.686-.008 2.057l-.399.083a6.959 6.959 0 0 0-2.454 1.016l-.34.227-1.46-1.45c-.003-.004-.477.466-1.421 1.408l1.457 1.466z"></path></g></svg></div>

<div className = {styles.chart_dropdown_image_large}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="black" d="M8.5 6A2.5 2.5 0 0 0 6 8.5V11h1V8.5C7 7.67 7.67 7 8.5 7H11V6H8.5zM6 17v2.5A2.5 2.5 0 0 0 8.5 22H11v-1H8.5A1.5 1.5 0 0 1 7 19.5V17H6zM19.5 7H17V6h2.5A2.5 2.5 0 0 1 22 8.5V11h-1V8.5c0-.83-.67-1.5-1.5-1.5zM22 19.5V17h-1v2.5c0 .83-.67 1.5-1.5 1.5H17v1h2.5a2.5 2.5 0 0 0 2.5-2.5z"></path></svg></div>

<div className = {styles.chart_dropdown_image_large}>
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="black"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.118 6a.5.5 0 0 0-.447.276L9.809 8H5.5A1.5 1.5 0 0 0 4 9.5v10A1.5 1.5 0 0 0 5.5 21h16a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 21.5 8h-4.309l-.862-1.724A.5.5 0 0 0 15.882 6h-4.764zm-1.342-.17A1.5 1.5 0 0 1 11.118 5h4.764a1.5 1.5 0 0 1 1.342.83L17.809 7H21.5A2.5 2.5 0 0 1 24 9.5v10a2.5 2.5 0 0 1-2.5 2.5h-16A2.5 2.5 0 0 1 3 19.5v-10A2.5 2.5 0 0 1 5.5 7h3.691l.585-1.17z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"></path></svg></div>

        <button className = {styles.publishBtn}>Publish</button>
</div>
        </div>

        </div>

       

    </div>




        {/* Trakcer Portion of Chat Contentes, this styling tracks the data betweeen wins nad losses */}


   

        </div>

</div>

    )

    
} 