#!/bin/bash
echo "Setting up AI Video Analyser..."

# Install Python dependencies
echo "Creating virtual environment..."
python3 -m venv venv
source venv/bin/activate

echo "Installing backend dependencies..."
pip install -r backend/requirements.txt

echo "Setup complete. Run 'uvicorn backend.main:app --host 0.0.0.0 --port 8000 --reload' to start the backend."
