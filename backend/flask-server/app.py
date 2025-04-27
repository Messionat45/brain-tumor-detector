from dotenv import load_dotenv
import os

from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
from PIL import Image
from flask_cors import CORS
from tensorflow.keras.applications.resnet50 import preprocess_input  # ✅ Add this

import io


load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

model_path = os.getenv("MODEL_PATH")  # ✅
# Load the trained model
model = tf.keras.models.load_model(model_path)

# Define class labels
CLASS_LABELS = ['Glioma','Meningioma','No Tumor', 'Pituitary' ]

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Check if an image file was uploaded
        if 'image' not in request.files:
            return jsonify({"error": "No image uploaded"}), 400

        image_file = request.files['image']

        # Load and preprocess image
        image = Image.open(image_file).convert("RGB")
        image = image.resize((224, 224))
        image_array = np.array(image)
        image_array = np.expand_dims(image_array, axis=0)

        # ✅ Correct preprocessing
        image_array = preprocess_input(image_array)

        # Make prediction
        predictions = model.predict(image_array)
        predicted_class = np.argmax(predictions)
        confidence = float(predictions[0][predicted_class])

        return jsonify({
            "class": CLASS_LABELS[predicted_class],
            "confidence": confidence
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
  port = int(os.environ.get("PORT", 5001))  # Render will set PORT, local fallback 5001

#   port = int(os.environ.get("PORT", 5001)) for local running  # fallback to 5001 locally
  app.run(host="0.0.0.0", port=port, debug=True)
