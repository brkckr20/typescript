import {FC} from 'react'

/* props type tanımlamaları */
type CardProps = {
    fullname: string,
    age? : string | number, // number veya string olabilir demek
    test? : string
}
                                            //default props
const Card:FC<CardProps> = ({age,fullname,test = "Bilinmiyor"}) => {
    return (
        <div className='card'>
            <p>{fullname}</p>
            <p>{age}</p>
            <p>{test}</p>
        </div>
)}

export default Card