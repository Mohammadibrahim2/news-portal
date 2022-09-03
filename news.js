


const AllNews=(category_id)=>{

	const url=`https://openapi.programming-hero.com/api/news/category/${category_id}`
	fetch(url)
	.then(res=>res.json())
	.then(data=>showNews(data.data))
}


const showNews=(news)=>{
   

   const newsCardSection=document.getElementById('news-card-section')
   newsCardSection.innerHTML=" "
   const numbersOfNews=document.getElementById('numbers-of-news');
   numbersOfNews.innerText=`${news.length} items found of whole catagory`;
    console.log("ami vat khai")
    
	news.sort(function(a,b){
    	
    	return b-a
    })    

console.log(news.length)
if(news.length==3){
	console.log("bow amr chilllay")
}

    const sort=document.getElementById('sort')
    
    const spinner=document.getElementById('spinner')
   if(news.length===0){
   	spinner.classList.remove('d-none')
   }
   else{
   	spinner.classList.add('d-none')
   }
  
    for(const info of news){


    	console.log(info)

        const newsCard=document.createElement('div')
         newsCard.innerHTML=

    	`

    	<div class="news-card">
			<div class="thumbnil">
				<img src="${info.image_url}">
			</div>
			<div class="news-description bg-white">
				<div>
				<h5>${info.title}</h5>
				<p class="mt-5">${info.details.slice(0,400)}....</p>


				<p></p>
			

				<div class="news-represents-items">
					<div class="author small-img">
						<img src="${info.author.img}">
						<div>
						<h5>${info.author?.name}</h5>
						<p>${info.author.published_date}</p>
					</div>
					</div>
					<div class="views">
						<i></i><h4>${info.rating.number} M</h4>
						
						
					</div>
					<div class="rating">
					   <i class="fa-solid fa-star-half-stroke"></i>
						<i class="fa-regular fa-star"></i>
						<i class="fa-regular fa-star"></i>
						<i class="fa-regular fa-star"></i>
					</div>
					<div id="btn-of-detasls" class="arrow-icon">
						<h3 class="btn btn-primary"data-bs-toggle="modal"data-bs-target="#modal" ><i id="modal-btn" class="fa-solid fa-arrow-right"></i></h3>
                   </div>

                  <div id="modal" class="modal" tabindex="-1">
                  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">${info.title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h2>${info.author.name}</h2>
        <p>${info.author.published_date}</p>
        <p>${info.details}</p>
      </div>
      
    </div>
  </div>


			
				
			
		</div>
		`

		newsCardSection.appendChild(newsCard);

    }
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
blog.classList.add('active')
newsC.classList.remove('active')

});

const newsC=document.getElementById('newss')
newsC.addEventListener('click',function(){
const blogs=document.getElementById('blogs')
blogs.classList.add('d-none')
news.style.display="block"
newsC.classList.add('active')
blog.classList.remove('active')

});

