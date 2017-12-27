const urlMaps = {
    'host':'http://localhost:3002',
    'post:query:generic': 'db/sql/generic'
};
export var getHttpUrl = (id) => {
    let host = urlMaps.host.replace(/\/$/, "");
    let url = urlMaps[id];
    url && (url = url.replace(/^,/, ''));
    url = host.concat('/', url);
    return (url);
}