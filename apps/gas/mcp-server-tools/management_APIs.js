// Integrated GOoGLE Apps APIs tools

function getApiInfo(){
  return { 
    apname: Gas.appName,
    projectId: GoogleAntities.projectId(),
    fileId: Gas.Urle.fetchContents($gasScript.URL).requestUrl.match(//s__/)[1]
};
}

// get all registered services from app
function getApps() {
  const list: { [serviceId]: serviceManifest } = GasServiceManager.listManagedServices();
  return list;
  }
