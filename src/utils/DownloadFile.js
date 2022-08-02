const axios = require("axios").default;
const api = "http://localhost:3000/api/v1/";

export async function downloadFile(id, filename, mime) {
  const data = await axios.get(`${api}articles/${id}`, {
    headers: {
      Accept: mime,
    },
  });
  let newData = data.data;
  if(mime==="application/json"){
    newData = JSON.stringify(newData);
  }
  
  const blob = new Blob([newData], { type: mime || "application/json" });
  if (typeof window.navigator.msSaveBlob !== "undefined") {
    window.navigator.msSaveBlob(blob, filename);
    return;
  }
  const blobURL = window.URL.createObjectURL(blob);
  const tempLink = document.createElement("a");
  tempLink.style.display = "none";
  tempLink.href = blobURL;
  tempLink.setAttribute("download", filename);

  if (typeof tempLink.download === "undefined") {
    tempLink.setAttribute("target", "_blank");
  }
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
  setTimeout(() => {
    window.URL.revokeObjectURL(blobURL);
  }, 100);
}
