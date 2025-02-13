from flask import Flask
import os
from dotenv import load_dotenv
from config import Config
from routes.video_analysis import video_analysis_bp
from flask_sqlalchemy import SQLAlchemy

load_dotenv()

app = Flask(__name__)
app.config.from_object(Config)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATABASE_URL", "sqlite:///database.db")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Register Blueprints
app.register_blueprint(video_analysis_bp, url_prefix='/api')

@app.route('/', methods=['GET'])
def home():
    return {"message": "AI Video Analyser API is running"}

if __name__ == '__main__':
    db.create_all()
    app.run(debug=Config.DEBUG)
