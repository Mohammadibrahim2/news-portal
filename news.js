
const AllNews=(category_id)=>{

	const url=`https://openapi.programming-hero.com/api/news/category/${category_id}`
	
	fetch(url).then((response) => {
  if (response.ok) {
    return response.json();
  } 
  else {
    throw new Error('Something went ');
  }
})
.then((responseJson) => {
  showNews(responseJson.data)
})
.catch((error) => {
	
  console.log(error)
})
}


const showNews=(news)=>{

   const newsCardSection=document.getElementById('news-card-section')
   newsCardSection.innerHTML=" "
   const numbersOfNews=document.getElementById('numbers-of-news');
   numbersOfNews.innerText=`${news.length} items found of whole catagory`;
    
    
    const spinner=document.getElementById('spinner')
   if(news.length===0){
   	spinner.classList.remove('d-none')
   	const emptydata=document.createElement('div')
   	emptydata.innerHTML=`<h1 class="text-center">There is no data </h2>`
   	newsCardSection.appendChild(emptydata)

   }
   else{
   	spinner.classList.add('d-none')
   }
  
   news.forEach(info=>{

   const modalTittle=document.getElementById('modal-tittle')
 modalTittle.innerText=info.title;
 const newsDetails=document.getElementById('news-details')
 newsDetails.innerHTML=`
<h3>Author name:${info.author.name ? info.author.name : 'No auther name'}</h3>
<p>${info.author.published_date ? info.author.published_date : 'No exist time and date'}</p>
<p>${info.details}</p>
<p>Total view: ${info.total_view}</p>
<p>Bdge: ${info.rating.badge}</p>


 `

   	console.log(info)
    const sort=document.getElementById('sort')

    const infoObject=info.total_view;
    
   sort.value=infoObject

      const newsCard=document.createElement('div')
      newsCard.innerHTML=

    
          `<div class="news-card">
			<div class="thumbnil">
				<img src="${info.image_url}">
			</div>
			<div class="news-description bg-white">
				<div>
				<h5>${info.title}</h5>
				<p class="mt-5">${info.details.slice(0,300)}....</p>

				<div class="news-represents-items">
					<div class="author small-img">
						<img src="${info.author.img}">
						<div>
						<h5>${info.author.name ? info.author.name : 'No auther name'}</h5>
						<p>${info.author.published_date ? info.author.published_date : 'No exist time and date'}</p>
					</div>
					</div>
					<div class="views">
					<i class="fa-regular fa-eye"></i><h4>${info.rating.number} M</h4>
					
          </div>

					<div class="rating d-lg-block d-none">
					   <i class="fa-solid fa-star-half-stroke"></i>
						<i class="fa-regular fa-star"></i>
						<i class="fa-regular fa-star"></i>
						<i class="fa-regular fa-star"></i>
					</div>
					<div id="btn-of-detasls" class="arrow-icon">
						<h3 id="modal-btn" class="btn btn-primary" >
						<i data-bs-toggle="modal" data-bs-target="#modal" class="fa-solid fa-arrow-right" ></i></h3>
                   </div>
                     </div>
                      </div>
                     </div>	
	                   </div>

	                   `
		

		newsCardSection.appendChild(newsCard);

    })
};



const btn=(value)=>{

   AllNews(value);
	
}
AllNews('08');
btn();

const blog=document.getElementById('blog')
blog.addEventListener('click',function(){

const news=document.getElementById('news')
news.style.display="none"
blogs.classList.remove('d-none')
blog.classList.add('active');
newsC.classList.remove('active');

});

const newsC=document.getElementById('news-section')
newsC.addEventListener('click',function(){
const blogs=document.getElementById('blogs')
blogs.classList.add('d-none')
news.style.display="block"
newsC.classList.add('active');
blog.classList.remove('active');

});

