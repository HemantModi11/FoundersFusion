import pickle
model = pickle.load(open('model.pkl', 'rb'))

input_data = [[2003, 10, 2, 50000, 17]]
predicted_success = model.predict(input_data)[0]

print(predicted_success)