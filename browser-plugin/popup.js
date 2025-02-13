document.getElementById('analyzeButton').addEventListener('click', async () => {
    const videoUrl = document.getElementById('videoUrl').value;
    if (!videoUrl) {
        document.getElementById('result').innerText = 'Please enter a video URL.';
        return;
    }

    const response = await fetch('http://localhost:5000/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: videoUrl })
    });

    const data = await response.json();
    if (response.ok) {
        document.getElementById('result').innerText = `Sentiment: ${data.analysis}`;
    } else {
        document.getElementById('result').innerText = `Error: ${data.error}`;
    }
});