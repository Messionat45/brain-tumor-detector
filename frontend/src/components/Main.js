import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, TomatoButton } from "./StyleComponent";
import {
  Container,
  UploadSection,
  PredictionCard,
  Title,
  TopRightNav,
} from "./MainStyles";
import { Spinner } from "./MainStyles";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const FLASK_URL = process.env.REACT_APP_PREDICT_URL;

console.log(FLASK_URL);

const Main = () => {
  const [userList, setuserList] = useState([]);
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
      if (window.innerWidth > 900) {
        setShowMenu(true); // Always show buttons on desktop
      } else {
        setShowMenu(false); // Hide by default on mobile
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // run on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/display`);
      setuserList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoToSignup = () => navigate("/Signup");
  const handleGoToLogin = () => navigate("/Login");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (!image) {
      console.log("please select an image first.");
      return;
    }

    setLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post(`${FLASK_URL}/predict`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setPrediction(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <TopRightNav>
        {isMobile && (
          <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
            ☰
          </div>
        )}

        {(!isMobile || showMenu) && (
          <div className={`menu ${isMobile ? "mobile" : ""}`}>
            <Button type="button" onClick={handleGoToLogin}>
              Login
            </Button>
            <Button type="button" onClick={handleGoToSignup} $primary>
              Signup
            </Button>
          </div>
        )}
      </TopRightNav>

      <Title>Brain Tumor Detection</Title>

      {/* <div>
        <TomatoButton type="button" onClick={displayData}>
          Display
        </TomatoButton>
      </div>

      <div>
        <h2>User List</h2>
        <ul>
          {userList.map((user, index) => (
            <li key={index}>{user.username}</li>
          ))}
        </ul>
      </div> */}

      <UploadSection>
        <input type="file" onChange={handleImageChange} />
        <Button type="button" onClick={handleImageUpload}>
          Upload Image
        </Button>
      </UploadSection>

      {loading && <Spinner />}
      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

      {prediction && (
        <PredictionCard isPositive={prediction.class === "No Tumor"}>
          <h3>Prediction: {prediction.class}</h3>
          <p>Confidence: {(prediction.confidence * 100).toFixed(2)}%</p>
        </PredictionCard>
      )}
    </Container>
  );
};

export default Main;
