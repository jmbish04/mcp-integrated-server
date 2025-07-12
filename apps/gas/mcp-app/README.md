# MCP App [PRD]

This module implements the frontend client that interfaces with the MCP Server (tools) to allow user-level control of function tiggers.

The application has the following features:
- Shows a frontend for multiple projects or tool runtime configs.
- Allows authorized user to select a function from the registered tools tab

    â€œ Trigger Button - sends the request to the Server to execute it
    Š
˜response is derived and rendered to the user within the GAS app 

This module is not secured by default access, and only leverages the https service provided by the Backend Server.

Schema: screens, GasServiceHandler, using Google Auth and HtmlService