output "pages_subdomain" {
  description = "Default *.pages.dev URL assigned by Cloudflare."
  value       = "https://${cloudflare_pages_project.rehem_dev.subdomain}"
}

output "production_url" {
  description = "Production URL, once a custom domain is attached in the Cloudflare dashboard."
  value       = "https://rehem.dev"
}
