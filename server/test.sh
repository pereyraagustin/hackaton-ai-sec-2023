#!/bin/bash
curl -X POST -H "Content-Type: application/json" -d '{"text":"El presidente de México vive en el Palacio Nacional."}' http://localhost:8000/process_text/