document.getElementById('start-button').addEventListener('click', async function () {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*,video/*';

    input.onchange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        try {
            // Replace this URL with your own API Gateway endpoint after redeploying the backend
            const apiUrl = "https://your-api-id.execute-api.region.amazonaws.com/upload";

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': file.type
                },
                body: file
            });

            const result = await response.json();

            if (response.ok) {
                alert(`✅ Uploaded: ${result.file}`);
            } else {
                alert(`❌ Upload failed: ${JSON.stringify(result)}`);
            }
        } catch (error) {
            console.error("Upload error:", error);
            alert("⚠️ Upload failed. Make sure your backend is deployed and the URL is correct.");
        }
    };

    input.click();
});
