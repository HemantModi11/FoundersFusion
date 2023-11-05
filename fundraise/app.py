from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Import your machine learning model (pickle model)
import pickle

# Load the pickled model
with open('model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

@app.route('/')
def home():
    return render_template('index.html', predicted_value=None)

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        # Get user inputs from the form
        year = int(request.form['year'])
        funding_rounds = int(request.form['fundingRounds'])
        funding_filled = int(request.form['fundingFilled'])
        country = request.form['country']
        main_category = request.form['mainCategory']

            # Pass all user inputs to the model for prediction
        prediction = model.predict([[year, funding_rounds, funding_filled, country, main_category]])[0]

        print(prediction)
        # Return the prediction as JSON
        return render_template('index.html', predicted_value=prediction)

if __name__ == '__main__':
    app.run(debug=True)
