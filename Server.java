import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

public class Server {
    public static void main(String[] args) throws IOException {
        int port = 8000;
        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
        server.createContext("/", new StaticFileHandler());
        server.setExecutor(null); // Default executor
        
        System.out.println("=================================================");
        System.out.println("   SUPERVISED ML WEBSITE - JAVA HTTP SERVER       ");
        System.out.println("=================================================");
        System.out.println("Server is starting up...");
        System.out.println("Web application URL: http://localhost:" + port);
        System.out.println("Press Ctrl+C to terminate server.");
        System.out.println("=================================================");
        
        server.start();
    }

    static class StaticFileHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String path = exchange.getRequestURI().getPath();
            
            // Serve index.html as the root route
            if (path.equals("/")) {
                path = "/index.html";
            }
            
            // Basic directory traversal protection
            if (path.contains("..")) {
                String response = "403 Forbidden (Directory Traversal Detected)";
                exchange.sendResponseHeaders(403, response.length());
                OutputStream os = exchange.getResponseBody();
                os.write(response.getBytes());
                os.close();
                return;
            }

            File file = new File("." + path);
            if (!file.exists() || file.isDirectory()) {
                String response = "404 File Not Found";
                exchange.sendResponseHeaders(404, response.length());
                OutputStream os = exchange.getResponseBody();
                os.write(response.getBytes());
                os.close();
                return;
            }

            // Map MIME Types
            String contentType = "text/plain";
            if (path.endsWith(".html")) {
                contentType = "text/html; charset=utf-8";
            } else if (path.endsWith(".css")) {
                contentType = "text/css; charset=utf-8";
            } else if (path.endsWith(".js")) {
                contentType = "text/javascript; charset=utf-8";
            } else if (path.endsWith(".png")) {
                contentType = "image/png";
            } else if (path.endsWith(".jpg") || path.endsWith(".jpeg")) {
                contentType = "image/jpeg";
            }

            exchange.getResponseHeaders().set("Content-Type", contentType);
            exchange.sendResponseHeaders(200, file.length());

            OutputStream os = exchange.getResponseBody();
            FileInputStream fs = new FileInputStream(file);
            byte[] buffer = new byte[1024];
            int bytesRead;
            while ((bytesRead = fs.read(buffer)) != -1) {
                os.write(buffer, 0, bytesRead);
            }
            fs.close();
            os.close();
        }
    }
}
