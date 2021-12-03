
export function buildHeaders(headers) {
    let requestHeaders = getDefaultRequestHeaders();

    if (!headers) {
        return requestHeaders;
    }
    if (Array.isArray(headers)) {
        return requestHeaders;
    }
    for (let keyname in headers) {
        requestHeaders[keyname.toLowerCase()] = headers[keyname];
    }

    return requestHeaders;
}