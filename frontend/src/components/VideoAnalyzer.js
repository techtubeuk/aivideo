import React, { useState } from 'react';
import '../styles/frontend_styles.css';

const VideoAnalyzer = () => {
    const [url, setUrl] = useState('');
    const [analysis, setAnalysis] = useState(null);
    const [error, setError] = useState(null);

    const handleAnalyze = async () => {
        setError(null);
        setAnalysis(null);

        const response = await fetch('/api/analyze', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url })
        });

        const data = await response.json();
        if (response.ok) {
            setAnalysis(data);
        } else {
            setError(data.error);
        }
    };

    return (
        <div className="container">
            <h1>AI Video Analyzer</h1>
            <input type="text" placeholder="Enter video URL" value={url} onChange={(e) => setUrl(e.target.value)} />
            <button onClick={handleAnalyze}>Analyze</button>

            {error && <p className="error">{error}</p>}
            {analysis && (
                <div className="analysis-result">
                    <h3>Analysis Result:</h3>
                    <p><strong>URL:</strong> {analysis.url}</p>
                    <p><strong>Sentiment:</strong> {analysis.analysis}</p>
                </div>
            )}
        </div>
    );
};

export default VideoAnalyzer;
