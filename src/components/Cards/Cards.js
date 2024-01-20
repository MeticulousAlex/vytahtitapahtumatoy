import './Cards.css';

function Cards(){
    return(
        <ul className='cards'>
            <h2 className='cards__header'>—— &ensp; Our services &ensp; ——</h2>
            <div className='cards__container'>
                <li className='cards__card'>
                    <img className='cards__card-image' src='https://th.bing.com/th/id/R.b5246d096f2e203329b98afe75b77695?rik=VnC%2fTAH7hS69uw&pid=ImgRaw&r=0' alt='rickroll1'/>
                    <p className='cards__card-title'>Card 1</p>
                    <p className='cards__card-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat, id, possimus voluptatum sunt quidem laboriosam ullam qui adipisci consectetur dolorem.</p>
                </li>
                <li className='cards__card'>
                    <img className='cards__card-image' src='https://th.bing.com/th/id/R.b5246d096f2e203329b98afe75b77695?rik=VnC%2fTAH7hS69uw&pid=ImgRaw&r=0' alt='rickroll2'/>
                    <p className='cards__card-title'>Card 2</p>
                    <p className='cards__card-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat, id, possimus voluptatum sunt quidem laboriosam ullam qui adipisci consectetur dolorem.</p>
                </li>
                <li className='cards__card'>
                    <img className='cards__card-image' src='https://th.bing.com/th/id/R.b5246d096f2e203329b98afe75b77695?rik=VnC%2fTAH7hS69uw&pid=ImgRaw&r=0' alt='rickroll3'/>
                    <p className='cards__card-title'>Card 3</p>
                    <p className='cards__card-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat, id, possimus voluptatum sunt quidem laboriosam ullam qui adipisci consectetur dolorem.</p>
                </li>
            </div>
        </ul>
    )
}

export default Cards;