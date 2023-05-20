# Utiliza una imagen base de Python
FROM python:3.10

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo requirements.txt al contenedor
COPY qmirai_api/requirements.txt /app

# Instala las dependencias
RUN pip install --no-cache-dir -r requirements.txt

COPY qmirai_api/ .

# Expone el puerto que escucha tu servidor
EXPOSE 8000

ENTRYPOINT [ "python" ]

# Ejecuta el servidor Python
CMD ["manage.py", "runserver"]