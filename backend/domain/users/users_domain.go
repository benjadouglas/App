package users

type SignUpRequest struct {
	Mail     string `json:"mail"`
	Username string `json:"username"`
	Password string `json:"password"`
}

type LoginRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type LoginResponse struct {
	Code  int    `json:"StatusCode"`
	Token string `json:"Token"`
}
