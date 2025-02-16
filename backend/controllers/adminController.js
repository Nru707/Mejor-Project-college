import validator from "validator";
import bycrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../modules/doctorModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

//----------------------------------------API for adding doctor---------------------------------------------------------------------------------------------------------------------------------------------------------

const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;

    const imageFile = req.file;
    //-----------------------------------------checking for all data to add doctor-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all the fields" });
    }

    //------------------------------------------validating email format---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Please Enter a valid Email" });
    }

    //-----------------------------------------validating strong password-----------------------------------------------------------------------------------------------------------------------------------------------------------
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Please enter a strong password with minimum 8 characters",
      });
    }
    //------------------------------------------ hashing password-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);

    //------------------------------------------upload image to  cloudinary-----------------------------------------------------------------------------------------------------------------------------------------------------
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imagUrl = imageUpload.secure_url;

    const doctorData = {
      name,
      email,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      fees,
      date: Date.now(),
      address: JSON.parse(address),
      image: imagUrl,
    };

    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();
    res
      .status(201)
      .json({ success: true, message: "Doctor Added Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

//-----------------------------------------------API for the admin login---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res
        .status(400)
        .json({ success: false, message: "Invalid Email or Password" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { addDoctor, loginAdmin };
