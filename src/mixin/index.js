const api_url = url => process.env.VUE_APP_API_URL + url
const onlyNumber = evt => {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
    } else {
        return true;
    }
}

export default {
    api_url,
    onlyNumber
}