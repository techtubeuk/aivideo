from flask import Blueprint, request, jsonify
from services.ai_analysis import analyze_video_content
from database_models import db, VideoAnalysis
import logging

video_analysis_bp = Blueprint('video_analysis', __name__)

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

@video_analysis_bp.route('/analyze', methods=['POST'])
def analyze_video():
    try:
        data = request.json
        video_url = data.get("url")
        if not video_url:
            return jsonify({"error": "Missing video URL"}), 400
        
        result = analyze_video_content(video_url)

        analysis_entry = VideoAnalysis(url=video_url, analysis=result["analysis"])
        db.session.add(analysis_entry)
        db.session.commit()
        
        return jsonify(analysis_entry.serialize())
    except Exception as e:
        logging.error(f"Error analyzing video: {str(e)}")
        return jsonify({"error": "Internal Server Error"}), 500
