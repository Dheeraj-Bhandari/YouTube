const Redis = require("ioredis");

class RedisClient {
    constructor(host, port, password) {
        this.client = new Redis({
            host: host,
            port: port,
            password: password,
        });

        this.client.on("connect", () => {
            console.log("Connected to Redis server.");
        });

        this.client.on("error", (err) => {
            console.error("Error connecting to Redis:", err);
        });
    }

    // Getter method to access the Redis client instance
    getClient() {
        return this.client;
    }

    // Close the Redis connection
    close() {
        this.client.quit();
        console.log("Redis connection closed.");
    }
}

// Exporting a singleton instance of RedisClient
const redisHost = process.env.REDIS_SERVER;
const redisPort = process.env.REDIS_PORT;
const redisPassword = process.env.REDIS_AUTH_KEY;

module.exports = new RedisClient(redisHost, redisPort, redisPassword);