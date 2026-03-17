import { useState } from "react";

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("파일을 선택하세요.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("에러가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-5xl text-blue-500 font-bold mb-6">
        Defect Detection
      </h1>

      <div className="flex items-center gap-4 mb-6">
        <input type="file" onChange={handleFileChange} />
        <button
          onClick={handleUpload}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Upload
        </button>
      </div>

      {loading && <p className="text-gray-600">Loading...</p>}

      {result && (
        <div className="mt-4 border border-gray-300 rounded p-4">
          <p><strong>Image:</strong> {result.image_name}</p>
          <p><strong>Prediction:</strong> {result.prediction}</p>
          <p><strong>Confidence:</strong> {result.confidence}</p>
        </div>
      )}
    </div>
  );
}

export default App;