package passw

// Config holds all configuration settings
var Config = map[string]string{
	"User":     "benja", // Change this to use environment variables or encrypted values
	"Password": "chacho",
}

// Get retrieves a value from the configuration map
func Get(key string) string {
	return Config[key]
}
