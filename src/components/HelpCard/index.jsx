import Css from './HelpCard.module.css'

export const HelpCard = ({title}) =>{
    return(
       <div className={Css.HelpCard}>
                <h1>{title}</h1>
       </div>
    );

}