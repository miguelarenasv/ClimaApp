import '../styles/Spinner.css'

const Spinner = () => {
  return (
    <div className='loading'>
      <div className="spring-spinner">
        <div className="spring-spinner-part top">
          <div className="spring-spinner-rotator"></div>
        </div>
        <div className="spring-spinner-part bottom">
          <div className="spring-spinner-rotator"></div>
        </div>
      </div>
    </div>
  )
}

export default Spinner