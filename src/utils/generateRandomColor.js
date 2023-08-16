export default function generateRandomColor() {
  let r, g, b;
  do {
      r = Math.floor(Math.random() * 256);
      g = Math.floor(Math.random() * 256);
      b = Math.floor(Math.random() * 256);
  } while (r + g + b < 300 || r + g + b > 740); // Уникнення занадто темних і світлих кольорів

  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}
