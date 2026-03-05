# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy app source and build
COPY . .
RUN npm run build

# Runtime stage: serve with nginx
FROM nginx:alpine

# Set app name as env (optional)
ARG APP_NAME=react-app
ENV APP_NAME=${APP_NAME}

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built app to nginx static folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config if needed (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]