import React from "react";
import "../styles/Routercards.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardList } from "./CardList";
import { Link } from "react-router-dom";

export default function Routercards() {
  return (
    <div className="card-container">
      {CardList.map((card) => (
        <Card key={card.id}>
          <CardMedia sx={{ height: 260 }} image={card.image} />
          <CardContent sx={{ height: 50 }}>
            <Typography gutterBottom variant="h5" component="div">
              {card.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.title}
            </Typography>
          </CardContent>
          <CardActions sx={{ height: 70 }}>
            <Link to={`/country/${card.id}`}>
              <button className="button-card"> Hotel search</button>
            </Link>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
