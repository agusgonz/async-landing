const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCFbNIlppjAuEX4znoulh0Cw&part=snippet%2Cid&order=date&maxResults=5'

const content = document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6f3684124amshd702a7078b13112p1097b7jsn1785f1c7a6ec',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData() {
  const response = await fetch(API, options)
  const data = await response.json()
  return data
}

(async () => {
  try {
    const videos = await fetchData()
    let view = `
    ${videos.items.map(video => `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    `).slice(0,4).join('')}`
    content.innerHTML = view
  } catch(err) {
    console.log(err)
  }
})()