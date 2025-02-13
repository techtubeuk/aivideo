from fastapi import FastAPI, HTTPException, Query

app = FastAPI(title="AI Video Analyser Backend")

@app.get("/")
def read_root():
    return {"message": "AI Video Analyser Backend is running"}

@app.get("/analyze")
def analyze_video(url: str = Query(..., description="Video URL to analyze")):
    return {"video_url": url, "status": "Analysis is in progress", "result": {}}
