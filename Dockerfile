# Stage 1: Building the app
FROM node:20-alpine AS builder

# Set the working directory in the Docker container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Run the app in production mode
FROM node:20-alpine AS runner
WORKDIR /app

# Copy the build output from the builder stage
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/dist ./dist
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port Next.js runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "run", "start"]