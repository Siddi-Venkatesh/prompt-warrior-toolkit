FROM nginx:alpine

# Copy the static website files to the nginx html directory
COPY index.html /usr/share/nginx/html/
COPY index.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY bg.png /usr/share/nginx/html/

# Expose is for documentation, Cloud Run provides the port via the $PORT env var
EXPOSE 8080

# Replace the default port 80 with the Cloud Run $PORT, then start nginx
CMD sed -i -e 's/listen  *80;/listen '"$PORT"';/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
