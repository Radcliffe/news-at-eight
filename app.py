from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify
from fastText import load_model


app = Flask(__name__, static_url_path='/static')
model = load_model('agnews.ftz')


@app.route('/topic', methods=['POST'])
def predict_topic():
    text = request.form['text'].replace('\n', ' ')
    category, probability = model.predict(text)
    return jsonify({
        'category': category[0].replace('__label__', ''),
        'prob': probability[0]
    })


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)

