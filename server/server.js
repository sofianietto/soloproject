const { PORT } = require("./config/settings");
const express = require("express");
const cors = require('cors')
const app = express();




app.use(cors())
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require("./config/mongoose.config");

const ReservaRouter = require("./routes/reserva.route");
app.use("/api/reserva", ReservaRouter);

const HabitacionRouter = require("./routes/habitacion.route");
app.use("/api/habitacion", HabitacionRouter);

const ClienteRouter = require("./routes/cliente.route");
app.use("/api/cliente", ClienteRouter);



app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));