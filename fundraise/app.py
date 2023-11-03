from flask import Flask, render_template, request, jsonify
import joblib

app = Flask(__name__)

# Load your model here (replace 'your_model.pkl' with the actual model filename)
model = joblib.load('model.pkl')

@app.route('/home')
def home():
    return render_template('index.html')

@app.route("/predict", methods=["POST"])
def predict():
    # Extract data from the form
    country = request.form["country"]
    year = request.form["year"]
    city = request.form["city"]
    main_category = request.form["mainCategory"]
    funding_rounds = request.form["fundingRounds"]
    funding_filled = request.form["fundingFilled"]

    # Make predictions using your model
    input_data = [[year, city, main_category, funding_rounds, funding_filled, country]]
    predicted_success = model.predict(input_data)[0]

    return jsonify(predicted_success=predicted_success)

if __name__ == "__main__":
    app.run(debug=True)
