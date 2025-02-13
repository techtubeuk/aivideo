# AI Video Analyser Backend

This module provides the FastAPI backend for the AI Video Analyser project.
It includes endpoints for video analysis and user management.

## Setup Instructions

1. Create a Python virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the server:
   ```bash
   uvicorn main:app --host 0.0.0.0 --port 8000 --reload
   ```
