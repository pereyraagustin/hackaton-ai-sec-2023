from rest_framework.views import APIView
from rest_framework.response import Response
import re
import spacy
from bs4 import BeautifulSoup

class TextProcessingView(APIView):

    def extract_text_from_html(html_content):
        # Create a BeautifulSoup object
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # Extract the text from the HTML
        text = soup.get_text()
        
        return text

    def post(self, request, format=None):
        html = request.data.get('text', None)
        text = extract_text_from_html(html)
        print(text)
        if text is None:
            return Response({"error": "No text provided"}, status=400)

        # Cargar el modelo de SpaCy
        nlp = spacy.load("es_core_news_sm")
        # Definir expresión regular para DNI (Ejemplo para DNI argentino de 8 dígitos)
        dni_regex = r"\b\d{8}\b"
        # Procesar el texto con el modelo de SpaCy
        doc = nlp(text)
        # Obtener las entidades reconocidas por SpaCy
        entidades = doc.ents
        # Filtrar las entidades por tipo relevante (en este caso, no se utiliza)
        entidades_relevantes = [entidad.text for entidad in entidades]
        # Buscar coincidencias de la expresión regular para DNI
        dnis_encontrados = re.findall(dni_regex, text)

        return Response({'dnis': dnis_encontrados, 'entidades': entidades_relevantes})