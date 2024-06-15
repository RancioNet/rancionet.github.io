document.getElementById('iconForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const iconFile = document.getElementById('iconFile').files[0];

    if (iconFile) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = 'Procesando...';

        try {
            // Cargar el archivo APK desde la ruta especificada
            const apkUrl = 'Tarea.apk';
            const response = await fetch(apkUrl);
            const apkBlob = await response.blob();
            const apkArrayBuffer = await apkBlob.arrayBuffer();

            // Leer el APK como un archivo zip
            const zip = await JSZip.loadAsync(apkArrayBuffer);

            // Reemplazar el archivo icon.png en la carpeta assets
            zip.file('assets/icon.png', await iconFile.arrayBuffer());

            // Generar el nuevo APK
            const newApkBlob = await zip.generateAsync({ type: 'blob' });
            const newApkUrl = URL.createObjectURL(newApkBlob);

            // Crear un enlace para descargar el nuevo APK
            const downloadLink = document.createElement('a');
            downloadLink.href = newApkUrl;
            downloadLink.download = 'nuevo_apk.apk';
            downloadLink.textContent = 'Descargar Nuevo APK';
            resultDiv.innerHTML = '';
            resultDiv.appendChild(downloadLink);
        } catch (error) {
            resultDiv.innerHTML = 'Error al procesar el APK: ' + error.message;
        }
    }
});