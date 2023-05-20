#!/bin/bash
curl -X POST -H "Content-Type: application/json" -d '{"text":"<p>Hola Juan como estás, DNI 40800404 </p>"}' http://localhost:8000/process_text/