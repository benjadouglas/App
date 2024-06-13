package passw

// Config holds all configuration settings
var Config = map[string]string{
	"User":     "root", // Change this to use environment variables or encrypted values
	"Password": "Pirata02",
}

// Get retrieves a value from the configuration map
func Get(key string) string {
	return Config[key]
}
