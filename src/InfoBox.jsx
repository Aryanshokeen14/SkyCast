import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./InfoBox.css";

export default function InfoBox({info}) {
  let INIT_URL =
    "https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8fDA%3D";
  let HOT_URL="https://images.unsplash.com/photo-1484766280341-87861644c80d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1bnxlbnwwfHwwfHx8MA%3D%3D"
  let COLD_URL="https://images.unsplash.com/photo-1551582045-6ec9c11d8697?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNub3d8ZW58MHx8MHx8fDA%3D"
  let RAIN_URL="https://images.unsplash.com/photo-1649843787933-a4e0d5313391?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UkFJTlklMjBDTE9VRHxlbnwwfHwwfHx8MA%3D%3D"
    return (
    <div className="InfoBox">
      <br />
      <div className="cardContainer">
        <Card sx={{ maxWidth: 400}}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity>80? RAIN_URL: info.temp>15? HOT_URL:COLD_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity>80? <ThunderstormIcon/>: info.temp>20? <SunnyIcon/>:<AcUnitIcon/>}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <b>{info.weather}</b> and it
                feels like {info.feelslike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
