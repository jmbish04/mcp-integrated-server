# MCP Server Tools [PRD]

This module implements the backend end of an MPP server written in Google AppsScript. It provides authenticated tools to create, manage, and execute MCP code and services.

This app: 
- Exposes MCP service endpoint via Google GasPubDeploy
- Receives incoming requests from the client app

Tools:
- CreateFineByKey - generate indexed MCP function registries
- ExecuteFunction - invokes a function based on key and payload
- ShowToolsFilter - list all available tools
- UpdateTool - updates scripts and metadata
- DeleteTool - removes an entry from the server

Notes:
- Integrates with MCP app as the client front
- Uses classes from ToolsForMCPServer to handle Input/Output
- Serves is deployed through gas.pubApps(custom module)

Auth: Open authorization received from GasServiceHandler
