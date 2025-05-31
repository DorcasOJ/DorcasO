const downloadFile = () => {
  const fileId =
    "https://drive.google.com/file/d/1pxOAKAX9LpOuuB2-ZdiJGZOhqKYlHYNd/view?usp=sharing";
  const downloadUrl = `https://docs.google.com/document/d/${fileId}/export?format=pdf`;

  const a = document.createElement("a");
  a.href = downloadUrl;
  a.download = "Dorcas-Olajide-CV.pdf";
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.click();
};

export default downloadFile;
