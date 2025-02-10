// Three.js 3D Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 300, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, 300);
document.getElementById('3d-container').appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Fetch News
document.getElementById('show-news').addEventListener('click', async () => {
    const response = await fetch('http://localhost:5000/api/news');
    const news = await response.json();
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = news.map(article => `
        <div class="news-item">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        </div>
    `).join('');
});