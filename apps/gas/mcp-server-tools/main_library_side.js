// Accesses functions from the MCP server
function CreateFineByKey(key, func) {
  _GLOBAL._mcr_register = _GLOBAL._mcr_register || {};
  _GLOBAL._mcr_register[key] = func;
}

function ShowToolsFilter(ac)  {
  return Object.keys(_GLOBAL._mcr_register).map(function(key) {
    return [key, _GLOBAL._mcr_register[key].name || '']
  }).filter(function(e) { return e.length >= 2; });
}

function ExecuteFunction(args) {
  const key = args.shift();
  const payload = args;
  return _GLOBAL._mcr_register[key].func(payload);
}

export { CreateFineByKey, ShowToolsFilter, ExecuteFunction };