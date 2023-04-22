
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/dlacorte10/portfolio/main/data/profile.json';
                
    const fetching = await fetch(url)
    return await fetching.json()
}