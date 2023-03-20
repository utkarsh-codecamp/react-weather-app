const WeatherBase = () => {
    return (
        <div className="weather-base-card row p-0 m-0 align-items-center">
            <div className="col-lg-6">
                <div className="p-5">
                    <h1 className="display-1 fw-bold">23°C</h1>
                    <p className="fw-bold">Saket, New Delhi</p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="p-5">
                    <img width={100} src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp" alt="weather-signal" />
                </div>
            </div>
        </div>
    )
}
export default WeatherBase;