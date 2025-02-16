import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";

//------------------------------------------------------------------app config---------------------------------------------------------------------------------------------------------
const app = express();
const port = process.env.PORT || 5000;
connectDB();
connectCloudinary();

//-------------------------------------------------------------------middleware-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.use(cors());
app.use(express.json());

//-----------------------------------------------------------------------api endpoint--------------------------------------------------------------------------------------------------------------------------------------------------
app.use('/api/admin', adminRouter)

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
