# MCP App Worker [PRD]

This Cloudflare Worker serves is the edge-based interface between Google AppsScript and server-hosted systems like MVP.

Responsibilities:
- Authorization mediation using Google OAuth sessions
- Secure fetching of user scoped data from apps via incoming auth
- Request forwarding to GAS and Model
Context APIs that can be extended here as needed

Tools to consider:
- JSON.endpoints for GasServiceHandler routing
Credentials:
- Most routes require bearer token or online auth

Can be deployed to a Vercel runtime or elsify target services like Thei’stems complient or Ohto: SAAS.