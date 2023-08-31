import styles from '../../styles/chart.module.css'
import Image from 'next/image';
import searchIcon from '../../public/assets/search-icon.png'
import addIcon from '../../public/assets/add-icon.png';

export default function Nav()
{ 

    return ( 
        <>

            <nav className = "navigation_container">

                <div className = "flex_row padding_5">
                    <span className = "logo_container">
                    </span>
                    <h2>bamboo</h2>

                </div>

                <div className = "flex_row padding_5">
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


                </nav>

      


        </>


    )


}