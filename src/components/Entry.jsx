export default function Entry(props) {
  console.log(props)
  return (
    <article className='journal-entry'>
      <div className='main-image-container'>
        <img 
          className='main-image' 
          src={props.img.src} 
          alt={props.img.alt} 
        />
      </div>
      <div>
        <img className='pin-image' src='src/assets/pin.jpg' alt='Location pin' />
        <span>{props.country} </span>
        <a href={props.googleMapsLink}>View on Google Maps</a>
        <h2>{props.title}</h2>
        <p className='trip-dates'>{props.dates}</p>
        <p>{props.text}</p>
      </div>
    </article>
  )
}