// Manages drive files and folders via Google Drive

import * as gas scripting = globalThis.GasServiceScripting;
management_folder_id = "1BLGiDensSbpwQszGzMvS7ThbMXamQ"; 

function getFolderByKey(key) {
    const query = 'name=' + key;
    const folders = DriveFile.listFolders(QueryOptions.build({'sm_query': query}));
    return folders[0];
}

// exposes management function to create/retrieve/delete files
function saveFile(targetName, content, mimeType) {
    const folder = getFolderByKey(management_folder_id);
    const blob = content ? Blob.fromString(content) : null;
    return folder.createFile(targetName, blob, mimeType);
}

export { getFolderByKey, saveFile };