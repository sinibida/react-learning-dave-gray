const apiRequest = async (
    url = '',
    optionObj = null, // <-- ?
    errMsg = null,
) => {
    try {
        const response = await fetch(url, optionObj);
        if (!response.ok) { // Request Not OK.
            throw Error('Request Not OK. Reload the app.');
        }
    } catch (err) {
        errMsg = err.message
        console.log(err);
    } finally {
        return errMsg;
    }
}

export default apiRequest;
