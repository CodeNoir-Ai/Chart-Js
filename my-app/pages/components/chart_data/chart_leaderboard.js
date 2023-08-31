import styles from '../../../styles/chart.module.css'

export default function ChartLeaderboard() {
    return(

        <div>
   <div className = {`${styles.inline_flex} ${styles.lower_padding}`}>
        <div className = {`${styles.render_tag} ${styles.dark_green}`}>
                    leaderboard
                </div>
                <div className =  {`${styles.render_tag} ${styles.dark_green}`}>
                    challenges
                </div>
                <div className =  {`${styles.render_tag} ${styles.dark_green}`}>
                    pay-to-play
                </div>

              


        </div>
        <div className = {styles.overflow_scroll}>
     

        <div className ={styles.data_contents}>
                    <div className = {`${styles.flex_row} ${styles.flex_between} ${styles.margin_top_5}`}>
                        URUSD

                   
                    <div className = {styles.inline_flex}>

                        <span>2,5000</span>
                    </div>
                </div>
                    <div className = {`${styles.flex_row} ${styles.flex_between} ${styles.margin_top_5} ${styles.grey}`}>
                        URUSD

                
                    <div className = {styles.inline_flex}>

                        <span>2,5000</span>
                    </div>
                </div>
                    <div className = {`${styles.flex_row} ${styles.flex_between} ${styles.margin_top_5}`}>
                        URUSD

                
                    <div className = {styles.inline_flex}>

                        <span>2,5000</span>
                    </div>
                </div>

                </div>

        </div>

        </div>


    )
}