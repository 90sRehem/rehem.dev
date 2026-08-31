terraform {
  required_version = ">= 1.5.0"

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 5.0"
    }
  }
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

# Cloudflare Pages project wired to the GitHub repo. Cloudflare builds and
# deploys automatically on every push to the production branch (and creates
# preview deployments for other branches/PRs) - no separate deployment
# resource is needed or available in provider v5.
resource "cloudflare_pages_project" "rehem_dev" {
  account_id        = var.cloudflare_account_id
  name              = var.project_name
  production_branch = var.production_branch

  build_config = {
    build_command   = "npm run build"
    destination_dir = "dist"
    root_dir        = "/"
  }

  source = {
    type = "github"
    config = {
      owner                          = var.github_owner
      repo_name                      = var.github_repo
      production_branch              = var.production_branch
      production_deployments_enabled = true
      preview_deployment_setting     = "all"
      pr_comments_enabled            = true
    }
  }
}
