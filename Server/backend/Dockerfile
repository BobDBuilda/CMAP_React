# Use official Python image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy requirements file and install dependencies
COPY requirements.txt .
# (Build with project root as build context: run from project root)

RUN pip install --no-cache-dir -r requirements.txt
COPY .env .
# Copy application code
COPY . .

# Expose Flask default port
EXPOSE 5000

# Set environment variables
ENV FLASK_APP=index.py
ENV FLASK_RUN_HOST=0.0.0.0

# Run the Flask server
CMD ["python", "index.py"]