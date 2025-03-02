
console.log('init');
const query = async () => {
    const response = await fetch('https://18fa-181-24-173-14.ngrok-free.app/',
        {
            method: 'GET',
            // headers: {
            //     'ngrok-skip-browser-warning': true
            // }
        }
    );
    console.log('submit');
    const data = await response.text();
    console.log(data);
}
query();
console.log('end');