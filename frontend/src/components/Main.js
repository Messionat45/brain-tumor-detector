import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, TomatoButton } from "./StyleComponent";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Main = () => {
  const [userList, setuserList] = useState([]);

  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const navigate = useNavigate();

  const displayData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/display`);
      setuserList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoToSignup = () => {
    navigate("/Signup");
  };

  const handleGoToLogin = () => {
    navigate("/Login");
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (!image) {
      console.log("please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      // const response = await axios.post("http://localhost:5000/api/upload-image", formData, { //when testing just image uploads fro front end or not
      const response = await axios.post(
        "http://localhost:5001/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setPrediction(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Main</h1>

      <div>
        <TomatoButton type="button" onClick={displayData}>
          {" "}
          Display
        </TomatoButton>
      </div>

      <div>
        <h2>user List</h2>

        <ul>
          {userList.map((user, index) => (
            <li key={index}>{user.username}</li>
          ))}
        </ul>
      </div>

      <div>
        <input type="file" onChange={handleImageChange} />
        <Button type="button" onClick={handleImageUpload}>
          Upload Image
        </Button>
      </div>

      {/* tried to display the outlut  */}
      <div>
        {prediction && (
          <div>
            <h3>Prediction: {prediction.class}</h3>
            <p>Confidence: {(prediction.confidence * 100).toFixed(2)}%</p>
          </div>
        )}
      </div>

      <Button type="button" onClick={handleGoToLogin}>
        back to login
      </Button>
      <Button type="button" onClick={handleGoToSignup} $primary>
        back to Signup
      </Button>
    </div>
  );
};

export default Main;
