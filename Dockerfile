FROM nginx:alpine

# Copy the static website files to the nginx html directory
COPY index.html /usr/share/nginx/html/
COPY index.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY bg.png /usr/share/nginx/html/

# Expose port 80 for Google Cloud Run
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
