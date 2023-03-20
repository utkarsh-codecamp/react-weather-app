
const APIKEY = "86334815fdb59164c82af6ee78648448";
async function weatherData(e) {
    e.preventDefault();
    const city = e.target[0].value;
    if (city === "") {
        alert("Add values");
    } else {
        const data = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`
        )
            .then((res) => res.json())
            .then((data) => data);

        console.log(data);
    }
}
const Search = () => {
    return (
        <div className="search-location">
            <form onSubmit={weatherData}>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Example input" />
                    <button className="btn fw-bold bg-info rounded-circle py-2" type="submit">
                        ↻
                    </button>
                </div>

            </form>
        </div >
    )
}

export default Search;