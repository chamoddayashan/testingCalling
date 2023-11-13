function callLandline() {
    var phoneNumber = '1234567890';
    openPhoneDialog(phoneNumber);
}

function callMobile() {
    var phoneNumber = '9876543210';
    openPhoneDialog(phoneNumber);
}

function openPhoneDialog(phoneNumber) {
    // Use the tel: URI scheme to open the phone dialer
    window.location.href = 'tel:' + phoneNumber;
}
