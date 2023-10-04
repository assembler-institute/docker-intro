# Base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the frontend app
RUN yarn build

# Set the environment variables with yout firebase credentials
ENV VITE_FIREBASE_API_KEY=AIzaSyBOxpg8vXHfOVaSzYTfHI_LCAL1DrVS5jM
ENV VITE_FIREBASE_DOMAIN=assembler-test.firebaseapp.com
ENV VITE_FIREBASE_PROJECT_ID=assembler-test
ENV VITE_FIREBASE_STORAGE=assembler-test.appspot.com
ENV VITE_FIREBASE_MESSAGING=421627407553
ENV VITE_FIREBASE_APP_ID=1:421627407553:web:4b51a33dab5a6200e47840

# Expose the port on which the app will run
EXPOSE 5173

# Run the frontend app
CMD ["yarn", "dev"]
