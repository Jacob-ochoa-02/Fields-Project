import './locationBar.css';

export default function locationBar() {
    return (
        <div className='locationBarContainer' id='location'>
            <h1 id="locationTitle">¿DÓNDE NOS UBICAMOS?</h1>
            <div className='locationImage'>
                <div className='Item imageOf'></div>
                <div className='Item locationOf'>
                    <h2>Km 27 de la vía Las Palmas en El Retiro, Antioquia.</h2>
                    <a className='GoMaps' target='_blank' rel="noreferrer" href='https://www.google.com/maps/place/Hacienda+Fizebad/@6.0994428,-75.5087603,15z/data=!4m9!3m8!1s0x8e469b3ec36f0efd:0xc860edca56b83aa2!5m2!4m1!1i2!8m2!3d6.0994428!4d-75.5087603!16s%2Fg%2F1hc5xnjhh?entry=ttu'>Ir a Maps</a>
                </div>
            </div>
        </div>
    )
}