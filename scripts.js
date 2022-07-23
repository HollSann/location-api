const OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c0797ffbb3msh99a0eb4dd30e9cbp1e9bbfjsn9c0810d382b7',
        'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
    }
};

const fetchIpInfo = async ip => {
    return await fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, OPTIONS)
        .then(res => res.json())
        .catch(err => console.log(err))
}

const $form = document.querySelector('#form')
const $input = document.querySelector('#input')
const $results = document.querySelector('#results')
const $submit = document.querySelector('#submit')

$form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const { value } = $input
    if (!value) return
    $submit.setAttribute('disabled', '')
    $submit.setAttribute('aria-busy', 'true')

    const ipInfo = await fetchIpInfo(value)

    if (ipInfo) {

        $results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }

    $submit.removeAttribute('disabled')
    $submit.removeAttribute('aria-busy')
})
