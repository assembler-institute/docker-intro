# Build the Docker image

docker build -t frontend-app .

# Run the Docker container

docker run -p 5173:5173 -d frontend-app
