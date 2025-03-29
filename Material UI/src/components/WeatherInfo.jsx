import "./WeatherInfo.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";

export default function WeatherInfo({ weather, imgUrl, error }) {
  if (error) {
    return (
      <Alert className="Alert" severity="info">
        City not found! Try using a different location.
      </Alert>
    );
  } else {
    return (
      <div className="WeatherInfoCard">
        {weather && (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={imgUrl}
              title="green iguana"
            />
            <CardContent>
              <div>
                <Typography gutterBottom variant="h5" component="div">
                  <p>
                    {weather.name}, {weather.sys.country}
                  </p>
                  <p>{weather.weather[0].description}</p>
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {Object.keys(weather.main).map((key) => (
                    <div className="WeatherInfo" key={key}>
                      <h3>{key} </h3>
                      <h4>
                        {key == "pressure" ||
                        key == "sea_level" ||
                        key == "grnd_level"
                          ? weather.main[key]
                          : key == "humidity"
                          ? weather.main[key] + " %"
                          : weather.main[key] + "\u00B0 C"}{" "}
                      </h4>
                    </div>
                  ))}
                </Typography>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }
}
