
import styles from '../../../styles/chart.module.css'


export default function ChatBox()
{

    return ( 

        <div className = {styles.chat_bg}>

            <div className = {styles.chat_container}>
                <div className = {styles.chat_wrapper}>
                    <form className = {styles.chat_form}>
                        <input type = "text" placeholder='Ask me anythihng'></input>
                    </form>
                </div>
            </div>




        </div>


    )


}