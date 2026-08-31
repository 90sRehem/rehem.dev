variable "cloudflare_api_token" {
  description = "Cloudflare API token with Pages:Edit permission. Set via TF_VAR_cloudflare_api_token or terraform.tfvars."
  type        = string
  sensitive   = true
}

variable "cloudflare_account_id" {
  description = "Cloudflare account ID that owns the Pages project."
  type        = string
}

variable "project_name" {
  description = "Cloudflare Pages project name."
  type        = string
  default     = "rehem-dev"
}

variable "production_branch" {
  description = "Git branch that triggers production deployments."
  type        = string
  default     = "main"
}

variable "github_owner" {
  description = "GitHub owner/org of the site repository."
  type        = string
  default     = "90sRehem"
}

variable "github_repo" {
  description = "GitHub repository name of the site."
  type        = string
  default     = "rehem.dev"
}
