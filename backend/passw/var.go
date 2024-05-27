package passw

// Config holds all configuration settings
var Config = map[string]string{
	"User":     "root", // Change this to use environment variables or encrypted values
	"Password": "root",
}

// Get retrieves a value from the configuration map
func Get(key string) string {
	return Config[key]
}
