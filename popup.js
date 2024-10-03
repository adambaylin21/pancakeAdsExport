const urlInput = document.getElementById('urlInput');
const exportButton = document.getElementById('exportButton');
const outputArea = document.getElementById('outputArea');

exportButton.addEventListener('click', () => {
    const url = urlInput.value;

    console.log(url);
//   // Xử lý dữ liệu từ URL tại đây
//   // Ví dụ:
//   outputArea.value = `URL: ${url}`;
});