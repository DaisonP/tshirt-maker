const upload = document.getElementById('upload');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const downloadBtn = document.getElementById('download');

// рисуем простую футболку
function drawShirt() {
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#e0e0e0';
  ctx.beginPath();
  ctx.moveTo(150, 80);
  ctx.lineTo(250, 80);
  ctx.lineTo(220, 120);
  ctx.lineTo(180, 120);
  ctx.closePath();
  ctx.fill();
  ctx.fillRect(150, 120, 100, 180);
}
drawShirt();

upload.addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;

  const img = new Image();
  img.onload = () => {
    // 1. Очищаем и перерисовываем футболку
    drawShirt();

const maxW = 100, maxH = 100;
const scale = Math.min(maxW / img.width, maxH / img.height);
const w = img.width  * scale;
const h = img.height * scale;
ctx.drawImage(img, 150 + (maxW - w) / 2, 150 + (maxH - h) / 2, w, h);


downloadBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = 'tshirt-design.png';
  link.href = canvas.toDataURL();
  link.click();
});