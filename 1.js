// Додавання анімації
const animate = function () {
    requestAnimationFrame(animate);

    // Обертання куба
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Відображення сцени
    renderer.render(scene, camera);
};

// Запуск анімації
animate();
