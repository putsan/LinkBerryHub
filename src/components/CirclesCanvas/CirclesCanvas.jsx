import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const CirclesCanvas = ({ circlesData }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const circles = circlesData.map(data => ({
      id: data.id,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: data.size / 2,
      color: '#' + Math.floor(Math.random() * 16777214 + 1).toString(16), // Exclude white color
      name: data.name
    }));

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const circle of circles) {
        // Draw the circle
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, true);
        ctx.fillStyle = circle.color;
        ctx.fill();
        ctx.closePath();

        // Draw the text
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `${circle.radius * 0.3}px Arial`;
        ctx.fillText(circle.name, circle.x, circle.y, circle.radius * 1.8);
      }
    }

    function adjustCirclePositions() {
      // Adjust positions to avoid overlap and fit within the canvas
      for (let i = 0; i < circles.length; i++) {
        for (let j = i + 1; j < circles.length; j++) {
          const dx = circles[i].x - circles[j].x;
          const dy = circles[i].y - circles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const minDistance = circles[i].radius + circles[j].radius;

          if (distance < minDistance) {
            const angle = Math.atan2(dy, dx);
            const overlap = minDistance - distance + 5;
            circles[i].x += Math.cos(angle) * overlap / 2;
            circles[j].x -= Math.cos(angle) * overlap / 2;
            circles[i].y += Math.sin(angle) * overlap / 2;
            circles[j].y -= Math.sin(angle) * overlap / 2;

            // Keep circles within canvas bounds
            circles[i].x = Math.min(Math.max(circles[i].radius, circles[i].x), canvas.width - circles[i].radius);
            circles[j].x = Math.min(Math.max(circles[j].radius, circles[j].x), canvas.width - circles[j].radius);
            circles[i].y = Math.min(Math.max(circles[i].radius, circles[i].y), canvas.height - circles[i].radius);
            circles[j].y = Math.min(Math.max(circles[j].radius, circles[j].y), canvas.height - circles[j].radius);
          }
        }
      }
    }

    // ... Same mousemove and click event listeners ...

    adjustCirclePositions();
    draw();
  }, [circlesData]);

  return <canvas ref={canvasRef} width="800" height="600" />;
};

CirclesCanvas.propTypes = {
  circlesData: PropTypes.array.isRequired,
};

export default CirclesCanvas;
