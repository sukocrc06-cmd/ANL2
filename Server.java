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

    static class Card {
        String username;
        String password;
        String company;
        String sector;
        String status; // "pending" or "activated"
        long createdAt;

        Card(String username, String password, String company, String sector, String status, long createdAt) {
            this.username = username;
            this.password = password;
            this.company = company;
            this.sector = sector;
            this.status = status;
            this.createdAt = createdAt;
        }
    }

    private static final java.util.concurrent.ConcurrentHashMap<String, Card> javaCards = new java.util.concurrent.ConcurrentHashMap<>();

    static class StaticFileHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String path = exchange.getRequestURI().getPath();
            
            // API endpoints
            if (path.startsWith("/api/")) {
                handleApi(exchange, path);
                return;
            }
            
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

        private void handleApi(HttpExchange exchange, String path) throws IOException {
            String method = exchange.getRequestMethod();
            int statusCode = 400;
            String response = "{\"error\":\"Bad Request\"}";

            if (method.equalsIgnoreCase("POST")) {
                java.io.InputStream is = exchange.getRequestBody();
                java.io.ByteArrayOutputStream bos = new java.io.ByteArrayOutputStream();
                byte[] buffer = new byte[1024];
                int len;
                while ((len = is.read(buffer)) != -1) {
                    bos.write(buffer, 0, len);
                }
                String body = bos.toString("UTF-8");

                if (path.equals("/api/create-card")) {
                    String u = getJsonField(body, "username");
                    String p = getJsonField(body, "password");
                    String c = getJsonField(body, "company");
                    String s = getJsonField(body, "sector");

                    if (!u.isEmpty() && !p.isEmpty() && !c.isEmpty() && !s.isEmpty()) {
                        javaCards.put(u, new Card(u, p, c, s, "pending", System.currentTimeMillis()));
                        statusCode = 200;
                        response = "{\"success\":true}";
                    } else {
                        statusCode = 400;
                        response = "{\"error\":\"Missing fields\"}";
                    }
                } else if (path.equals("/api/activate-card")) {
                    String u = getJsonField(body, "username");
                    if (!u.isEmpty() && javaCards.containsKey(u)) {
                        Card card = javaCards.get(u);
                        card.status = "activated";
                        statusCode = 200;
                        response = "{\"success\":true}";
                    } else {
                        statusCode = 404;
                        response = "{\"error\":\"Card not found\"}";
                    }
                } else if (path.equals("/api/login")) {
                    String u = getJsonField(body, "username");
                    String p = getJsonField(body, "password");

                    if (javaCards.containsKey(u)) {
                        Card card = javaCards.get(u);
                        if (card.password.equals(p)) {
                            card.status = "activated";
                            statusCode = 200;
                            response = String.format(
                                "{\"success\":true,\"company\":\"%s\",\"sector\":\"%s\",\"status\":\"%s\",\"createdAt\":%d,\"userId\":\"%s\",\"sessionToken\":\"token_%s_%d\"}",
                                card.company, card.sector, card.status, card.createdAt, card.username, card.username, System.currentTimeMillis()
                            );
                        } else {
                            statusCode = 401;
                            response = "{\"error\":\"invalid\"}";
                        }
                    } else {
                        statusCode = 401;
                        response = "{\"error\":\"invalid\"}";
                    }
                }
            }

            exchange.getResponseHeaders().set("Content-Type", "application/json; charset=utf-8");
            byte[] respBytes = response.getBytes("UTF-8");
            exchange.sendResponseHeaders(statusCode, respBytes.length);
            OutputStream os = exchange.getResponseBody();
            os.write(respBytes);
            os.close();
        }

        private String getJsonField(String json, String field) {
            java.util.regex.Pattern p = java.util.regex.Pattern.compile("\"" + field + "\"\\s*:\\s*\"([^\"]*)\"");
            java.util.regex.Matcher m = p.matcher(json);
            if (m.find()) {
                return m.group(1);
            }
            return "";
        }
    }
}
